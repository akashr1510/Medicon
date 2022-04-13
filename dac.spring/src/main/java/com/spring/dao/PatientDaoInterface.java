package com.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.models.Patient;

@Repository
public interface PatientDaoInterface extends JpaRepository<Patient, Long> {
	
//	@Query("SELECT u FROM User u WHERE u.email = ?1")
//	    public Patient findByEmail(String email);
	 
	 Patient findByEmailAndPassword(String email, String password);

	Patient findByEmail(String email);

	

	 
}
