package com.spring.models;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class Booking {

	
	private Date date;
	private long doctorId;
	
	
	public Booking(Date date, long doctorId) {
		super();
		this.date = date;
		this.doctorId = doctorId;
	}
	public Booking() {
		super();
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public long getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(long doctorId) {
		this.doctorId = doctorId;
	}
	@Override
	public String toString() {
		return "Booking [date=" + date + ", doctorId=" + doctorId + "]";
	}
	
	
	
}
