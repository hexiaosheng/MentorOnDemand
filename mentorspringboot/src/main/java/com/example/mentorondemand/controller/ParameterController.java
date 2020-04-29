package com.example.mentorondemand.controller;

import com.example.mentorondemand.entity.*;
import com.example.mentorondemand.service.ParameterService;
import com.example.mentorondemand.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.tags.Param;

import java.util.List;

@Controller
public class ParameterController {
    @Autowired
    private ParameterService parameterService;

    @GetMapping("/parameters")
    public ResponseEntity<List<Parameter>> parameters() {
        return ResponseEntity.ok(parameterService.getAll());
    }

    @PostMapping("/parameter/update")
    public ResponseEntity<Object> add(@RequestBody Parameter parameter){
        return ResponseEntity.ok(parameterService.update(parameter));
    }
}
