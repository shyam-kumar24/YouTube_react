import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import makeRandomMessage from "../utils/helper";
import { generate } from "../utils/helper";

function LiveChat() {
  const [liveMessage, setLiveMessage] = useState();

  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: makeRandomMessage(20),
        })
      );
      console.log(generate());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="m-2 p-2 border border-black bg-gray-200 w-full h-[385px] rounded-lg overflow-y-scroll flex flex-col-reverse">
        LiveChat
        <ChatMessage name="shyam kumar" message="this is me here" />
        {ChatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="border border-black p-2 m-2 flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'prachi prabha',
              message: liveMessage,
            })
          )
          setLiveMessage('')
        }}
      >
        <input
          type="text"
          className="w-full px-3"
          onChange={(e) => setLiveMessage(e.target.value)}
          value={liveMessage}
        />
        <button className="cursor-pointer px-2 mx-2 bg-green-200">Send</button>
      </form>
    </>
  );
}

export default LiveChat;
