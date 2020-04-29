package com.example.mentorondemand.controller;

import com.example.mentorondemand.entity.Mentorskill;
import com.example.mentorondemand.entity.Notification;
import com.example.mentorondemand.entity.Training;
import com.example.mentorondemand.entity.User;
import com.example.mentorondemand.service.NotificationService;
import com.example.mentorondemand.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private NotificationService notificationService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> search() {
        return ResponseEntity.ok(userService.search());
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> search(@PathVariable("id") Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id){
        return ResponseEntity.ok().build();
    }

    @PostMapping("/user/login")
    public  ResponseEntity<Object> login(@RequestBody User loginUser){
        Map<String,Object> map = new HashMap<>();
        User user = userService.login(loginUser.getName(), loginUser.getPassword());
        if(user != null){
            map.put("status","success");
            map.put("data",user);
        }else{
        map.put("status","Name or Password is not correct");
    }
        return ResponseEntity.ok(map);
    }

    @GetMapping("/user/search")
    public ResponseEntity<List<Mentorskill>> search(@RequestParam("keyword") String keyword) {
        return ResponseEntity.ok(userService.search(keyword));
    }

    @GetMapping("/user/notifications")
    public ResponseEntity<List<Notification>> notifications(@RequestParam("userId") String userId) {
        return ResponseEntity.ok(notificationService.notifications(userId));
    }

    @GetMapping("user/trainings")
    public ResponseEntity<List<Training>> trainings(@RequestParam("userId") String userId, @RequestParam("trainingStatus") String status) {
        return ResponseEntity.ok(userService.trainings(userId,status));
    }

    @PostMapping("user/block")
    public ResponseEntity<Object> block(@RequestParam("userId") String userId)
    {
        return ResponseEntity.ok(userService.block(userId));
    }

    @PostMapping("user/unblock")
    public ResponseEntity<Object> unblock(@RequestParam("userId") String userId)
    {
        return ResponseEntity.ok(userService.unblock(userId));
    }
}
