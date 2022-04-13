package com.spring.service.Appointment;

import java.util.List;
import java.util.Optional;

import com.spring.models.Appointment;

public interface AppointmentServiceInterface {

	Optional<Appointment> findById(int appoint_id);

	List<Appointment> findAll();

	Appointment addAppointment(Appointment a);

	List<Appointment> getPatHistory(int id);

	void deleteById(Long userId);

	Appointment save(Appointment newUser);

	List<Appointment> showDoctorAppointment(int doctorid);

	List<Appointment> showDoctorAppointmentName(int doctorid);
	
	int checkSlot(Appointment s);



//	int findCountDate(Date appoint_date);

	


	
	
	
}
