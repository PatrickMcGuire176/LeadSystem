import React, { useState, useEffect} from "react";
import ChatInput from "../Components/ChatInput";
import { chatAPI } from "../api/api";
// import { Client, Message } from "@stomp/stompjs";

import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";



const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [runFlag, setRunFlag] = useState(false);

  useEffect(() => {
    connect();
  }, [runFlag]);

  const connect = () => {
    const socket = new SockJS("http://localhost:8080/leadsystem-chat/");
    const stompClient = Stomp.over(socket);
    stompClient.onConnect = function (frame) {
      stompClient.subscribe("/topic/group", function (message) {
        var messageJson = JSON.parse(message.body);
        setMessages(messages => [...messages, messageJson.content+"\n"]);
        console.log("Message received.  content is " + messageJson.content);
      });
    }
    stompClient.activate();
  }

  const onSendMessage = (msgText) => {
    chatAPI
      .sendMessage("Patrick", msgText)
      .then((res) => {
        console.log("Sent", res);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error Occured while sending message to api");
      });
  };

  return (
    <div>
      <ChatInput onSendMessage={onSendMessage} passedMessages={messages}></ChatInput>
    </div>
  );
};
export default Chat;
