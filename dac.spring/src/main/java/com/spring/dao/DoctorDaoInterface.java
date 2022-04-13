package com.spring.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.models.Doctor;

@Repository
public interface DoctorDaoInterface extends JpaRepository<Doctor, Long> 
{
	Doctor findByEmailAndPassword(String email, String password);

	List<Doctor> findAllByDoctorSpecialization(String doctorSpecialization);	
}
