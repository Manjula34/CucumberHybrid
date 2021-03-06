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
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Take screenshots and quit browser",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "orangehrm-website;validate-the-login-functionality;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 15,
      "id": "orangehrm-website;validate-the-login-functionality;;2"
    },
    {
      "cells": [
        "Admins",
        "admin124"
      ],
      "line": 16,
      "id": "orangehrm-website;validate-the-login-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
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
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Take screenshots and quit browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.launch_the_browser_and_enter_the_url()"
});
formatter.result({
  "duration": 7285203400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.login_page_is_opened()"
});
formatter.result({
  "duration": 25879900,
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
  "duration": 436919400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.click_the_login()"
});
formatter.result({
  "duration": 2181961400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.take_screenshots_and_quit_browser()"
});
formatter.result({
  "duration": 1072287100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Take screenshots and quit browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.launch_the_browser_and_enter_the_url()"
});
formatter.result({
  "duration": 7009597100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.login_page_is_opened()"
});
formatter.result({
  "duration": 26091100,
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
  "duration": 505322900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.click_the_login()"
});
formatter.result({
  "duration": 518098700,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmLoginTestSteps.take_screenshots_and_quit_browser()"
});
formatter.result({
  "duration": 827508700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Click on Admin Search",
  "description": "",
  "id": "orangehrm-website;click-on-admin-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@tc_01_AdminSearch"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Launch orangehrm application and login",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Select Admin menu",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter username",
  "rows": [
    {
      "cells": [
        "rithika"
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Select userrole",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Enter Employeename",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Select Status",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click Search button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Taking screenshots and quit application",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrmAdminSteps.launch_orangehrm_application_and_login()"
});
formatter.result({
  "duration": 10088225100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmAdminSteps.select_Admin_menu()"
});
formatter.result({
  "duration": 1902347400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmAdminSteps.enter_username()"
});
formatter.result({
  "duration": 493200,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.stepdefinition.OrangeHrmAdminSteps.enter_username() in file:/C:/Users/itsdi/eclipse-workspace/CucumberHybrid/target/test-classes/\u0027 with pattern [^Enter username$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Table:[[rithika]]]. \nStep: Then Enter username\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:133)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:584)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:172)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:804)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:145)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1507)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:770)\r\n\tat org.testng.TestRunner.run(TestRunner.java:591)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray2(ReflectionUtils.java:186)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:161)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:84)\r\n\tat org.apache.maven.plugin.surefire.InPluginVMSurefireStarter.runSuitesInProcess(InPluginVMSurefireStarter.java:87)\r\n\tat org.apache.maven.plugin.surefire.AbstractSurefireMojo.executeProvider(AbstractSurefireMojo.java:1198)\r\n\tat org.apache.maven.plugin.surefire.AbstractSurefireMojo.executeAfterPreconditionsChecked(AbstractSurefireMojo.java:1063)\r\n\tat org.apache.maven.plugin.surefire.AbstractSurefireMojo.execute(AbstractSurefireMojo.java:889)\r\n\tat org.apache.maven.plugin.DefaultBuildPluginManager.executeMojo(DefaultBuildPluginManager.java:137)\r\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:210)\r\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:156)\r\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:148)\r\n\tat org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject(LifecycleModuleBuilder.java:117)\r\n\tat org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject(LifecycleModuleBuilder.java:81)\r\n\tat org.apache.maven.lifecycle.internal.builder.singlethreaded.SingleThreadedBuilder.build(SingleThreadedBuilder.java:56)\r\n\tat org.apache.maven.lifecycle.internal.LifecycleStarter.execute(LifecycleStarter.java:128)\r\n\tat org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:305)\r\n\tat org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:192)\r\n\tat org.apache.maven.DefaultMaven.execute(DefaultMaven.java:105)\r\n\tat org.apache.maven.cli.MavenCli.execute(MavenCli.java:957)\r\n\tat org.apache.maven.cli.MavenCli.doMain(MavenCli.java:289)\r\n\tat org.apache.maven.cli.MavenCli.main(MavenCli.java:193)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.launchEnhanced(Launcher.java:282)\r\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.launch(Launcher.java:225)\r\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.mainWithExitCode(Launcher.java:406)\r\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.main(Launcher.java:347)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OrangeHrmAdminSteps.select_userrole()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHrmAdminSteps.enter_Employeename()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHrmAdminSteps.select_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHrmAdminSteps.click_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHrmAdminSteps.take_screenshots_and_quit_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "Add candidate in recruitment menu",
  "description": "",
  "id": "orangehrm-website;add-candidate-in-recruitment-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@tc_01_Recuritment"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Launch application and login to App",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Click recruitment",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Click on Add Button",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Enter firstname and lastname",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Enter email and contact no",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "upload Resume",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "select date of application",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "save the application",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "screenshot and close application",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.launch_application_and_login_to_App()"
});
formatter.result({
  "duration": 9901841900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.click_recruitment()"
});
formatter.result({
  "duration": 1897100400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.click_on_Add_Button()"
});
formatter.result({
  "duration": 698461800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.enter_firstname_and_lastname()"
});
formatter.result({
  "duration": 344363800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.enter_email_and_contact_no()"
});
formatter.result({
  "duration": 407707600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.upload_Resume()"
});
formatter.result({
  "duration": 59585000,
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument: File not found : C:\\Users\\itsdi\\Downloads\\Files\\smaple resume.docx\n  (Session info: chrome\u003d84.0.4147.135)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ABI\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\itsdi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63644}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 74ff177f5aa4e3650637a2fa3f2438e2\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor42.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy57.sendKeys(Unknown Source)\r\n\tat com.pages.RecruitmentPage.candResume(RecruitmentPage.java:129)\r\n\tat com.stepdefinition.OrangeHrmRecruitSteps.upload_Resume(OrangeHrmRecruitSteps.java:52)\r\n\tat ✽.Then upload Resume(C:/Users/itsdi/eclipse-workspace/CucumberHybrid/src/test/resources/Features/Testcase.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.select_date_of_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.save_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHrmRecruitSteps.screenshot_and_close_application()"
});
formatter.result({
  "status": "skipped"
});
});