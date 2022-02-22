package study.janek.member.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import study.janek.member.model.User;

@Mapper
public interface UserMapper {

	int joinUser(User user);
	
	List<User> getUserAll();
	
	List<User> getUserList(int pageNum);

	User getUserById(Long id);

	User findByUsername(String username) throws Exception;
	
	void updateLastLogin(User user);
	
	User loginProc(User user);
	
	int isMem(User user);
	
	int updateUserInfo(User user);
}
