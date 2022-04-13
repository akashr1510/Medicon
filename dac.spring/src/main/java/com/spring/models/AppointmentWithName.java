package com.spring.models;

public class AppointmentWithName {

	Appointment appoint;
	String name;
	
	
	public Appointment getAppoint() {
		return appoint;
	}
	public void setappoint(Appointment appoint) {
		this.appoint = appoint;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "AppointmentWithName [appoint=" + appoint + ", name=" + name + "]";
	}
	public AppointmentWithName(Appointment appoint, String name) {
		super();
		this.appoint = appoint;
		this.name = name;
	}
	public AppointmentWithName() {
		super();
	}
	
	
	
}
