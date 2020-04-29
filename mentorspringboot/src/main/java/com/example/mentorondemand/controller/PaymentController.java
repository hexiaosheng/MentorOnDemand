package com.example.mentorondemand.controller;

import com.example.mentorondemand.entity.Payment;
import com.example.mentorondemand.entity.Technology;
import com.example.mentorondemand.service.PaymentService;
import com.example.mentorondemand.service.TechnologyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @GetMapping("/payments")
    public ResponseEntity<List<Payment>> payments() {
        return ResponseEntity.ok(paymentService.getAll());
    }
}
