package com.spring.models;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long appointId ;
	
	private Date appointDate;
	
	private long patientId ;
	
	private long doctorId ;

	private long paymentId ;
	private String prescriptionTitle;
	private String prescriptionDetails;
	private boolean status;
	public long getAppointId() {
		return appointId;
	}
	public void setAppointId(long appointId) {
		this.appointId = appointId;
	}
	public Date getAppointDate() {
		return appointDate;
	}
	public void setAppointDate(Date appointDate) {
		this.appointDate = appointDate;
	}
	public long getPatientId() {
		return patientId;
	}
	public void setPatientId(long patientId) {
		this.patientId = patientId;
	}
	public long getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(long doctorId) {
		this.doctorId = doctorId;
	}
	public long getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(long paymentId) {
		this.paymentId = paymentId;
	}
	public String getPrescriptionTitle() {
		return prescriptionTitle;
	}
	public void setPrescriptionTitle(String prescriptionTitle) {
		this.prescriptionTitle = prescriptionTitle;
	}
	public String getPrescriptionDetails() {
		return prescriptionDetails;
	}
	public void setPrescriptionDetails(String prescriptionDetails) {
		this.prescriptionDetails = prescriptionDetails;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Appointment [appointId=" + appointId + ", appointDate=" + appointDate + ", patientId=" + patientId
				+ ", doctorId=" + doctorId + ", paymentId=" + paymentId + ", prescriptionTitle=" + prescriptionTitle
				+ ", prescriptionDetails=" + prescriptionDetails + ", status=" + status + "]";
	}
	public Appointment(long appointId, Date appointDate, long patientId, long doctorId, long paymentId,
			String prescriptionTitle, String prescriptionDetails, boolean status) {
		super();
		this.appointId = appointId;
		this.appointDate = appointDate;
		this.patientId = patientId;
		this.doctorId = doctorId;
		this.paymentId = paymentId;
		this.prescriptionTitle = prescriptionTitle;
		this.prescriptionDetails = prescriptionDetails;
		this.status = status;
	}
	public Appointment() {
		super();
	}
	
	
	
	


	
}
