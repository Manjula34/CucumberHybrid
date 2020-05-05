package com.stepdefinition;

import java.io.IOException;

import com.baseclass.library;
import com.pages.AdminPage;
import com.pages.loginHrm;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrangeHrmAdminSteps extends library {
	
	loginHrm hrm;
	AdminPage adpage;
	
	@Given("^Launch orangehrm application and login$")
	public void launch_orangehrm_application_and_login() throws IOException  {
		
		launchApplication();
		hrm = new loginHrm(driver);		
		hrm.clickSummit("Admin", "admin123");	    
	}

	@When("^Select Admin menu$")
	public void select_Admin_menu() {
		adpage = new AdminPage(driver);
		adpage.CLickAmin();	}

	@Then("^Enter username$")
	public void enter_username(){		
		adpage.usename("ritika");
	   
	}

	@Then("^Select userrole$")
	public void select_userrole() {
	adpage.Userrole("Admin");
	  
	}

	@Then("^Enter Employeename$")
	public void enter_Employeename(){
		adpage.EmpName("Jasmine Morgan");
	  
	}
	@Then("^Select Status$")
	public void select_Status() {
		adpage.Status("Enabled");
	    
	}

	@Then("^Click Search button$")
	public void click_Search_button() {
		adpage.CLickSearch();
	
	}
	@And("^Taking screenshots and quit application$")
	public void take_screenshots_and_quit_browser() throws IOException{
		screenShot();
		quit();
	}



}
