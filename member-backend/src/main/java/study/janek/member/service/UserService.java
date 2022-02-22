package study.janek.member.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.janek.member.mapper.UserMapper;
import study.janek.member.model.User;

@Service
public class UserService {

	@Autowired
	private UserMapper userMapper;
	
	
	public UserService(UserMapper userMapper) {
		this.userMapper = userMapper;
	}
	
	public int joinUser(User user) throws Exception {
		int result = 0;
		User userEntity;
		
		userEntity = findByUsername(user.getUsername());
		
		if (userEntity == null) {
			result = userMapper.joinUser(user);
		}

		return result;
	}
	
	public List<User> getUserAll() {
		return userMapper.getUserAll();
	}
	
	public List<User> getUserList(int pageNum) {
		pageNum = (pageNum - 1) * 10;
		return userMapper.getUserList(pageNum);
	}

	public User getUserById(Long id) {
		return userMapper.getUserById(id);
	}

	public User findByUsername(String username) throws Exception {
		User user = null;
		Optional<User> userInfo = Optional.ofNullable(userMapper.findByUsername(username));
		
		if (userInfo.isPresent()) {
			user = userInfo.get();
		}
		
		return user;
	}
	
	public void updateLastLogin(User user) {
		userMapper.updateLastLogin(user);
	}
	
	public User loginProc(User user) {
		User userEntity = userMapper.loginProc(user);
		if (userEntity != null) {
			userMapper.updateLastLogin(userEntity);
		}

		return userEntity;
	}

	public int isMem(User user) {
		return userMapper.isMem(user);
	}
	
	public int updateUserInfo(User user) {
		return userMapper.updateUserInfo(user);
	}
}
