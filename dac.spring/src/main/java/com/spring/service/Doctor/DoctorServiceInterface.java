package com.spring.service.Doctor;

import java.util.List;
import java.util.Optional;

import com.spring.models.Doctor;;

public interface DoctorServiceInterface {
	
//	public doctor getResourceDetails(int resourceId);
	public Doctor addDoctor(Doctor r);

//	public Doctor login(String email, String password);

	public List<Doctor> showAll();

	public Object authenticateDoctor(String email, String password);

	public Optional<Doctor> findDoctorbyId(int id);

	public void deleteById(Long userId);

	public Doctor save(Doctor newUser);

	public List<Doctor> findDoctorBySpecial(String special);


	
	

}
