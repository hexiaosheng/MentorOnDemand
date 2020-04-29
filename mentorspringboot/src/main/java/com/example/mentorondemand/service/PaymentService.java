package com.example.mentorondemand.service;

import com.example.mentorondemand.entity.*;
import com.example.mentorondemand.utils.MySQLHelper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Service
public class PaymentService {
    private MySQLHelper mySQLHelper;

    public List<Payment> getAll(){
        ResultSet resultSet;
        List<Payment> list=new ArrayList<Payment>();
        Payment payment;
        String sql="select p.*,t.name as trainingName,t.userId as userId,u1.name as userName," +
                "t.mentorId as mentorId,u2.name as mentorName from payments as p " +
                "inner join trainings as t on p.trainingId=t.id " +
                "inner join users as u1 on t.userId=u1.id " +
                "inner join users as u2 on t.mentorId=u2.id";
        try{
            mySQLHelper=new MySQLHelper();
            resultSet=mySQLHelper.executeQuery(sql);
            while(resultSet.next())
            {
                payment=new Payment();
                payment.setId(resultSet.getInt("id"));
                payment.setTrainingId(resultSet.getInt("trainingId"));
                payment.setMentorId(resultSet.getInt("mentorId"));
                payment.setUserId(resultSet.getInt("userId"));
                payment.setMentorName(resultSet.getString("mentorName"));
                payment.setUserName(resultSet.getString("userName"));
                payment.setTrainingName(resultSet.getString("trainingName"));
                payment.setAmount(resultSet.getBigDecimal("amount"));

                list.add(payment);
            }
            resultSet.close();
            mySQLHelper.close();
        }catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
