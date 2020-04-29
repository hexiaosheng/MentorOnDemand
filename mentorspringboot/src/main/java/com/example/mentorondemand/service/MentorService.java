package com.example.mentorondemand.service;

import com.example.mentorondemand.entity.*;
import org.springframework.stereotype.Service;
import com.example.mentorondemand.utils.*;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class MentorService {

    private MySQLHelper mySQLHelper;

    public List<Training> trainings(String userId, String trainingStatus){
        ResultSet resultSet;
        Training training;
        List<Training> list=new ArrayList<Training>();
        String sql="select t.* from trainings as t inner join users as u on t.mentorId=u.id" +
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

    public List<Mentorskill> skills(String userId){
        ResultSet resultSet;
        List<Mentorskill> list=new ArrayList<Mentorskill>();
        Mentorskill mentorskill;
        String sql="select m.*,u.name as mentorName,t.name as techName from mentorskills m " +
                "inner join users u on m.mentorId=u.id " +
                "inner join technologies t on t.id=m.techId " +
                "where m.mentorId= '"+userId+"'";
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

    public  boolean addSkill(Mentorskill skill){
        String sql="insert into mentorskills(name,mentorId,techId,years,totalDelivered) values('"+skill.getName()+"'," +
                ""+skill.getMentorId()+","+skill.getTechId()+","+skill.getYears()+","+skill.getTotalDelivered()+")";

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
