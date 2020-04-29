package com.example.mentorondemand.service;

import com.example.mentorondemand.entity.Mentorskill;
import com.example.mentorondemand.entity.Notification;
import com.example.mentorondemand.entity.Training;
import com.example.mentorondemand.entity.User;
import com.example.mentorondemand.repository.UserRepository;
import com.example.mentorondemand.utils.MySQLHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private MySQLHelper mySQLHelper;

    public List<User> search() {
        return userRepository.findAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id).get();
    }

    public User login(String name, String password){
        return userRepository.login(name,password);
    }

    public List<Mentorskill> search(String keyword){
        ResultSet resultSet;
        List<Mentorskill> list=new ArrayList<Mentorskill>();
        Mentorskill mentorskill;
        String sql="select m.*,u.name as mentorName,t.name as techName from mentorskills m " +
                "inner join users u on m.mentorId=u.id " +
                "inner join technologies t on t.id=m.techId " +
                "where t.name like '%"+keyword+"%'";
        try{
            mySQLHelper=new MySQLHelper();
            resultSet=mySQLHelper.executeQuery(sql);
            while(resultSet.next())
            {
                mentorskill=new Mentorskill();
                mentorskill.setId(resultSet.getInt("id"));
                mentorskill.setTechId(resultSet.getInt("techId"));
                mentorskill.setMentorId(resultSet.getInt("mentorId"));
                mentorskill.setMentorName(resultSet.getString("mentorName"));
                mentorskill.setName(resultSet.getString("name"));
                mentorskill.setTechName(resultSet.getString("techName"));
                mentorskill.setTotalDelivered(resultSet.getInt("totalDelivered"));
                mentorskill.setYears(resultSet.getInt("years"));

                list.add(mentorskill);
            }
            resultSet.close();
            mySQLHelper.close();
        }catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public List<Training> trainings(String userId, String trainingStatus){
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
    public  boolean block(String userId){
        String sql="update users set status='blocked' where id="+userId;

        Boolean retVal=false;
        try{
            mySQLHelper=new MySQLHelper();
            retVal= mySQLHelper.executeNonQuery(sql);
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            mySQLHelper.close();
        }
        return retVal;
    }

    public  boolean unblock(String userId){
        String sql="update users set status='unblocked' where id="+userId;

        Boolean retVal=false;
        try{
            mySQLHelper=new MySQLHelper();
            retVal= mySQLHelper.executeNonQuery(sql);
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            mySQLHelper.close();
        }
        return retVal;
    }
}
