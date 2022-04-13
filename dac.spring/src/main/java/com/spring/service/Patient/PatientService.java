package com.spring.service.Patient;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.dao.PatientDaoInterface;
import com.spring.models.Patient;

@Service
public class PatientService implements PatientServiceInterface {

	
	@Autowired
	private PatientDaoInterface patientDaoInterface;

	
	
	
	@Override
	public Patient addPatient(Patient p) {
		// TODO Auto-generated method stub
		
		Patient patient = null;
			try
			{
				patient=patientDaoInterface.save(p);
				return patient;
			}
			catch(Exception e){ 
				System.out.println(e.getMessage());
			}
		return patient;
	}
	
	@Override
	public List<Patient> showAll() {
		
		return patientDaoInterface.findAll();
		
	}
	@Override
	public Patient authenticatePatient(String email, String password) {
		// TODO Auto-generated method stub
		
		return patientDaoInterface.findByEmailAndPassword(email, password);
	}

	@Override
	public Object authenticateDoctor(String email, String password) {
		return patientDaoInterface.findByEmailAndPassword(email, password);
	}

	@Override
	public void delete(Long userId) {
		
		patientDaoInterface.deleteById(userId);
		
	}

	@Override
	public Patient save(Patient newUser) {
		
		return patientDaoInterface.save(newUser);
	}

	@Override
	public Optional<Patient> findPatientbyId(long id1) {
		long id = (long) id1;
		
		return patientDaoInterface.findById(id);
	}

	@Override
	public boolean findByEmail(String email) {
	
			Patient p=patientDaoInterface.findByEmail(email);
			if(p!=null)
				return true;
			
		return false;
	}


	
	
	
}
