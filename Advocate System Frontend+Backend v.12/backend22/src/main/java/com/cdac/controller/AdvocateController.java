package com.cdac.controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.AdvocateRegisterDto;
import com.cdac.dto.CommanApiResponse;
import com.cdac.entity.User;
import com.cdac.service.UserService;
import com.cdac.utility.StorageService;
import com.cdac.utility.Constants.AdvocateSpecialist;
import com.cdac.utility.Constants.ResponseCode;
import com.cdac.utility.Constants.UserRole;
import com.cdac.utility.Constants.UserStatus;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("api/advocate/")
@CrossOrigin(origins = "http://localhost:3000")
public class AdvocateController {
	
	Logger LOG = LoggerFactory.getLogger(AdvocateController.class);

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserService userService;

	@Autowired
	private StorageService storageService;

	@PostMapping("register")
	@ApiOperation(value = "Api to register advocate")
	public ResponseEntity<?> registerAdvocate(AdvocateRegisterDto advocateRegisterDto) {
		LOG.info("Recieved request for Advocate register");

		CommanApiResponse response = new CommanApiResponse();
		
		User user = AdvocateRegisterDto.toEntity(advocateRegisterDto);

		String image = storageService.store(advocateRegisterDto.getImage());
		
		user.setDoctorImage(image);
		
		String encodedPassword = passwordEncoder.encode(user.getPassword());

		user.setPassword(encodedPassword);
		user.setStatus(UserStatus.ACTIVE.value());

		User registerUser = userService.registerUser(user);

		if (registerUser != null) {
			response.setResponseCode(ResponseCode.SUCCESS.value());
			response.setResponseMessage(user.getRole() + " Advocate Registered Successfully");
			return new ResponseEntity(response, HttpStatus.OK);
		}

		else {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Failed to Register Advocate");
			return new ResponseEntity(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("all")
	public ResponseEntity<?> getAllAdvocate() {
		LOG.info("recieved request for getting ALL Customer!!!");
		
		List<User> advocate = this.userService.getAllUserByRole(UserRole.ADVOCATE.value());
		
		LOG.info("response sent!!!");
		return ResponseEntity.ok(advocate);
	}
	
	@GetMapping(value = "/{advocateImageName}", produces = "image/*")
	@ApiOperation(value = "Api to fetch advocate image by using image name")
	public void fetchProductImage(@PathVariable("advocateImageName") String advocateImageName, HttpServletResponse resp) {
		LOG.info("request came for fetching advocate pic");
		LOG.info("Loading file: " + advocateImageName);
		Resource resource = storageService.load(advocateImageName);
		if (resource != null) {
			try (InputStream in = resource.getInputStream()) {
				ServletOutputStream out = resp.getOutputStream();
				FileCopyUtils.copy(in, out);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		LOG.info("response sent!");
	}
	
	@GetMapping("/specialist/all")
	public ResponseEntity<?> getAllSpecialist() {

		LOG.info("Received the request for getting as Specialist");
		
		List<String> specialists = new ArrayList<>();

		for (AdvocateSpecialist s : AdvocateSpecialist.values()) {
			specialists.add(s.value());
		}
		
		LOG.info("Response sent!!!");

		return new ResponseEntity(specialists, HttpStatus.OK);
	}

}
