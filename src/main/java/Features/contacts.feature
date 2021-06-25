Feature: Free CRM Contacts Page Feature
#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
#@tag
#Feature: Title of your feature

#  @tag1
#  Scenario: Title of your scenario
#    Given I want to write a step with precondition
#    And some other precondition
#    When I complete action
#    And some other action
#    And yet another action
#    Then I validate the outcomes
#    And check more outcomes

#  @tag2
  Scenario Outline: Free CRM contacts page scenario
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
      | username  	| password  | firstname  | lastname | position |
      | AsgharSalar | Salar@123 | Ali				 | Khan 		| director |
      | AsgharSalar | Salar@123 | Kali			 | Johnson  | manager  |
