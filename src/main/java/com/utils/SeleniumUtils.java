package com.utils;

import org.openqa.selenium.WebDriver;

public class SeleniumUtils {
	 WebDriver driver;
	 
	
	public SeleniumUtils(WebDriver driver) {
		
		this.driver = driver;
	}


	public String getTitle() {
		String Title = driver.getTitle();
		return Title;
	}

}
