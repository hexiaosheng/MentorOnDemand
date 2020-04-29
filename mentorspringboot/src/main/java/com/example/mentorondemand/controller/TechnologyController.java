package com.example.mentorondemand.controller;

import com.example.mentorondemand.entity.Technology;
import com.example.mentorondemand.entity.Training;
import com.example.mentorondemand.service.TechnologyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class TechnologyController {
    @Autowired
    private TechnologyService technologyService;

    @GetMapping("/technologies")
    public ResponseEntity<List<Technology>> technologies() {
        return ResponseEntity.ok(technologyService.getAll());
    }

    @PostMapping("/technology/add")
    public ResponseEntity<Object> add(@RequestBody Technology technology){
        return ResponseEntity.ok(technologyService.add(technology));
    }

    @DeleteMapping ("/technology/remove")
    public ResponseEntity<Object> remove(@RequestParam("techId") String techId)
    {
        return ResponseEntity.ok(technologyService.remove(techId));
    }
}
