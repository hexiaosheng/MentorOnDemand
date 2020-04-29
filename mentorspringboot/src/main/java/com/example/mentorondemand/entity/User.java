package com.example.mentorondemand.entity;

import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.boot.jackson.JsonComponent;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Objects;

@JsonComponent()
@Accessors(chain = true)
@EntityListeners({AuditingEntityListener.class})
@Entity
@Data
@Table(name = "users")
public class User {
    private int id;
    private String name;
    private String password;
    private String role;
    private String status;

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
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "role")
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Basic
    @Column(name = "status")
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User users = (User) o;
        return id == users.id &&
                Objects.equals(name, users.name) &&
                Objects.equals(password, users.password) &&
                Objects.equals(role, users.role) &&
                Objects.equals(status, users.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, password, role, status);
    }
}
