package study.janek.member.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import study.janek.member.model.User;

@Mapper
public interface UserMapper {

	void joinUser(User user);
	
	List<User> getUserAll();

	User findByUsername(String username);
}
