package com.spring.service.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.dao.AdminDAOInterface;
import com.spring.models.Admin;

@Service
public class AdminService implements AdminServiceInterface{

	@Autowired
	AdminDAOInterface adminDAOInterface;
	
	@Override
	public Admin save(Admin newUser) {
		// TODO Auto-generated method stub
		return adminDAOInterface.save(newUser);
	}

	@Override
	public Admin authenticateAdmin(String adminName, String password) {
		// TODO Auto-generated method stub
		return adminDAOInterface.findByAdminNameAndPassword(adminName,password);
	}

	@Override
	public List<Admin> findAdmin() {
		// TODO Auto-generated method stub
		return adminDAOInterface.findAll();
	}

}
