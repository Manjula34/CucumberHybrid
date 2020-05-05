@orangeHRM
Feature: OrangeHrm website

@tc_01_login
Scenario Outline: validate the login functionality

Given Launch the browser and enter the url
When login page is opened
Then enter the "<username>" and "<password>"
Then Click the login
And Take screenshots and quit browser

Examples:
|username |password |
|Admin    | admin123 |
|Admins    | admin124 |


@tc_01_AdminSearch
Scenario: Click on Admin Search

Given Launch orangehrm application and login
When Select Admin menu
Then Enter username 
Then Select userrole 
Then Enter Employeename
Then Select Status
Then Click Search button
And Taking screenshots and quit application


@tc_01_Recuritment
Scenario: Add candidate in recruitment menu

Given Launch application and login to App
When Click recruitment
Then Click on Add Button 
Then Enter firstname and lastname
Then Enter email and contact no
Then upload Resume
Then select date of application
Then save the application
And screenshot and close application


