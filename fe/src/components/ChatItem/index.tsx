import React from "react";
import ChatBot from "@/components/ChatBot";
import ChatClient from "@/components/ChatClient";

import { useDispatch, useSelector } from "react-redux";
import { RootState, Dispatch } from "@/store";

const index = ({id}:{id:number}) => {
    const message = useSelector((item: RootState) => item.messageModel);
    if (message[id].role === 2) {
        return <ChatBot type={message[id].type} text={message[id].text} />;
    }
    return <ChatClient text={message[id].text} />;
}

export default React.memo(index);