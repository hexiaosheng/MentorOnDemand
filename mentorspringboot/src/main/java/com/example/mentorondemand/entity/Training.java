package com.example.mentorondemand.entity;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
public class Training {
    private int id;
    private String name;
    private int mentorId;
    private int userId;
    private String state;
    private BigDecimal ratings;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "mentorId")
    public int getMentorId() {
        return mentorId;
    }

    public void setMentorId(int mentorId) {
        this.mentorId = mentorId;
    }

    @Basic
    @Column(name = "userId")
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "state")
    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @Basic
    @Column(name = "ratings")
    public BigDecimal getRatings() {
        return ratings;
    }

    public void setRatings(BigDecimal ratings) {
        this.ratings = ratings;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Training trainings = (Training) o;
        return id == trainings.id &&
                mentorId == trainings.mentorId &&
                userId == trainings.userId &&
                Objects.equals(name, trainings.name) &&
                Objects.equals(state, trainings.state) &&
                Objects.equals(ratings, trainings.ratings);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, mentorId, userId, state, ratings);
    }
}
