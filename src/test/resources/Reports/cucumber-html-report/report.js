$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/itsdi/eclipse-workspace/CucumberHybrid/src/test/resources/Features/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "OrangeHrm website",
  "description": "",
  "id": "orangehrm-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.scenario({
  "line": 32,
  "name": "Add candidate in recruitment menu",
  "description": "",
  "id": "orangehrm-website;add-candidate-in-recruitment-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@tc_01_Recuritment"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Launch application and login to App",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Click recruitment",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Click on Add Button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Enter firstname and lastname",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Enter email and contact no",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "upload Resume",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "select date of application",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "save the application",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "screenshot and close application",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.launch_application_and_login_to_App()"
});
formatter.result({
  "duration": 16482502100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.click_recruitment()"
});
formatter.result({
  "duration": 1887555000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.click_on_Add_Button()"
});
formatter.result({
  "duration": 699964600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.enter_firstname_and_lastname()"
});
formatter.result({
  "duration": 302843000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.enter_email_and_contact_no()"
});
formatter.result({
  "duration": 299166300,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.upload_Resume()"
});
formatter.result({
  "duration": 65180200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.select_date_of_application()"
});
formatter.result({
  "duration": 305717900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.save_the_application()"
});
formatter.result({
  "duration": 283844200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.screenshot_and_close_application()"
});
formatter.result({
  "duration": 709998700,
  "status": "passed"
});
});