package com.spring.service.Doctor;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.dao.DoctorDaoInterface;
import com.spring.models.Doctor;


@Service
public class DoctorService implements DoctorServiceInterface {
	
	
	@Autowired
	private DoctorDaoInterface doctorDaoInterface;
	
	
	

	@Override
	public Doctor addDoctor(Doctor r) {
		// TODO Auto-generated method stub
		
		
			Doctor d=doctorDaoInterface.save(r);
			
		
		return d;
	}
	
//	@Override
//	public Doctor login(String email, String password) 
//	{
//		Optional<Doctor> user = doctorDaoInterface.findByEmailAndPassword(email, password);
//
//		return user;
//    }


	@Override
	public List<Doctor> showAll() {
		
		return doctorDaoInterface.findAll();
		
		
	}

	@Override
	public Doctor authenticateDoctor(String email, String password) {
		// TODO Auto-generated method stub
		return doctorDaoInterface.findByEmailAndPassword(email, password);
	}

	@Override
	public Optional<Doctor> findDoctorbyId(int id) {
		Long docotor_id = (long) id;
		Optional<Doctor> d = doctorDaoInterface.findById(docotor_id);
		
		return d;
	}

	@Override
	public void deleteById(Long userId) {
		this.doctorDaoInterface.deleteById(userId);
		
	}

	@Override
	public Doctor save(Doctor newUser) {
		
		return doctorDaoInterface.save(newUser);
	}

	@Override
	public List<Doctor> findDoctorBySpecial(String special) {
		// TODO Auto-generated method stub
		return doctorDaoInterface.findAllByDoctorSpecialization(special);
	}
	
	

}
