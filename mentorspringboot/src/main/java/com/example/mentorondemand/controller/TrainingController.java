package com.example.mentorondemand.controller;

import org.hibernate.loader.collection.BasicCollectionJoinWalker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import com.example.mentorondemand.entity.*;
import com.example.mentorondemand.service.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class TrainingController {
    @Autowired
    private TrainingService trainingService;

    @PostMapping("/training/proposal")
    public ResponseEntity<Object> Proposal(@RequestBody Training training){
        return ResponseEntity.ok(trainingService.propose(training));
    }

    @PostMapping("/training/payment")
    public ResponseEntity<Object> Payment(@RequestBody Training training)
    {
        return ResponseEntity.ok(trainingService.payment(training));
    }

    @PostMapping("/training/rating")
    public ResponseEntity<Object> Rating(@RequestBody Training training){
        return ResponseEntity.ok(trainingService.rating(training));
    }

    @PostMapping("/training/confirm")
    public ResponseEntity<Object> confirm(@RequestBody Training training){
        return ResponseEntity.ok(trainingService.confirm(training));
    }
}
