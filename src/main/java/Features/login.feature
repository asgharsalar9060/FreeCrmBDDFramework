Feature: Free CRM Login Feature

#without Examples Keyword

#Scenario: Free CRM Login Test Scenario

#Given user is already on Login Page 
#When title of Login Page is Free CRM 
#Then user enters "AsgharSalar" and "Salar@123"
#Then user clicks on login button
#Then user is on home page



#with Examples Keyword

Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login Page 
When title of Login Page is Free CRM 
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user moves to new contact page
Then user enters contacts details "<firstname>" and "<lastname>" and "<position>"
Then user clicks on save button
Then close the browser

Examples:
	| username 				| password 	| 
	| AsgharSalar			| Salar@123 |
	| groupautomation	| test@12345|