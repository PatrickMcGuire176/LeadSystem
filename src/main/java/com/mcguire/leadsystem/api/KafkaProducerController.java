package com.mcguire.leadsystem.api;

import com.mcguire.leadsystem.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;
import com.mcguire.leadsystem.kafka.KafkaProducerConfig;

import java.time.LocalDateTime;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping(value = "/kafka")
public class KafkaProducerController
{
    @Autowired
    private KafkaTemplate<String, Message> kafkaTemplate;

//    private final KafkaProducerConfig producerService;

//    @Autowired
//    public KafkaProducerController(KafkaProducerConfig producerService)
//    {
//        this.producerService = producerService;
//    }

    @PostMapping(value = "/api/send", consumes = "application/json", produces = "application/json")
    public void sendMessage(@RequestBody Message message) {
        message.setTimestamp(LocalDateTime.now().toString());
        try {
            //Sending the message to kafka topic queue
            System.out.println("Full Message: " + message.toString());
            System.out.println("Sender: " + message.getSender());
            kafkaTemplate.send("topicName", message).get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

    @MessageMapping("/sendMessage")
    @SendTo("/topic/group")
    public Message broadcastGroupMessage(@Payload Message message) {
        //Sending this message to all the subscribers
        return message;
    }

//    @PostMapping(value = "/publish")
//    public void sendMessageToKafkaTopic(@RequestParam("message") String message)
//    {
//        this.producerService.sendMessage(message);
//    }
}