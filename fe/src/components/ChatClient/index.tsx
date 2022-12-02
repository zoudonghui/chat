import "./index.less";
import React from "react";
import Avatar from "@/components/Avatar";
import avatarImg from "@/assets/avatar.jpeg";
import MessageText from "@/components/MessageText";

const index = ({ text }: { text: string }) => {
    return (
        <div className="user_message_container">
            <Avatar imgUrl={avatarImg} />
            <div className="space_40"></div>
            <MessageText>{text}</MessageText>
        </div>
    );
}


export default React.memo(index);