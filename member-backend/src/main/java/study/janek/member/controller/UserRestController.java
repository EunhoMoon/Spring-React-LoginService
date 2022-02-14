package study.janek.member.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import study.janek.member.model.User;
import study.janek.member.service.UserService;

@CrossOrigin("*")
@RestController
public class UserRestController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/join")
	public void joinUser(@RequestBody User user) {
		userService.joinUser(user);
	}
	
	@GetMapping("/loginProc")
	public String loginProc() {
//		userService.updateLastLogin();
		return "success";
	}
	
	@GetMapping("/user/all")
	public List<User> getUserAll() {
		return userService.getUserAll();
	}

	@GetMapping("/user/id/{id}")
	public User getUserById(@PathVariable("id") Long id) {
		return userService.getUserById(id);
	}
	
	@GetMapping("/user/name/{username}")
	public User findByUsername(@PathVariable("username") String username) {
		return userService.findByUsername(username);
	}
	
	@PostMapping("/loginProc")
	public String loginProc(@RequestBody User user) {
		User userDto = new User();
		userDto.setUsername(user.getUsername());
		userDto.setPassword(user.getPassword());
		
		User userLogin = userService.loginProc(userDto);
		
		if (userLogin != null) {
			userService.updateLastLogin(userLogin);
			return "success";
		} else {
			return "fail";
		}
	}
	
	
}
