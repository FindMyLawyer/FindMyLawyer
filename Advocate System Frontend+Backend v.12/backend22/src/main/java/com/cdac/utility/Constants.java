package com.cdac.utility;

public class Constants {
	
	public enum UserRole {
		ADMIN("admin"),
		USER("user"),
		ADVOCATE("advocate");
		
		
		private String role;

	    private UserRole(String role) {
	      this.role = role;
	    }

	    public String value() {
	      return this.role;
	    }    
	}
	
	public enum Sex {
		MALE("Male"),
		FEMALE("Female");
		
		
		private String sex;

	    private Sex(String sex) {
	      this.sex = sex;
	    }

	    public String value() {
	      return this.sex;
	    }    
	}
	
	public enum AppointmentStatus {
		ASSIGNED_TO_ADVOCATE("Assigned to Advocate"),
		PENDING("Pending"),
		CANCEL("Cancel"),
		NOT_ASSIGNED_TO_ADVOCATE("Not Assigned to Advocate"),
		TREATMENT_DONE("Problem Solve"),
		TREATMENT_PENDING("Problem pending"),
		PAID("paid");
		
		private String status;

	    private AppointmentStatus(String status) {
	      this.status = status;
	    }

	    public String value() {
	      return this.status;
	    }    
	}
	
	public enum ResponseCode {
		SUCCESS(0),
		FAILED(1);
		
		private int code;

	    private ResponseCode(int code) {
	      this.code = code;
	    }

	    public int value() {
	      return this.code;
	    }    
	}
	
	public enum BloodGroup {
		A_POSITIVE("A+"),
		A_NEGATIVE("A-"),
		B_POSITIVE("B+"),
		B_NEGATIVE("B-"),
		O_POSITIVE("O+"),
		O_NEGATIVE("O-"),
		AB_POSITIVE("AB+"),
		AB_NEGATIVE("AB-");
		
		private String type;

	    private BloodGroup(String type) {
	      this.type = type;
	    }

	    public String value() {
	      return this.type;
	    }

	    public boolean equals(String type) {
	      return this.type.equals(type.toUpperCase());
	    }
	}
	
    public enum AdvocateSpecialist {
		
    	CARDIOLOGY("Criminal Lawyer"),
        NEUROLOGY("Family Lawyer"),
        ONCOLOGY("Corporate Lawyer"),
        PEDIATRICS("Intellectual Property Lawyer"),
        SURGERY("Real Estate Lawyer"),
        ORTHOPEDICS("Personal Injury Lawyer"),
        GYNECOLOGY("Employment Lawyer"),
        DERMATOLOGY("Immigration Lawyer"),
        UROLOGY("Tax Lawyer"),
        PSYCHIATRY("Bankruptcy Lawyer"),
        RADIOLOGY("Consumer Protection Lawyer"),
        ANESTHESIOLOGY("Agricultural Lawyer"),
        OPTHALMOLOGY("Insurance Lawyer"),
        ENDOCRINOLOGY("Education Lawyer"),
        GASTROENTEROLOGY("Social Security and Disability Lawyer"),
        HEMATOLOGY("Military Lawyer"),
        INFECTIOUS_DISEASE("Healthcare Lawyer"),
        NEPHROLOGY("Divorce Lawyer");
		
		private String type;

	    private AdvocateSpecialist(String type) {
	      this.type = type;
	    }

	    public String value() {
	      return this.type;
	    }

	    public boolean equals(String type) {
	      return this.type.equals(type.toUpperCase());
	    }
	}
    
    public enum UserStatus {
		ACTIVE(0),
		DELETED(1);
		
		private int status;

	    private UserStatus(int status) {
	      this.status = status;
	    }

	    public int value() {
	      return this.status;
	    }    
	}
	
}
