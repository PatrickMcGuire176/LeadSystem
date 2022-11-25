import React, { useState, useCallback } from "react";
import Input from "../Components/ChatInput";
import Messages from "./Messages";
import { chatAPI } from "../api/api";
// import { Client, Message } from "@stomp/stompjs";

import SockJS from "sockjs-client";
import { Client, Message, Stomp } from "@stomp/stompjs";
import ws from "websocket";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("PatrickUser");

  // const sock = new SockJS("http://localhost:8080/leadsystem-chat/");
  // // const test = Stomp.over(sock);

  // const myclient = new Client();
  // myclient.webSocketFactory = () => {
  //   return new SockJS("http://localhost:8080/leadsystem-chat/");
  // };

  // myclient.onConnect = function (frame) {
  //   console.log("Connected");
  //   myclient.subscribe("/topic/group", function (msg) {
  //     console.log("hi");
  //   });
  // };

  function connect() {
    const socket = new SockJS("http://localhost:8080/leadsystem-chat/");
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
      console.log("Connected: " + frame);
      stompClient.subscribe("/topic/group", function (message) {
        console.log("Here");
        console.log("Message is: " + message.body);
      });
    });
  }

  connect();

  // client.subcribe("/topic/stocks", function (message) {
  //   var quote = JSON.parse(message.body);
  //   alert(quote.symbol + " is at " + quote.value);
  // });

  // onmessage = function(message) {
  //   console.log("message received");
  // };

  // client.onMessageReceived = (msg) => {
  //   console.log('New Message Received!!', msg);
  //   setMessages(messages.concat(msg));
  // }

  // client.onStompError = function (frame) {
  //   console.log("Broker reported error: " + frame.headers["message"]);
  //   console.log("Additional details: " + frame.body);
  // };
  // client.activate();

  //   let onConnected = () => {
  //     console.log("Connected!!")
  //   }

  //   let onMessageReceived = (msg) => {
  //     console.log('New Message Received!!', msg);
  //     setMessages(messages.concat(msg));
  //   }

  const onSendMessage = (msgText) => {
    chatAPI
      .sendMessage(user.username, msgText)
      .then((res) => {
        console.log("Sent", res);
      })
      .catch((err) => {
        console.log("Error Occured while sending message to api");
      });
  };

  return (
    <div className="App">
      {
        <>
          <myclient></myclient>
          <Messages messages={messages} currentUser={user} />
          <Input onSendMessage={onSendMessage} />
        </>
      }
    </div>
  );
};
export default Chat;
