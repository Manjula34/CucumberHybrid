package com.stepdefinition;

import java.io.IOException;

import org.junit.Assert;

import com.baseclass.library;
import com.pages.loginHrm;

import com.utils.SeleniumUtils;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class OrangeHrmLoginTestSteps extends library {
	SeleniumUtils utils; 
	loginHrm hrm; 
	
	@Given("^Launch the browser and enter the url$")
	public void launch_the_browser_and_enter_the_url() throws IOException {
		launchApplication();
	}

	@When("^login page is opened$")
	public void login_page_is_opened() {
		utils =new SeleniumUtils(driver);
		String title = utils.getTitle();
		System.out.println(title);
		Assert.assertEquals("OrangeHRM", title);
	}

	@Then("^enter the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_the_and(String username, String password){
		hrm = new loginHrm(driver);
		hrm.setUserName(username);
		hrm.setPassword(password);
	}

	@Then("^Click the login$")
	public void click_the_login(){
		hrm = new loginHrm(driver);
		hrm.summit();
		logger.info("login page =======>");
		
	}
	@And("^Take screenshots and quit browser$")
	public void take_screenshots_and_quit_browser() throws IOException{
		screenShot();
		quit();
	}

	
}
