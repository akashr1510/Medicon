package com.spring.controller;

import java.rmi.ServerException;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.config.JavaBase64;
import com.spring.dao.PatientDaoInterface;
import com.spring.models.Patient;
import com.spring.service.Patient.PatientServiceInterface;


@RestController
@RequestMapping("/Patient")
public class PatientController {
 
    @Autowired
    private PatientServiceInterface patientRepo;
    @Autowired
    private PatientDaoInterface dao;
    @Autowired
    private JavaBase64 crypt; 
    
 Logger logger = LoggerFactory.getLogger(PatientController.class);
    
 
 @PostMapping("/register")		//checked
 public Patient showRegistrationForm(@RequestBody Patient m) {
    
	 String encoded = crypt.encodePassword(m.getPassword());
	 
	m.setPassword(encoded);
	m.setEmail(m.getEmail().toLowerCase());
 	Patient p=null;    	
 	if(!patientRepo.findByEmail((m.getEmail())))
      {
 		p=patientRepo.addPatient(m);
               }         
          return p;

 }
 
 
    
    @GetMapping("/show")		//Checked
    public List<Patient> groups() {	
   
		return patientRepo.showAll();
    }
    
//    @PostMapping("/signin") 
//	public ResponseEntity<?> authenticateDoctor(@RequestBody Patient p) {
////		System.out.println("in auth " + p);
//    	//patientRepo.authenticateDoctor(p.getEmail(), p.getPassword()), HttpStatus.OK);
//	
//    	logger.info("before"+p.getPassword());
////    	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
////		String password1 = passwordEncoder.encode(p.getPassword()).toString();
////		logger.info("After"+password1);
//		return new ResponseEntity<>(
//				patientRepo.authenticatePatient(p.getEmail(), p.getPassword()), HttpStatus.OK);
//
//	}
    
    
    @PostMapping("/signin") 
 	public ResponseEntity<?> authenticateDoctor(@RequestBody Patient p) {
 	
    	String decodedPass = crypt.encodePassword(p.getPassword());// Encoded form of original password
     	
 		return new ResponseEntity<>(
 				patientRepo.authenticatePatient(p.getEmail().toLowerCase(), decodedPass), HttpStatus.OK);

 	}
    
    
    
    @GetMapping("/findPatient/{id}")
	public Optional<Patient> findPatient(@PathVariable int id)
	{	
		return patientRepo.findPatientbyId(id);
	}
    
    
    @DeleteMapping("/delete/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        try {
        	this.patientRepo.delete(userId);
        }
        catch (Exception e) {
			logger.info("patinet Deletion failed"+e.getStackTrace());
		}
 
    }
    
  

    
    @PutMapping("/update")
    public ResponseEntity<Patient> create(@RequestBody Patient newUser) throws ServerException {
    	Patient user = null;
    	//if(!patientRepo.findByEmail((newUser.getEmail())))
       // {         
             user = patientRepo.save(newUser);
        //if (user == null) {
        	logger.info("Patient Service Update method Failed");
         //   throw new ServerException("update failed");
        //}
        //}
    	return  new ResponseEntity<>(user, HttpStatus.CREATED);
    }
    
    
    @GetMapping("/getName/{p}")
    public String getName(@PathVariable long l)
    {
    	String name = null;
    
    	try{
    	Optional<Patient> patient = patientRepo.findPatientbyId(l);
    	if(patient.isPresent())
    	{
    		Patient p1 = patient.get();
    		name = p1.getFirstName() +" "+ p1.getLastName();
    	}
    	}
    	catch (Exception e) {
			logger.warn("Issues in /getName in Patient + "+e.getStackTrace());
		}
    	
    	return name;
    }
    
    @GetMapping("/home")
    @ResponseBody
    public String welcome()
    {
    	return "home component";
    }
    
    @GetMapping("/getemail/{email}")
    public boolean getemail(@PathVariable String email)
    {
    	return patientRepo.findByEmail(email);
    }
//    @PostMapping("/process_register")
//    public String processRegister(Patient user) {
//      // BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//        //String encodedPassword = passwordEncoder.encode(user.getPassword());
//        //user.setPassword(encodedPassword);
//         
//        userRepo.save(user);
//         
//        return "register_success";
//        
//        }
    
//    @GetMapping("/patient")
//    public String listUsers(Model model) {
//        List<Patient> listUsers = userRepo.findAll();
//        model.addAttribute("listUsers", listUsers);
//  
//        return "listUsers";
//    }
    }
