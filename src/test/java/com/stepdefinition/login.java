package com.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class login {
 WebDriver driver;
 
	@Given("^User is already on login page$")
	public void user_is_already_on_login_page(){
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/");

	}

	@When("^Title of loginpage is OrangeHrm$")
	public void title_of_loginpage_is_OrangeHrm()  {
	    String title = driver.getTitle();
	    System.out.println(title);
	    //Assert.assertEquals(expected, actual);
	}
	
//	 //Reg Exp:
//	 //1. \"([^\"]*)\"
//	 //2. \"(.*)\"	

//	@Then("^Enter Usename and Password$")
//	public void enter_Usename_and_Password() {
	@Then("^Enter \"(.*)\" and \"(.*)\"$")
	public void enter_Usename_and_Password(String uname,String pwd) {
		driver.findElement(By.id("txtUsername")).sendKeys(uname);
		driver.findElement(By.id("txtPassword")).sendKeys(pwd);
	  
	}

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button(){
		WebElement signin = driver.findElement(By.id("btnLogin"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", signin);
	}

	@Then("^User is on Home page$")
	public void user_is_on_Home_page() {
		String title = driver.getTitle();
	    System.out.println(title);
	    
	}
	@And("^close browser$")
	public void close_browser() throws InterruptedException {
		Thread.sleep(1000);
	    driver.close();
	}

}
