package com.baseclass;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class library {
	protected WebDriver driver;
	public static Properties prop;
	public void launchApplication() throws IOException {
		FileInputStream file =  new FileInputStream("C:\\Users\\itsdi\\eclipse-workspace\\CucumberHybrid\\src\\test\\resources\\configurationproperties\\config.properties");
		prop = new Properties();
		prop.load(file);
		String Browser = prop.getProperty("browser");
		
		try {
			if(Browser.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\Drivers\\geckodriver.exe");
				driver = new FirefoxDriver();
			}else if(Browser.equalsIgnoreCase("chrome")){
				System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\Drivers\\chromedriver.exe");
				driver = new ChromeDriver();
			}
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
			driver.get(prop.getProperty("url"));
		}catch (WebDriverException a) {
			System.out.println("Browser cannot be launched");
			
		}
		
	}
	public void quit() {
		driver.close();
	}
	public void screenShot() throws IOException {
		TakesScreenshot ts = (TakesScreenshot)driver;
		String screenshotpath = System.getProperty("user.dir")+"\\src\\test\\resources\\Screenshots\\orange" + System.currentTimeMillis()+".png";
		System.out.println(screenshotpath);
		File source = ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(source, new File(screenshotpath));
		}
		
		

}
