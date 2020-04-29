package com.example.mentorondemand.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Mentorskill {
    private int id;
    private String name;
    private Integer mentorId;
    private Integer techId;

    @Column(name = "years")
    public Integer getYears() {
        return years;
    }

    public void setYears(Integer years) {
        this.years = years;
    }
    @Transient
    public String getMentorName() {
        return mentorName;
    }

    public void setMentorName(String mentorName) {
        this.mentorName = mentorName;
    }
    @Transient
    public String getTechName() {
        return techName;
    }

    public void setTechName(String techName) {
        this.techName = techName;
    }

    private Integer years;
    @Column(name = "totalDelivered")
    public Integer getTotalDelivered() {
        return totalDelivered;
    }

    public void setTotalDelivered(Integer totalDelivered) {
        this.totalDelivered = totalDelivered;
    }

    private Integer totalDelivered;
    private String mentorName;
    private String techName;

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
    public Integer getMentorId() {
        return mentorId;
    }

    public void setMentorId(Integer mentorId) {
        this.mentorId = mentorId;
    }

    @Basic
    @Column(name = "techId")
    public Integer getTechId() {
        return techId;
    }

    public void setTechId(Integer techId) {
        this.techId = techId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Mentorskill that = (Mentorskill) o;
        return id == that.id &&
                Objects.equals(name, that.name) &&
                Objects.equals(mentorId, that.mentorId) &&
                Objects.equals(techId, that.techId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, mentorId, techId);
    }
}
