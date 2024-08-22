package com.cdac.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.AppointmentResponseDto;
import com.cdac.dto.CommanApiResponse;
import com.cdac.dto.UpdateAppointmentRequest;
import com.cdac.entity.Appointment;
import com.cdac.entity.User;
import com.cdac.exception.AppointmentNotFoundException;
import com.cdac.service.AppointmentService;
import com.cdac.service.UserService;
import com.cdac.utility.Constants.AppointmentStatus;
import com.cdac.utility.Constants.BloodGroup;
import com.cdac.utility.Constants.ResponseCode;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("api/appointment/")
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {

	Logger LOG = LoggerFactory.getLogger(AppointmentController.class);

	@Autowired
	private AppointmentService appointmentService;

	@Autowired
	private UserService userService;
	
//	@Autowired
//    private EmailSenderService emailSender;

	@PostMapping("clint/add")
	@ApiOperation(value = "Api to add clint appointment")
	public ResponseEntity<?> addAppointment(@RequestBody Appointment appointment) {
		LOG.info("Recieved request to add clint appointment");

		CommanApiResponse response = new CommanApiResponse();

		if (appointment == null) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Failed to add clint appointment");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		if (appointment.getUserId() == 0) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Failed to add clint appointment");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		appointment.setDate(LocalDate.now().toString());
		appointment.setStatus(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());

		Appointment addedAppointment = appointmentService.addAppointment(appointment);

		if (addedAppointment != null) {
			response.setResponseCode(ResponseCode.SUCCESS.value());
			response.setResponseMessage("Appointment Added");
			return new ResponseEntity(response, HttpStatus.OK);
		}

		else {
			response.setResponseCode(ResponseCode.SUCCESS.value());
			response.setResponseMessage("Failed to add Appointment");
			return new ResponseEntity(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("all")
	public ResponseEntity<?> getAllAppointments() {
		LOG.info("recieved request for getting ALL Appointments !!!");

		List<Appointment> appointments = this.appointmentService.getAllAppointment();

		List<AppointmentResponseDto> response = new ArrayList();

		for (Appointment appointment : appointments) {

			AppointmentResponseDto a = new AppointmentResponseDto();

			User clint = this.userService.getUserById(appointment.getUserId());

			a.setUserContact(clint.getContact());
			a.setUserId(clint.getId());
			a.setUserName(clint.getFirstName() + " " + clint.getLastName());

			if (appointment.getAdvocateId() != 0) {
				User advocate = this.userService.getUserById(appointment.getAdvocateId());
				a.setAdvocateContact(advocate.getContact());
				a.setAdvocateName(advocate.getFirstName() + " " + advocate.getLastName());
				a.setAdvocateId(advocate.getId());
				a.setPrescription(appointment.getPrescription());

				if (appointment.getStatus().equals(AppointmentStatus.TREATMENT_DONE.value())) {
					a.setPrice(String.valueOf(appointment.getPrice()));
				}

				else {
					a.setPrice(AppointmentStatus.TREATMENT_PENDING.value());
				}
			}

			else {
				a.setAdvocateContact(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
				a.setAdvocateName(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
				a.setAdvocateId(0);
				a.setPrice(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
				a.setPrescription(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
			}

			a.setStatus(appointment.getStatus());
			a.setProblem(appointment.getProblem());
			a.setDate(appointment.getDate());
			a.setAppointmentDate(appointment.getAppointmentDate());
			a.setId(appointment.getId());

			response.add(a);
		}

		LOG.info("response sent!!!");
		return ResponseEntity.ok(response);
	}

	@GetMapping("id")
	public ResponseEntity<?> getAllAppointments(@RequestParam("appointmentId") int appointmentId) {
		LOG.info("recieved request for getting  Appointment by id !!!");

		Appointment appointment = this.appointmentService.getAppointmentById(appointmentId);

		if (appointment == null) {
			throw new AppointmentNotFoundException();
		}

		AppointmentResponseDto a = new AppointmentResponseDto();

		User clint = this.userService.getUserById(appointment.getUserId());

		a.setUserContact(clint.getContact());
		a.setUserId(clint.getId());
		a.setUserName(clint.getFirstName() + " " + clint.getLastName());

		if (appointment.getUserId() != 0) {
			User advocate = this.userService.getUserById(appointment.getUserId());
			a.setAdvocateContact(advocate.getContact());
			a.setAdvocateName(advocate.getFirstName() + " " + advocate.getLastName());
			a.setAdvocateId(advocate.getId());
			a.setPrescription(appointment.getPrescription());

			if (appointment.getStatus().equals(AppointmentStatus.TREATMENT_DONE.value())) {
				a.setPrice(String.valueOf(appointment.getPrice()));
			}

			else {
				a.setPrice(AppointmentStatus.TREATMENT_PENDING.value());
			}

		}

		else {
			a.setAdvocateContact(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
			a.setAdvocateName(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
			a.setAdvocateId(0);
			a.setPrice(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
			a.setPrescription(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());

		}

		a.setStatus(appointment.getStatus());
		a.setProblem(appointment.getProblem());
		a.setDate(appointment.getDate());
		a.setAppointmentDate(appointment.getAppointmentDate());
		a.setBloodGroup(clint.getBloodGroup());
		a.setId(appointment.getId());

		LOG.info("response sent!!!");
		return ResponseEntity.ok(a);
	}

	@GetMapping("clint/id")
	public ResponseEntity<?> getAllAppointmentsByUserId(@RequestParam("userId") int userId) {
		LOG.info("recieved request for getting ALL Appointments by patient Id !!!");

		List<Appointment> appointments = this.appointmentService.getAppointmentByUserId(userId);

		List<AppointmentResponseDto> response = new ArrayList();

		for (Appointment appointment : appointments) {

			AppointmentResponseDto a = new AppointmentResponseDto();

			User clint = this.userService.getUserById(appointment.getUserId());

			a.setUserContact(clint.getContact());
			a.setUserId(clint.getId());
			a.setUserName(clint.getFirstName() + " " + clint.getLastName());

			if (appointment.getAdvocateId() != 0) {
				User advocate = this.userService.getUserById(appointment.getAdvocateId());
				a.setAdvocateContact(advocate.getContact());
				a.setAdvocateName(advocate.getFirstName() + " " + advocate.getLastName());
				a.setAdvocateId(advocate.getId());
				a.setPrescription(appointment.getPrescription());

				if (appointment.getStatus().equals(AppointmentStatus.TREATMENT_DONE.value())) {
					a.setPrice(String.valueOf(appointment.getPrice()));
				}

				else {
					a.setPrice(AppointmentStatus.TREATMENT_PENDING.value());
				}

			}

			else {
				a.setAdvocateContact(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
				a.setAdvocateName(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
				a.setAdvocateId(0);
				a.setPrice(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
				a.setPrescription(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());

			}

			a.setStatus(appointment.getStatus());
			a.setProblem(appointment.getProblem());
			a.setDate(appointment.getDate());
			a.setAppointmentDate(appointment.getAppointmentDate());
			a.setBloodGroup(clint.getBloodGroup());
			a.setId(appointment.getId());

			response.add(a);

		}

		LOG.info("response sent!!!");
		return ResponseEntity.ok(response);
	}

	@GetMapping("advocate/id")
	public ResponseEntity<?> getAllAppointmentsByAdvocateId(@RequestParam("advocateId") int advocateId) {
		LOG.info("recieved request for getting ALL Appointments by advocate Id !!!");

		List<Appointment> appointments = this.appointmentService.getAppointmentByAdvocateId(advocateId);

		List<AppointmentResponseDto> response = new ArrayList();

		for (Appointment appointment : appointments) {

			AppointmentResponseDto a = new AppointmentResponseDto();

			User clint = this.userService.getUserById(appointment.getUserId());

			a.setUserContact(clint.getContact());
			a.setUserId(clint.getId());
			a.setUserName(clint.getFirstName() + " " + clint.getLastName());

			if (appointment.getAdvocateId() != 0) {
				User advocate = this.userService.getUserById(appointment.getUserId());
				a.setAdvocateContact(advocate.getContact());
				a.setAdvocateName(advocate.getFirstName() + " " + advocate.getLastName());
				a.setAdvocateId(advocate.getId());
				a.setPrescription(appointment.getPrescription());

				if (appointment.getStatus().equals(AppointmentStatus.TREATMENT_DONE.value())) {
					a.setPrice(String.valueOf(appointment.getPrice()));
				}

				else {
					a.setPrice(AppointmentStatus.TREATMENT_PENDING.value());
				}
				a.setPrescription(appointment.getPrescription());

			}

			else {
				a.setAdvocateContact(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
				a.setAdvocateName(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
				a.setAdvocateId(0);
				a.setPrice(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
				a.setPrescription(AppointmentStatus.NOT_ASSIGNED_TO_ADVOCATE.value());
			}

			a.setStatus(appointment.getStatus());
			a.setProblem(appointment.getProblem());
			a.setDate(appointment.getDate());
			a.setAppointmentDate(appointment.getAppointmentDate());
			a.setBloodGroup(clint.getBloodGroup());
			a.setId(appointment.getId());

			response.add(a);

		}

		LOG.info("response sent!!!");
		return ResponseEntity.ok(response);
	}

	@PostMapping("admin/assign/advocate")
	@ApiOperation(value = "Api to assign appointment to advocate")
	public ResponseEntity<?> updateAppointmentStatus(UpdateAppointmentRequest request) {
		LOG.info("Recieved request to assign appointment to advocate");

		CommanApiResponse response = new CommanApiResponse();

		if (request == null) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Failed to assign appointment");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		if (request.getAdvocateId() == 0) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Advocate not found");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		User advocate = this.userService.getUserById(request.getAdvocateId());

		if (advocate == null) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("advocate not found");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		if (request.getAppointmentId() == 0) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Appointment not found");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		Appointment appointment = appointmentService.getAppointmentById(request.getAppointmentId());

		if (appointment == null) {
			throw new AppointmentNotFoundException();
		}

		if (appointment.getStatus().equals(AppointmentStatus.CANCEL.value())) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Appointment is cancel by user");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		appointment.setAdvocateId(request.getAdvocateId());
		appointment.setStatus(AppointmentStatus.ASSIGNED_TO_ADVOCATE.value());

		Appointment updatedAppointment = this.appointmentService.addAppointment(appointment);

		if (updatedAppointment != null) {
			response.setResponseCode(ResponseCode.SUCCESS.value());
			response.setResponseMessage("Successfully Assigned Appointment to advocate");
			
			
			return new ResponseEntity(response, HttpStatus.OK);
		}

		else {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Failed to assign");
			return new ResponseEntity(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PostMapping("advocate/update")
	@ApiOperation(value = "Api to assign appointment to advocate")
	public ResponseEntity<?> assignAppointmentToAdvocate(UpdateAppointmentRequest request) {
		LOG.info("Recieved request to update appointment");

		CommanApiResponse response = new CommanApiResponse();

		if (request == null) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Failed to assign appointment");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		if (request.getAppointmentId() == 0) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Appointment not found");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		Appointment appointment = appointmentService.getAppointmentById(request.getAppointmentId());

		if (appointment == null) {
			throw new AppointmentNotFoundException();
		}

		appointment.setPrescription(request.getPrescription());
		appointment.setStatus(request.getStatus());

		if (request.getStatus().equals(AppointmentStatus.TREATMENT_DONE.value())) {
			appointment.setPrice(request.getPrice());
		}

		Appointment updatedAppointment = this.appointmentService.addAppointment(appointment);

		if (updatedAppointment != null) {
			response.setResponseCode(ResponseCode.SUCCESS.value());
			response.setResponseMessage("Updated Treatment Status");
			return new ResponseEntity(response, HttpStatus.OK);
		}

		else {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Failed to update");
			return new ResponseEntity(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PostMapping("clint/update")
	@ApiOperation(value = "Api to update appointment clint")
	public ResponseEntity<?> udpateAppointmentStatus(@RequestBody UpdateAppointmentRequest request) {
		LOG.info("Recieved request to update appointment");

		CommanApiResponse response = new CommanApiResponse();

		if (request == null) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Failed to assign appointment");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		if (request.getAppointmentId() == 0) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Appointment not found");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		Appointment appointment = appointmentService.getAppointmentById(request.getAppointmentId());

		if (appointment == null) {
			throw new AppointmentNotFoundException();
		}

		appointment.setStatus(request.getStatus());
		Appointment updatedAppointment = this.appointmentService.addAppointment(appointment);

		if (updatedAppointment != null) {
			response.setResponseCode(ResponseCode.SUCCESS.value());
			response.setResponseMessage("Updated Treatment Status");
			return new ResponseEntity(response, HttpStatus.OK);
		}

		else {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Failed to update");
			return new ResponseEntity(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
