package com.testRunner;



//import org.junit.AfterClass;
//import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import com.cucumber.listener.Reporter;


import cucumber.api.CucumberOptions;


import org.testng.annotations.AfterClass;
//import cucumber.api.testng.AbstractTestNGCucumberTests;

//format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
//monochrome = true, //display the console output in a proper readable format
//strict = true, //it will check if any step is not defined in step definition file
//dryRun = false //to check the mapping is proper between feature file and step def file
////tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			


//@RunWith(Cucumber.class)
//@CucumberOptions(
// features = "src\\test\\resources\\Features"
// ,glue={"com.stepdefinition"},
// dryRun = false
// )
//public class TestRunner {
//
//}


	//Cucumber class
//@RunWith(Cucumber.class)
@CucumberOptions
(
	
features = "C:\\Users\\itsdi\\eclipse-workspace\\CucumberHybrid\\src\\test\\resources\\Features\\Testcase.feature",
glue = {"com.stepdefinition"},	        
plugin = {"pretty", "html:src/test/resources/Reports/cucumber-html-report","json:src/test/resources/Reports/cucumber-html-report/jsonreport",
"com.cucumber.listener.ExtentCucumberFormatter:src/test/resources/Reports/Extentreports/Extentreport.html"},
//tags = {"@tc_01_login"},
strict = true,
monochrome = true,
dryRun = false
		        
)

public class TestRunner extends AbstractTestNGCucumberTests{
//	public class TestRunner {
	
    @AfterClass
      public static void extendReport()
    {
        Reporter.loadXMLConfig("extent-config.xml");
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
        Reporter.setSystemInfo("os", "Windows");
        Reporter.setTestRunnerOutput("Sample test runner output message");
    }
}