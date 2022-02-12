package study.janek.member.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import study.janek.member.model.User;
import study.janek.member.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/join")
	public void joinUser(@RequestBody User user) {
		userService.joinUser(user);
	}
	
	@GetMapping("/")
	public List<User> getUserAll() {
		return userService.getUserAll();
	}

	@GetMapping("/{id}")
	public User getUserById(@PathVariable("id") Long id) {
		return userService.getUserById(id);
	}
	
	@GetMapping("/{username}")
	public User findByUsername(@PathVariable("username") String username) {
		return userService.findByUsername(username);
	}
	
}
