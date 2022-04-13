package com.spring.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.rmi.ServerException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.config.JavaBase64;
import com.spring.models.Doctor;
import com.spring.service.Doctor.DoctorServiceInterface;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Doctor")
public class DoctorController {
	
	@Autowired
	private DoctorServiceInterface doctorServiceInterface;
	
	 @Autowired
	    private JavaBase64 crypt;
	
	@GetMapping("/show")
    public List<Doctor> groups() {		
		return doctorServiceInterface.showAll();
    }


	@PostMapping("/Doctor_Registration")
	public ResponseEntity<Doctor> addResource(@RequestBody Doctor r) throws URISyntaxException 
	{	
		 String encoded = crypt.encodePassword(r.getPassword());
		 r.setPassword(encoded);
		 r.setEmail(r.getEmail().toLowerCase());
		 Doctor d= doctorServiceInterface.addDoctor(r); 
		 return ResponseEntity.created(new URI("/Doctor/Doctor_Registration/"+d.getDocotor_id())).body(d);  				
	}
	
	@GetMapping("/hello")
	public String hello()
	{
		return "hello";
	}
	

	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateDoctor(@RequestBody Doctor r) {
		System.out.println("in auth " + r);
		 String encoded = crypt.encodePassword(r.getPassword());
			
		return new ResponseEntity<>(
				doctorServiceInterface.authenticateDoctor(r.getEmail().toLowerCase(),encoded), HttpStatus.OK);

	}

	
	 @GetMapping("/findDoctor/{id}")
		public Optional<Doctor> findDoctor(@PathVariable int id)
		{	
			return doctorServiceInterface.findDoctorbyId(id);
		}
	 
	 @GetMapping("/showAppointments/{id}")
	 public String showAppointment(@PathVariable int id)
	 {
		 return " ";
	 }
	 
	 @DeleteMapping("/delete/{userId}")
	    public void deleteUser(@PathVariable Long userId) {
	        this.doctorServiceInterface.deleteById(userId);
	    }
	 
	    @PutMapping("/update")
	    public ResponseEntity<Doctor> create(@RequestBody Doctor newUser) throws ServerException {
	    	Doctor user = doctorServiceInterface.save(newUser);
	        if (user == null) {
	            throw new ServerException("update failed");
	        } else {
	            return new ResponseEntity<>(user, HttpStatus.CREATED);
	        }
	    }
	    
	    @GetMapping("/findDoctorSpecial/{Special}")
		public List<Doctor> findDoctorBySpecial(@PathVariable String Special)
		{	
			return doctorServiceInterface.findDoctorBySpecial(Special);
		}
	    
	
	
}
