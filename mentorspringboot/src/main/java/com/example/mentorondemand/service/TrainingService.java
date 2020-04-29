package com.example.mentorondemand.service;

import com.example.mentorondemand.utils.MySQLHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.mentorondemand.repository.*;
import com.example.mentorondemand.entity.*;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Service
public class TrainingService {
    @Autowired
    private TrainingRepository trainingRepository;
    private MySQLHelper mySQLHelper;

    public List<Training> search(String userId, String trainingStatus){
        ResultSet resultSet;
        Training training;
        List<Training> list=new ArrayList<Training>();
        String sql="select t.* from trainings as t inner join users as u on t.userId=u.id" +
                " where u.id="+userId+"";

        if(trainingStatus.equals("progress")){
            sql=sql+" and state<>'completed'";
        }else
        {
            sql=sql+" and state='completed'";
        }
        try{
            mySQLHelper=new MySQLHelper();
            resultSet=mySQLHelper.executeQuery(sql);
            while(resultSet.next())
            {
                training=new Training();
                training.setId(resultSet.getInt("id"));
                training.setUserId(resultSet.getInt("userId"));
                training.setMentorId(resultSet.getInt("mentorId"));
                training.setState(resultSet.getString("state"));
                training.setName(resultSet.getString("name"));
                training.setRatings(resultSet.getBigDecimal("ratings"));

                list.add(training);
            }
            resultSet.close();
        }catch (Exception e) {
            e.printStackTrace();
        }finally {
            mySQLHelper.close();
        }
        return list;
    }

    public  boolean propose(Training training){
        String sql="insert into trainings(name,mentorId,userId,state,ratings) values('"+training.getName()+"'" +
                ","+training.getMentorId()+","+training.getUserId()+",'Proposed',0)";

        String sql1="insert into notifications(userId,title,content) values("+training.getMentorId()+"," +
                "'training for confirmation','training for confirmation')";

        Boolean retVal=false;
        try{
            mySQLHelper=new MySQLHelper();
            retVal= mySQLHelper.executeNonQuery(sql) &
                    mySQLHelper.executeNonQuery(sql1);
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            mySQLHelper.close();
        }
        return retVal;
    }

    public  boolean payment(Training training){
        String sql="update trainings set state='Started' where id="+training.getId();
        String sql1="insert into payments(trainingId,amount) values ("+training.getId()+",100.00)";

        Boolean retVal=false;
        try{
            mySQLHelper=new MySQLHelper();
            retVal= mySQLHelper.executeNonQuery(sql)&
                    mySQLHelper.executeNonQuery(sql1);
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            mySQLHelper.close();
        }
        return retVal;
    }

    public  boolean rating(Training training){
        String sql="update trainings set ratings="+training.getRatings()+" where id="+training.getId();

        String sql1="insert into notifications(userId,title,content) values("+training.getMentorId()+"," +
                "Rating for training','User rate "+training.getRatings()+" for your training')";
        Boolean retVal=false;
        try{
            mySQLHelper=new MySQLHelper();
            retVal= mySQLHelper.executeNonQuery(sql)&
                    mySQLHelper.executeNonQuery(sql1);
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            mySQLHelper.close();
        }
        return retVal;
    }

    public  boolean confirm(Training training){
        String sql="update trainings set state='Confirmed' where id="+training.getId();

        String sql1="insert into notifications(userId,title,content) values("+training.getUserId()+"," +
                "'Training confirmed','Training has been confirmed by mentor')";

        Boolean retVal=false;
        try{
            mySQLHelper=new MySQLHelper();
            retVal= mySQLHelper.executeNonQuery(sql)&
                    mySQLHelper.executeNonQuery(sql1);
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            mySQLHelper.close();
        }
        return retVal;
    }
}
