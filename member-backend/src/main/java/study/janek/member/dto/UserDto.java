package study.janek.member.dto;

import java.sql.Timestamp;
import java.util.List;

import study.janek.member.model.Board;

public class UserDto {

	private Long id;
	private String username;
	private String password;
	private String name;
	private String email;
	private String role;
	private String createDate;
	private String lastLogin;
	private List<Board> post;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getLastLogin() {
		return lastLogin;
	}

	public void setLastLogin(String lastLogin) {
		this.lastLogin = lastLogin;
	}

	public List<Board> getPost() {
		return post;
	}

	public void setPost(List<Board> post) {
		this.post = post;
	}

}
