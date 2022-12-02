import { createModel } from "@rematch/core";
import { RootModel } from "./index";
import { sendMsg } from '@/servers/ajax';
import { createBotMessage, createUserMessage } from '@/utils/helper';

const sleep = time => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

export const chatModel = createModel<RootModel>()({
    state: {
        list: [1]
    },
    reducers: {
        addChatId(state, payload) {
            const prv = [...state.list]
            prv.push(payload)
            return {
                ...state,
                list: [...prv]
            }
        },
    },
    effects: (dispatch) => ({
        async sendMessage(content: string) {
            const userMessageInfo = createUserMessage(content)
            dispatch.messageModel.addMessage(userMessageInfo);
            this.addChatId(userMessageInfo.id)
            setTimeout(async () => {
                const botMessageInfo = createBotMessage('...')
                dispatch.messageModel.addMessage(botMessageInfo);
                this.addChatId(botMessageInfo.id)
                await sleep(5000)
                const { errorCode, data,msg } = await sendMsg({ msg: content });
                if (errorCode) {
                    dispatch.messageModel.updateMessageStatus({
                        id: botMessageInfo.id,
                        text: msg,
                        role: 2,
                        status: 1,
                        type: 1,
                    })
                } else {
                    dispatch.messageModel.updateMessageStatus({
                        id: botMessageInfo.id,
                        text: data.context,
                        role: 2,
                        status: 1,
                        type: data.type,
                    })
                }
            }, 0);

        }
    })
})