package com.example.mentorondemand.entity;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.Objects;

public class Payment {
    private int id;
    private int trainingId;
    private int userId;

    public void setTrainingId(int trainingId) {
        this.trainingId = trainingId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setMentorId(int mentorId) {
        this.mentorId = mentorId;
    }

    private int mentorId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTrainingName() {
        return trainingName;
    }

    public void setTrainingName(String trainingName) {
        this.trainingName = trainingName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getMentorName() {
        return mentorName;
    }

    public void setMentorName(String mentorName) {
        this.mentorName = mentorName;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    private String trainingName;
    private String userName;
    private String mentorName;
    private BigDecimal amount;


}
