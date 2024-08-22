//package com.medeasemanagement.dto;
//
//import lombok.Data;
//
//public class UpdateAppointmentRequest {
//
//	private int appointmentId;
//
//	private int doctorId;
//
//	private double price;
//
//	private String prescription;
//
//	private String status;
//
//	public int getAppointmentId() {
//		return appointmentId;
//	}
//
//	public void setAppointmentId(int appointmentId) {
//		this.appointmentId = appointmentId;
//	}
//
//	public int getDoctorId() {
//		return doctorId;
//	}
//
//	public void setDoctorId(int doctorId) {
//		this.doctorId = doctorId;
//	}
//
//	public double getPrice() {
//		return price;
//	}
//
//	public void setPrice(double price) {
//		this.price = price;
//	}
//
//	public String getPrescription() {
//		return prescription;
//	}
//
//	public void setPrescription(String prescription) {
//		this.prescription = prescription;
//	}
//
//	public String getStatus() {
//		return status;
//	}
//
//	public void setStatus(String status) {
//		this.status = status;
//	}
//
//}

package com.cdac.dto;

import lombok.Data;

public class UpdateAppointmentRequest {

	private int appointmentId;

	private int advocateId;  // renamed from doctorId

	private double price;

	private String prescription;

	private String status;

	public int getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(int appointmentId) {
		this.appointmentId = appointmentId;
	}

	public int getAdvocateId() {  // renamed from getDoctorId
		return advocateId;
	}

	public void setAdvocateId(int advocateId) {  // renamed from setDoctorId
		this.advocateId = advocateId;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
