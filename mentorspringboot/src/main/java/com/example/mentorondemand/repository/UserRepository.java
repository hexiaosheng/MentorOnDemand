package com.example.mentorondemand.repository;

import com.example.mentorondemand.entity.Mentorskill;
import com.example.mentorondemand.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    @Query(value = "select t from User t where t.name=?1 and t.password=?2 and t.status='unblocked'")
    User login(String username, String password);

//    @Query(value = "select m.*,u.name,t.name from mentorskills m inner join users u on m.mentorId=u.id " +
//            "inner join technologies t on t.id=m.techId " +
//            "where t.name like \"%?1%\"")
//    Mentorskill Search(String techName);
}
