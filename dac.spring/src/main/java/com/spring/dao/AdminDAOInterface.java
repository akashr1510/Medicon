package com.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.models.Admin;

@Repository
public interface AdminDAOInterface extends JpaRepository<Admin, Long> {

	Admin findByAdminNameAndPassword(String adminName, String password);

}
