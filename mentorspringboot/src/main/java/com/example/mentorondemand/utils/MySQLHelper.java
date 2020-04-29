package com.example.mentorondemand.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MySQLHelper {
    public static final String url = "jdbc:mysql://127.0.0.1:3306/mentorondemand";
    public static final String name = "com.mysql.cj.jdbc.Driver";//"com.mysql.jdbc.Driver";
    public static final String user = "root";
    public static final String password = "12345678";

    public Connection connection = null;
    public PreparedStatement preparedStatement = null;

    public MySQLHelper()
    {
        try
        {
            Class.forName(name);
            connection = DriverManager.getConnection(url, user, password);
        } catch (Exception e)
        {
            e.printStackTrace();
        }
    }
    public void close()
    {
        try
        {
            this.connection.close();
            this.preparedStatement.close();
        } catch (SQLException e)
        {
            e.printStackTrace();
        }
    }

    public ResultSet executeQuery(String sql)
    {
        ResultSet resultSet = null;

        try
        {
            preparedStatement = connection.prepareStatement(sql);
            resultSet = preparedStatement.executeQuery();
        } catch (Exception e)
        {
            e.printStackTrace();
        }
        return resultSet;
    }

    public boolean executeNonQuery(String sql)
    {
        boolean flag = false;
        try
        {
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement.executeUpdate();
            flag = true;
        } catch (Exception e)
        {
            e.printStackTrace();
        }
        return flag;
    }

    public int getCount(String sql)
    {
        int count=0;
        try
        {
            preparedStatement=connection.prepareStatement(sql);
            ResultSet resultSet=preparedStatement.executeQuery();
            resultSet.last();
            count=resultSet.getRow();
            resultSet.close();
        } catch (Exception e)
        {
            e.printStackTrace();
        }
        return count;
    }
}
