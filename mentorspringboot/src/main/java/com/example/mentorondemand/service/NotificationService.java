package com.example.mentorondemand.service;

import com.example.mentorondemand.entity.Notification;
import com.example.mentorondemand.utils.MySQLHelper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Service
public class NotificationService {
    private MySQLHelper mySQLHelper;
    public List<Notification> notifications(String userId){
        ResultSet resultSet;
        List<Notification> list=new ArrayList<Notification>();
        Notification notification;
        String sql="select * from notifications where userId="+userId;
        try{
            mySQLHelper=new MySQLHelper();
            resultSet=mySQLHelper.executeQuery(sql);
            while(resultSet.next())
            {
                notification=new Notification();
                notification.setId(resultSet.getInt("id"));
                notification.setUserId(resultSet.getInt("userId"));
                notification.setTitle(resultSet.getString("title"));
                notification.setContent(resultSet.getString("content"));

                list.add(notification);
            }
            resultSet.close();
            mySQLHelper.close();
        }catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
