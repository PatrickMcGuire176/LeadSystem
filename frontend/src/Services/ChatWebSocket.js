import React, { useState } from "react";
import Input from "../Components/ChatInput";
import Messages from "./Messages";
import { chatAPI } from "../api/api";
// import { Client, Message } from "@stomp/stompjs";

import SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';
import ws from 'websocket';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("PatrickUser");

  // var socket = new Client("wss://localhost:8080/leadsystem-chat/");
  const socket = new WebSocket('ws://localhost:8080/ws-chat/');
  var stompClient = Stomp.over(socket);




  // let onConnected = () => {
  //   console.log("Connected!!");
  // };

  // let onMessageReceived = (msg) => {
  //   console.log("New Message Received!!", msg);
  //   setMessages(messages.concat(msg));
  // };

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
          <Messages messages={messages} currentUser={user} />
          <Input onSendMessage={onSendMessage} />
        </>
      }
    </div>
  );
}
export default Chat;


  // // const socket = new WebSocket("wss://localhost:8080/leadsystem-chat/");

  // // var socket = new SockJS("/spring-websocket-portfolio/portfolio");
  // // const client = new Client("wss://localhost:8080/leadsystem-chat/");
  // // client.brokerURL = "wss://localhost:8080/leadsystem-chat/";

  // var socket = new SockJS("wss://localhost:8080/leadsystem-chat/");
  // socket.onopen = function () {
  //   console.log("open");

  //   //sock.send('test');
  //   socket.send(
  //     JSON.stringify({
  //       name: "Test User",
  //       message: "This is a hard-coded test",
  //     })
  //   );
  //   //sockjs.close();
  // };

  // // var stompClient = webstomp.over(socket);

  // // stompClient.connect({}, function (frame) {});

  // // <WebSocket
  // //   url={SOCKET_URL}
  // //   topics={["/topic/group"]}
  // //   onConnect={onConnected}
  // //   onDisconnect={console.log("Disconnected!")}
  // //   onMessage={(msg) => onMessageReceived(msg)}
  // //   debug={false}
  // // />;



