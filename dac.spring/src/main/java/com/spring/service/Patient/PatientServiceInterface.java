package com.spring.service.Patient;

import java.util.List;
import java.util.Optional;

import com.spring.models.Patient;

public interface PatientServiceInterface {

	Patient addPatient(Patient p);

	List<Patient> showAll();

	Patient authenticatePatient(String email, String password);

	Object authenticateDoctor(String email, String password);

	void delete(Long userId);

	Patient save(Patient newUser);

	Optional<Patient> findPatientbyId(long id);

	boolean findByEmail(String string);

	

	

}
