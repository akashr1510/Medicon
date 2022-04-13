package com.spring.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity   
public class Doctor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long doctorId;
	
	private String doctorName;
	private String email;
	private String password;
	private String doctorSpecialization;
	private String doctorDegree;
	private long doctorFees;
	private long doctorContact;
	
	public Doctor() {}
	
	public Doctor(long docotor_id, String doctor_name, String email, String password, String doctor_speciel,
			String doctor_degree, long doctor_fees, long doctor_contact) {
		super();
		this.doctorId = docotor_id;
		this.doctorName = doctor_name;
		this.email = email;
		this.password = password;
		this.doctorSpecialization = doctor_speciel;
		this.doctorDegree = doctor_degree;
		this.doctorFees = doctor_fees;
		this.doctorContact = doctor_contact;
	}

	public long getDocotor_id() {
		return doctorId;
	}

	public void setDocotor_id(long docotor_id) {
		this.doctorId = docotor_id;
	}

	public String getDoctor_name() {
		return doctorName;
	}

	public void setDoctor_name(String doctor_name) {
		this.doctorName = doctor_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDoctor_speciel() {
		return doctorSpecialization;
	}

	public void setDoctor_speciel(String doctor_speciel) {
		this.doctorSpecialization = doctor_speciel;
	}

	public String getDoctor_degree() {
		return doctorDegree;
	}

	public void setDoctor_degree(String doctor_degree) {
		this.doctorDegree = doctor_degree;
	}

	public long getDoctor_fees() {
		return doctorFees;
	}

	public void setDoctor_fees(long doctor_fees) {
		this.doctorFees = doctor_fees;
	}

	public long getDoctor_contact() {
		return doctorContact;
	}

	public void setDoctor_contact(long doctor_contact) {
		this.doctorContact = doctor_contact;
	}

	@Override
	public String toString() {
		return "Doctor [doctor_id=" + doctorId + ", doctor_name=" + doctorName + ", email=" + email + ", password="
				+ password + ", doctor_speciel=" + doctorSpecialization + ", doctor_degree=" + doctorDegree
				+ ", doctor_fees=" + doctorFees + ", doctor_contact=" + doctorContact + "]";
	}


	


	
	
	

}
