package com.spring.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long adminId;
	
	@Column(nullable = false, unique = true, length = 45)
	private String adminName;
	
	@Column(nullable = false)
	private String password;
	
	
	public long getAdminId() {
		return adminId;
	}
	
	public void setAdminId(long adminId) {
		this.adminId = adminId;
	}
	
	public String getAdminName() {
		return adminName;
	}
	
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Admin(long adminId, String adminName, String password) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.password = password;
	}
	
	public Admin() {
		super();
	}
	
	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", adminName=" + adminName + ", password=" + password + "]";
	}

	

	
	
}
