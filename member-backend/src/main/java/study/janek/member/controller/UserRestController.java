package study.janek.member.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import study.janek.member.model.User;
import study.janek.member.service.UserService;

@CrossOrigin("*")
@RestController
public class UserRestController {

	@Autowired
	private UserService userService;

	@PostMapping("/join")
	public int joinUser(@RequestBody User user) throws Exception {
		int result = 0;
		result = userService.joinUser(user);

		return result;
	}

	@GetMapping("/user/all")
	public List<User> getUserAll() {
		return userService.getUserAll();
	}

	@GetMapping("/user/list/{pageNum}")
	public List<User> getUserList(@PathVariable("pageNum") int pageNum) {
		return userService.getUserList(pageNum);
	}

	@GetMapping("/user/id/{id}")
	public User getUserById(@PathVariable("id") Long id) {
		return userService.getUserById(id);
	}

	@GetMapping("/user/name/{username}")
	public String findByUsername(@PathVariable("username") String username) throws Exception {
		User userEntity = userService.findByUsername(username);

		return userEntity.getUsername();
	}

	@PostMapping("/loginProc")
	public User loginProc(@RequestBody User user) throws Exception {
		return userService.loginProc(user);
	}

	@PostMapping("/user/isMem")
	public int isMem(@RequestBody User user) {
		return userService.isMem(user);
	}

}
