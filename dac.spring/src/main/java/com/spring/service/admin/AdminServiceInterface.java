package com.spring.service.admin;

import java.util.List;

import com.spring.models.Admin;

public interface AdminServiceInterface {

	Admin save(Admin newUser);

	public Admin authenticateAdmin(String adminName, String password);

	List<Admin> findAdmin();

}
