package study.janek.member.model;

import java.sql.Timestamp;

public class User {

	private Long id; // DB에 저장될 id값, pk
	private String username; // user가 사용할 id
	private String password; // password
	private String name; // 이름
	private String email; // email
	private String role; // 회원 구분 ADMIN/USER
	private Timestamp createDate; // 회원 가입 일자
	private Timestamp lastLogin; // 마지막 로그인

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

	public Timestamp getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Timestamp createDate) {
		this.createDate = createDate;
	}

	public Timestamp getLastLogin() {
		return lastLogin;
	}

	public void setLastLogin(Timestamp lastLogin) {
		this.lastLogin = lastLogin;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", name=" + name + ", email=" + email
				+ ", role=" + role + ", createDate=" + createDate + ", lastLogin=" + lastLogin + "]";
	}

}
