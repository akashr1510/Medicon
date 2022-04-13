package com.spring.models;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
@Table( name = "Patient")//to map which table in database
public class Patient {
 

	@Id// To show that this is primary id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)//for auto-incrementatio
    private long patientId;
     
	//to set email unique so no double user and not be the null
    @Column(nullable = false, unique = true, length = 45)
    private String email;
     
    // also the not be null
    @Column(nullable = false, length = 64)
    private String password;
    
    @Column(name = "firstname", nullable = false, length = 50)
    private String firstName;
     
    @Column(name = "lastname", nullable = false, length = 50)
    private String lastName;
     
    
    @Column(name = "address", nullable = false, length = 255)
    private String address;
    
    @Column(name = "gender", nullable = false,length = 10)
    private String gender;
    
    @Column(name = "contact", nullable = false, length = 25)
    private String contact;
    
    private Date date;
    
    public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Long getId() {
		return patientId;
	}

	public void setId(Long id) {
		this.patientId = id;
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
//		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//		this.password = passwordEncoder.encode(password).toString();
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Patient(Long id, String email, String password, String firstName, String lastName, String address,
			String gender, String contact, Date date) {
		super();
		this.patientId = id;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.gender = gender;
		this.contact = contact;
		this.date = date;
	}

	public Patient() {
		super();
	}

	@Override
	public String toString() {
		return "Patient [id=" + patientId + ", email=" + email + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", address=" + address + ", gender=" + gender + ", contact=" + contact
				+ ", date=" + date + "]";
	}

	
	
}
