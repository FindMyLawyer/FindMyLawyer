//package com.medeasemanagement.dto;
//
//import lombok.Data;
//
//public class AppointmentResponseDto {
//
//	private int id;
//	
//	private int patientId;
//
//	private int doctorId;
//
//	private String problem;
//
//	private String prescription;
//
//	private String price;
//
//	private String patientName;
//
//	private String patientContact;
//
//	private String doctorName;
//
//	private String doctorContact;
//
//	private String status;
//
//	private String appointmentDate;
//
//	private String date;
//
//	private String bloodGroup;
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public int getPatientId() {
//		return patientId;
//	}
//
//	public void setPatientId(int patientId) {
//		this.patientId = patientId;
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
//	public String getProblem() {
//		return problem;
//	}
//
//	public void setProblem(String problem) {
//		this.problem = problem;
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
//	public String getPrice() {
//		return price;
//	}
//
//	public void setPrice(String price) {
//		this.price = price;
//	}
//
//	public String getPatientName() {
//		return patientName;
//	}
//
//	public void setPatientName(String patientName) {
//		this.patientName = patientName;
//	}
//
//	public String getPatientContact() {
//		return patientContact;
//	}
//
//	public void setPatientContact(String patientContact) {
//		this.patientContact = patientContact;
//	}
//
//	public String getDoctorName() {
//		return doctorName;
//	}
//
//	public void setDoctorName(String doctorName) {
//		this.doctorName = doctorName;
//	}
//
//	public String getDoctorContact() {
//		return doctorContact;
//	}
//
//	public void setDoctorContact(String doctorContact) {
//		this.doctorContact = doctorContact;
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
//	public String getAppointmentDate() {
//		return appointmentDate;
//	}
//
//	public void setAppointmentDate(String appointmentDate) {
//		this.appointmentDate = appointmentDate;
//	}
//
//	public String getDate() {
//		return date;
//	}
//
//	public void setDate(String date) {
//		this.date = date;
//	}
//
//	public String getBloodGroup() {
//		return bloodGroup;
//	}
//
//	public void setBloodGroup(String bloodGroup) {
//		this.bloodGroup = bloodGroup;
//	}
//
//}

package com.cdac.dto;

import lombok.Data;

public class AppointmentResponseDto {

	private int id;
	
	private int userId;  // renamed from patientId

	private int advocateId;  // renamed from doctorId

	private String problem;

	private String prescription;

	private String price;

	private String userName;  // renamed from patientName

	private String userContact;  // renamed from patientContact

	private String advocateName;  // renamed from doctorName

	private String advocateContact;  // renamed from doctorContact

	private String status;

	private String appointmentDate;

	private String date;

	private String bloodGroup;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {  // renamed from getPatientId
		return userId;
	}

	public void setUserId(int userId) {  // renamed from setPatientId
		this.userId = userId;
	}

	public int getAdvocateId() {  // renamed from getDoctorId
		return advocateId;
	}

	public void setAdvocateId(int advocateId) {  // renamed from setDoctorId
		this.advocateId = advocateId;
	}

	public String getProblem() {
		return problem;
	}

	public void setProblem(String problem) {
		this.problem = problem;
	}

	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getUserName() {  // renamed from getPatientName
		return userName;
	}

	public void setUserName(String userName) {  // renamed from setPatientName
		this.userName = userName;
	}

	public String getUserContact() {  // renamed from getPatientContact
		return userContact;
	}

	public void setUserContact(String userContact) {  // renamed from setPatientContact
		this.userContact = userContact;
	}

	public String getAdvocateName() {  // renamed from getDoctorName
		return advocateName;
	}

	public void setAdvocateName(String advocateName) {  // renamed from setDoctorName
		this.advocateName = advocateName;
	}

	public String getAdvocateContact() {  // renamed from getDoctorContact
		return advocateContact;
	}

	public void setAdvocateContact(String advocateContact) {  // renamed from setDoctorContact
		this.advocateContact = advocateContact;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(String appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}
}
