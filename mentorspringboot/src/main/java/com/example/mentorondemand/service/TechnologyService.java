package com.example.mentorondemand.service;

import com.example.mentorondemand.entity.Mentorskill;
import com.example.mentorondemand.entity.Notification;
import com.example.mentorondemand.entity.Technology;
import com.example.mentorondemand.utils.MySQLHelper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Service
public class TechnologyService {

    private MySQLHelper mySQLHelper;

    public List<Technology> getAll(){
        ResultSet resultSet;
        List<Technology> list=new ArrayList<Technology>();
        Technology technology;
        String sql="select * from technologies";
        try{
            mySQLHelper=new MySQLHelper();
            resultSet=mySQLHelper.executeQuery(sql);
            while(resultSet.next())
            {
                technology=new Technology();
                technology.setId(resultSet.getInt("id"));
                technology.setName(resultSet.getString("name"));

                list.add(technology);
            }
            resultSet.close();
            mySQLHelper.close();
        }catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public boolean add(Technology technology){
        String sql="insert into technologies(name) values('"+technology.getName()+"')";

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

    public  boolean remove(String techId){
        String sql="delete from technologies where id="+techId;

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
