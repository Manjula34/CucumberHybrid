Feature: OrangeHRM Login Feature


#  without examples keyword
#Scenario: Test Scenario
#
#Given User is already on login page
#When Title of loginpage is OrangeHrm
#Then  Enter Usename and Password
#Then User clicks on login button
#Then User is on Home page
#And close browser

Scenario Outline: Test Scenario

Given User is already on login page
When Title of loginpage is OrangeHrm
Then  Enter "<username>" and "<password>"
Then User clicks on login button
Then User is on Home page
And close browser

Examples:
		| username | password |
		| Admin    | admin123 |
		| asmji    |  admin   |