package com.example.mentorondemand.repository;

import com.example.mentorondemand.entity.Training;
import com.example.mentorondemand.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainingRepository extends JpaRepository<Training,Integer> {
}
