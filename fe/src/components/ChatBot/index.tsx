import React from "react";
import Avatar from "@/components/Avatar";
import MessageText from "@/components/MessageText";
import "./index.less";
import botImg from "@/assets/bot.jpeg";
const index = ({ text, type }: { text: string; type: number }) => {
    return (
        <div className="message_container">
            <Avatar imgUrl={botImg} />
            <div className="space_40"></div>
            {type === 1 ? <MessageText>{text}</MessageText> : <img src={text} />}
        </div>
    );
}

export default React.memo(index)

