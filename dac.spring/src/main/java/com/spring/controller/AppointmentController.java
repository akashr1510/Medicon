package com.spring.controller;

import java.rmi.ServerException;
import java.util.ArrayList;
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
import com.spring.models.Appointment;
import com.spring.models.AppointmentWithName;
import com.spring.service.Appointment.AppointmentServiceInterface;

@RestController
@RequestMapping("/Appointment")
public class AppointmentController {

	@Autowired
	private AppointmentServiceInterface appointmentService;
	
	 @Autowired
	   private PatientController patientRepo;
	 
	 @Autowired
	    private JavaBase64 crypt;
	
	@GetMapping("/findApp/{id}")
	public Optional<Appointment> findapp(@PathVariable int id)
	{
		return appointmentService.findById(id);
		
	}
	
	 @GetMapping("/show")
	    List<Appointment> findAll() {
	        return appointmentService.findAll();
	    }
	 
	   @PostMapping("/bookApp")
	    public Appointment showRegistrationForm(@RequestBody Appointment a) {   
		   Appointment a1=appointmentService.addAppointment(a);	          

	             return a1;

	    }
	   
	   @GetMapping("/showAppointmentName/{doctorid}")
	   public List<AppointmentWithName> showDoctorAppointmentName(@PathVariable int doctorid){
		   
		   List<AppointmentWithName> app = new ArrayList<>();
		   
		   List<Appointment> appoint = appointmentService.showDoctorAppointmentName(doctorid);
		   
		   for(Appointment a1 : appoint)
		   {
			   String name = patientRepo.getName(a1.getPatientId());
			   app.add(new AppointmentWithName(a1,name));
		   }
				   
		   return app;
		   
	   }
	   
	   
	   @GetMapping("/showAppointment/{doctorid}")
	   public List<AppointmentWithName> showDoctorAppointment(@PathVariable int doctorid){
		   
		   List<AppointmentWithName> app = new ArrayList<>();
		   
		   List<Appointment> appoint = appointmentService.showDoctorAppointment(doctorid);
		   
		   for(Appointment a1 : appoint)
		   {
			   String name = patientRepo.getName(a1.getPatientId());
			   app.add(new AppointmentWithName(a1,name));
		   }
				   
		   return app;
		   
	   }
	   
	   @PostMapping("/checkSlot")
	   public int checkSlot(@RequestBody Appointment s)
	   {
		   
		return appointmentService.checkSlot(s);
		   
	   }
	    
	   
	   @GetMapping("/patHistory/{id}")
	    public List<Appointment> getPatHistory(@PathVariable int id) {
	        return appointmentService.getPatHistory(id);
	    }
	   
	   @DeleteMapping("/delete/{userId}")
	    public void deleteUser(@PathVariable Long userId) {
	        this.appointmentService.deleteById(userId);
	    }
	   
	   @PutMapping("/update")
	    public ResponseEntity<Appointment> create(@RequestBody Appointment newUser) throws ServerException {
		   Appointment user = appointmentService.save(newUser);
	        if (user == null) {
	            throw new ServerException("update failed");
	        } else {
	            return new ResponseEntity<>(user, HttpStatus.CREATED);	  
	            }
	   }
	   
//	   @GetMapping("/datecount/{date}")
//	   public int getCount(@PathVariable Date date)
//	   {
//		   return appointmentService.findCountDate(date);
//	   }
}
