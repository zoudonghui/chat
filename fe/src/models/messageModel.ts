import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const messageModel = createModel<RootModel>()({
    state: {
        1: {
            id: 1,
            text: 'Hi there, I am Aida, an Ai bot created by Artflow',
            status: 1,
            role: 2, // 1 : client, 2 : bot
            type: 1, // 1: text, 2: img
        }
    },
    reducers: {
        updateMessageStatus(state, payload) {
            const nextStatus = { ...state };
            nextStatus[payload.id] = payload
            return {
                ...nextStatus
            }
        },
        addMessage(state, payload) {
            const nextStatus = { ...state }
            if (!nextStatus[payload.id]) {
                nextStatus[payload.id] = payload
            }
            return {
                ...nextStatus
            }
        }
    }
})