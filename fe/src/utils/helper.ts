

export const createUserMessage = (text: string) => {
    return {
        id : Date.now(),
        text: text,
        status : 1,
        role: 1,
        type: 1,
    }
}

export const createBotMessage = (text: string) => {
    return {
        id : Date.now(),
        text: text,
        status : 0,
        role: 2,
        type: 1,
    }
}