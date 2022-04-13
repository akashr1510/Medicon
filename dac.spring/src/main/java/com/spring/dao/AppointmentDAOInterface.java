package com.spring.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.models.Appointment;

@Repository
public interface AppointmentDAOInterface extends JpaRepository<Appointment, Long> {

	List<Appointment> findAllByAppointId(Long id);
	List<Appointment> findAllByPatientId(Long id);
	
	
	List<Appointment> findAllByDoctorId(Long id);
	List<Appointment> findAllByDoctorIdAndStatus(Long id,boolean status);
	
	List<Appointment> findAllByAppointDate( Date appointdate);
	List<Appointment> findAllByAppointDateAndDoctorId( Date appointdate,Long id);

		
}

/*
@Query("select d from Doctor d where d.specialization = :specialization")
List<Doctor> searchBySpecialization(@Param("specialization") String specialization);
}
*/