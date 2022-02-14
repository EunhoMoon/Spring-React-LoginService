package study.janek.member.service;

import java.util.List;

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
	
	public void joinUser(User user) {
		userMapper.joinUser(user);
	}
	
	public List<User> getUserAll() {
		return userMapper.getUserAll();
	}

	public User getUserById(Long id) {
		return userMapper.getUserById(id);
	}

	public User findByUsername(String username) {
		return userMapper.findByUsername(username);
	}
	
	public void updateLastLogin(User user) {
		userMapper.updateLastLogin(user);
	}
	
	public User loginProc(User userDto) {
		return userMapper.loginProc(userDto);
	}
	
}
