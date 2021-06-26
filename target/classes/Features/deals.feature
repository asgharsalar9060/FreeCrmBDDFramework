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
Feature: Free CRM Deals Page Feature

#  @tag1
  Scenario: Free CRM deals page scenario
    Given user is already on login page
    When title of login page
    Then user enters username and password
    | AsgharSalar | Salar@123 |
    Then user clicks on login button
    Then user is on home page
    Then user moves to deals page
    Then user enters the deals details
    | deals title | Amazon | 3700 | 10 |
    Then user clicks on save button
    Then user closes browser
    

 
