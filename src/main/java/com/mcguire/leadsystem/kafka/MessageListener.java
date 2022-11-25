package com.mcguire.leadsystem.kafka;


import com.mcguire.leadsystem.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class MessageListener {
    @Autowired
    SimpMessagingTemplate template;

    @KafkaListener(
            topics = "topicName",
            groupId = "1"
    )
    public void listen(Message message) {
        System.out.println("sending via kafka listener..");
        System.out.println("From Listener: " + message.toString());
        template.convertAndSend("/topic/group", message);
    }
}