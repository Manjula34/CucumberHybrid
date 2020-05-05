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
formatter.scenarioOutline({
  "line": 5,
  "name": "validate the login functionality",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch the browser and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click the login",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "orangehrm-website;validate-the-login-functionality;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 14,
      "id": "orangehrm-website;validate-the-login-functionality;;2"
    },
    {
      "cells": [
        "Admins",
        "admin124"
      ],
      "line": 15,
      "id": "orangehrm-website;validate-the-login-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "validate the login functionality",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch the browser and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter the \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click the login",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.launch_the_browser_and_enter_the_url()"
});
formatter.result({
  "duration": 13651177400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.login_page_is_opened()"
});
formatter.result({
  "duration": 1340109200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 11
    },
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "OrangeHrmLoginTestSteps.enter_the_and(String,String)"
});
formatter.result({
  "duration": 382606800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.click_the_login()"
});
formatter.result({
  "duration": 1375704300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "validate the login functionality",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch the browser and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter the \"Admins\" and \"admin124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click the login",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.launch_the_browser_and_enter_the_url()"
});
formatter.result({
  "duration": 12015614700,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.login_page_is_opened()"
});
formatter.result({
  "duration": 1703848300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admins",
      "offset": 11
    },
    {
      "val": "admin124",
      "offset": 24
    }
  ],
  "location": "OrangeHrmLoginTestSteps.enter_the_and(String,String)"
});
formatter.result({
  "duration": 294060700,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.click_the_login()"
});
formatter.result({
  "duration": 580504400,
  "status": "passed"
});
});