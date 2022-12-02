
import React ,{ useState, useMemo, useRef, useEffect } from "react";
import { createBotMessage, createUserMessage } from "@/utils/helper";
import { useDispatch } from "react-redux";
import "./index.less";

const index = (props:{maxRows?:number}) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [defaultMaxRows] = useState(5);
  const [rows, setRows] = useState(1);
  const hiddenTextarea = useRef(null);
  const maxRows = useMemo(
    () => props.maxRows || defaultMaxRows,
    [props.maxRows]
  );
  useEffect(() => {
    return () => {
      let r =
        hiddenTextarea.current.scrollHeight /
        hiddenTextarea.current.clientHeight;
      if (r > maxRows) r = maxRows;
      setRows(r);
    };
  }, [maxRows, content]);

  const disable = useMemo(
    () => content.replace(/(^\s+)|(\s+$)/g, "") === "",
    [content]
  );
  function sendMessage() {
    dispatch.chatModel.sendMessage(content);
    setContent("");
  }

  function onChange(e) {
    setContent(e.target.value);
  }

  function onBlur(e) {
    setTimeout(() => {
      window.scrollTo && window.scrollTo(0, 99999999);
    }, 100);
  }

  function onFocus(e) {
    setTimeout(() => {
      window.scrollTo && window.scrollTo(0, 99999999);
    }, 100);
  }

  return (
    <div className="input_area_wrapper">
      <div className="input_area_content">
        <textarea
          spellCheck={false}
          placeholder="Enter the chat Content..."
          rows={rows}
          value={content}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <textarea readOnly rows={1} value={content} ref={hiddenTextarea} />
      </div>
      <input
        className={`input_area_btn ${disable ? "disable" : ""}`}
        type="button"
        value="发送"
        disabled={disable}
        onClick={sendMessage}
      />
    </div>
  );
}



export default React.memo(index);