package com.spring.service.Appointment;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.dao.AppointmentDAOInterface;
import com.spring.models.Appointment;


@Service
public class AppointmentService implements AppointmentServiceInterface{

	@Autowired
	AppointmentDAOInterface appointmentRepository;
	
	 @Override
	    public Optional<Appointment> findById(int id) {
		 Long appoint_id = (long) id;
		  return appointmentRepository.findById(appoint_id);
	 }
	      
	 @Override
	    public List<Appointment> findAll() {
	        return appointmentRepository.findAll();
	    }

	 @Override
	public Appointment addAppointment(Appointment a) {
		
		 int c = findCountDate(a.getAppointDate());
		 if(  c <10 )
		 {
			 return appointmentRepository.save(a);	  
		 }
		 
		return null;
	}
	 
	 public int findCountDate(Date appoint_date) {
		
		 List<Appointment> ls = appointmentRepository.findAllByAppointDate(appoint_date);		 
		return ls.size();
	}

	@Override
	public List<Appointment> getPatHistory(int id1) {
	Long id = (long) id1;
		return appointmentRepository.findAllByPatientId(id);
	}

	@Override
	public void deleteById(Long userId) {
		this.appointmentRepository.deleteById(userId);
		
	}

	@Override
	public Appointment save(Appointment newUser) {
		
		return appointmentRepository.save(newUser);
	}

	@Override
	public List<Appointment> showDoctorAppointment(int doctorid) {
		
		Long id = (long) doctorid;
//		appointmentRepository.findAllByDoctorId(id);
		List<Appointment> app = appointmentRepository.findAllByDoctorId(id);
		
		return app;
	}

	@Override
	public List<Appointment> showDoctorAppointmentName(int doctorid) {
		
		Long id = (long) doctorid;
//		appointmentRepository.findAllByDoctorId(id);
		List<Appointment> app = appointmentRepository.findAllByDoctorIdAndStatus(id,false);
		
		return app;
	}
	
	@Override
	public int checkSlot(Appointment s) {
		
//		List<Appointment> app = appointmentRepository.findPropertiesByTransactionTypeAndPropertyType(s.getAppointDate(),s.getDoctorId());
		
		return 0;
	
		// TODO Auto-generated method stub
		
	}

	
	
	
	
}
