package com.stepdefinition;

import java.io.IOException;

import com.baseclass.library;
import com.pages.RecruitmentPage;
import com.pages.loginHrm;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrangeHrmRecruitSteps extends library{
	loginHrm hrm;
	RecruitmentPage page;
	
	@Given("^Launch application and login to App$")
	public void launch_application_and_login_to_App() throws IOException {
		launchApplication();
		hrm = new loginHrm(driver);
		hrm.clickSummit("Admin", "admin123");
	  
	}

	@When("^Click recruitment$")
	public void click_recruitment() {
	   page = new RecruitmentPage(driver);
	   page.ClickRecurit();
	}

	@Then("^Click on Add Button$")
	public void click_on_Add_Button()  {
		page.ClickAdd();
	    
	}

	@Then("^Enter firstname and lastname$")
	public void enter_firstname_and_lastname()  {
		page.FullName("John", "Smith");
	   
	}

	@Then("^Enter email and contact no$")
	public void enter_email_and_contact_no(){
		page.emailContact("john@gmail.com", "8536974126");
	   
	}

	
	@Then("^upload Resume$")
	public void upload_Resume()  {
	    page.candResume("C:\\Users\\itsdi\\Downloads\\Files\\smaple resume.docx");
	}

	@Then("^select date of application$")
	public void select_date_of_application() {
	    page.dateofApp();
	}
	@Then("^save the application$")
	public void save_the_application(){
		page.SaveButton();
	   
	}


	@Then("^screenshot and close application$")
	public void screenshot_and_close_application() throws IOException{
	    screenShot();
	    quit();
	}
	
	
	

}
