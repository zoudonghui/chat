import { httpRequest } from "./api"

interface IMsg {
    msg: string
}
export const sendMsg = (p: IMsg ) => {
    return httpRequest({
        url: '/api/v1/send_msg',
        method: 'post',
        data: p
    })
}
