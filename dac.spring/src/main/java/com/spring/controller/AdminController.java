package com.spring.controller;

import java.rmi.ServerException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.config.JavaBase64;
import com.spring.models.Admin;
import com.spring.models.Appointment;
import com.spring.models.Doctor;
import com.spring.models.Patient;
import com.spring.service.Appointment.AppointmentService;
import com.spring.service.Doctor.DoctorServiceInterface;
import com.spring.service.Patient.PatientService;
import com.spring.service.admin.AdminServiceInterface;

@RestController
@RequestMapping("/Admin")
public class AdminController {
	
	@Autowired
	PatientService patientService;
	@Autowired
	private DoctorServiceInterface doctorServiceInterface;
	@Autowired
	private AdminServiceInterface adminService;

	
	
	@Autowired
	AppointmentService appointmentService;
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateDoctor(@RequestBody Admin r) {
		System.out.println("in auth " + r);
//		 String encoded = crypt.encodePassword(r.getPassword());
		
		return new ResponseEntity<>(
				adminService.authenticateAdmin(r.getAdminName(), r.getPassword()), HttpStatus.OK);

	}
	
	@GetMapping("/show")
    List<Admin> findAdmin() {
        return adminService.findAdmin();
    }
	
	
	// Getting list of patients into database
	@GetMapping("/patlist")
	public List<Patient> getAllPatients()
	{
		return patientService.showAll();
		
	}
	
	
	//getting List of doctors
	@GetMapping("/doclist")
	public List<Doctor> getAllDoctors()
	{
		 return doctorServiceInterface.showAll();
	}
	
	@GetMapping("/applist")
    List<Appointment> findAll() {
        return appointmentService.findAll();
    }
	
	@PutMapping("/update")
    public ResponseEntity<Admin> create(@RequestBody Admin newUser) throws ServerException {
		Admin user = adminService.save(newUser);
        if (user == null) {
            throw new ServerException("update failed");
        } else {
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        }
    }
	
}
