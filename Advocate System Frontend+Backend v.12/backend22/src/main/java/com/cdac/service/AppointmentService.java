package com.cdac.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cdac.dao.AppointmentDao;
import com.cdac.entity.Appointment;

@Repository
public class AppointmentService {
	
	@Autowired
	private AppointmentDao appointmentDao;
	
	public Appointment addAppointment(Appointment appointment) {
		return appointmentDao.save(appointment);
	}
	
	public Appointment getAppointmentById(int id) {
		return appointmentDao.findById(id).get();
	}

	public List<Appointment> getAllAppointment() {
		return appointmentDao.findAll();
	}
	
	public List<Appointment> getAppointmentByUserId(int userId) {
		return appointmentDao.findByUserId(userId);
	}
	
	public List<Appointment> getAppointmentByAdvocateId(int advocateId) {
		return appointmentDao.findByAdvocateId(advocateId);
	}
	
	
}
