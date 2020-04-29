package com.example.mentorondemand.service;

import com.example.mentorondemand.entity.Parameter;
import com.example.mentorondemand.entity.Payment;
import com.example.mentorondemand.entity.Technology;
import com.example.mentorondemand.utils.MySQLHelper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Service
public class ParameterService {
    private MySQLHelper mySQLHelper;

    public List<Parameter> getAll(){
        ResultSet resultSet;
        List<Parameter> list=new ArrayList<Parameter>();
        Parameter parameter;
        String sql="select * from parameters";
        try{
            mySQLHelper=new MySQLHelper();
            resultSet=mySQLHelper.executeQuery(sql);
            while(resultSet.next())
            {
                parameter=new Parameter();
                parameter.setId(resultSet.getInt("id"));
                parameter.setPerCommissionPayment(resultSet.getInt("perCommissionPayment"));

                list.add(parameter);
            }
            resultSet.close();
            mySQLHelper.close();
        }catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }


    public boolean update(Parameter parameter){
        String sql="update parameters set perCommissionPayment="+parameter.getPerCommissionPayment()+"" +
                " where id="+parameter.getId();

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
