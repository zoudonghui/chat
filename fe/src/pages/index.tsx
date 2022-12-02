import "./index.less";

import InputArea from "@/components/InputArea";
import ChatItem from "@/components/ChatItem";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Dispatch } from "../store";

export default function HomePage() {
  const list = useSelector((item: RootState) => item.chatModel.list);
  return (
    <div className="container">
      <header> chat </header>
      <div className="chat_container">
        {list.map((item) => (
          <ChatItem id={item} key={item} />
        ))}
      </div>
      <div className="chat_send_section">
        <InputArea maxRows={5}/>
      </div>
    </div>
  );
}
