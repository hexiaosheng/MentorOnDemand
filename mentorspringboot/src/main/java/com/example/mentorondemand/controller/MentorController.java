package com.example.mentorondemand.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import com.example.mentorondemand.entity.*;
import com.example.mentorondemand.service.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class MentorController {
    @Autowired
    private MentorService mentorService;
    @Autowired
    private NotificationService notificationService;

    @GetMapping("/mentor/notifications")
    public ResponseEntity<List<Notification>> notifications(@RequestParam("userId") String userId) {
        return ResponseEntity.ok(notificationService.notifications(userId));
    }

    @GetMapping("mentor/trainings")
    public ResponseEntity<List<Training>> trainings(@RequestParam("userId") String userId, @RequestParam("trainingStatus") String status) {
        return ResponseEntity.ok(mentorService.trainings(userId,status));
    }

    @GetMapping("mentor/skills")
    public ResponseEntity<List<Mentorskill>> skills(@RequestParam("userId") String userId) {
        return ResponseEntity.ok(mentorService.skills(userId));
    }

    @PostMapping("mentor/addskill")
    public ResponseEntity<Object> addSkill(@RequestBody Mentorskill mentorskill) {
        return ResponseEntity.ok(mentorService.addSkill(mentorskill));
    }
}

