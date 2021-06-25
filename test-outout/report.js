$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/User/OneDrive/Documents/JavaTraining/FreeCrmBDDFrameworkPractice/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Contacts Page Feature",
  "description": "",
  "id": "free-crm-contacts-page-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 3,
      "value": "#Keywords Summary :"
    },
    {
      "line": 4,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 5,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 6,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 7,
      "value": "#When: Some key actions"
    },
    {
      "line": 8,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 9,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 10,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 11,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 12,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 13,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 14,
      "value": "#| (Data Tables)"
    },
    {
      "line": 15,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 16,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 17,
      "value": "#\"\""
    },
    {
      "line": 18,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 20,
      "value": "#@tag"
    },
    {
      "line": 21,
      "value": "#Feature: Title of your feature"
    },
    {
      "line": 23,
      "value": "#  @tag1"
    },
    {
      "line": 24,
      "value": "#  Scenario: Title of your scenario"
    },
    {
      "line": 25,
      "value": "#    Given I want to write a step with precondition"
    },
    {
      "line": 26,
      "value": "#    And some other precondition"
    },
    {
      "line": 27,
      "value": "#    When I complete action"
    },
    {
      "line": 28,
      "value": "#    And some other action"
    },
    {
      "line": 29,
      "value": "#    And yet another action"
    },
    {
      "line": 30,
      "value": "#    Then I validate the outcomes"
    },
    {
      "line": 31,
      "value": "#    And check more outcomes"
    },
    {
      "line": 33,
      "value": "#  @tag2"
    }
  ],
  "line": 34,
  "name": "Free CRM contacts page scenario",
  "description": "",
  "id": "free-crm-contacts-page-feature;free-crm-contacts-page-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user enters contacts details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "free-crm-contacts-page-feature;free-crm-contacts-page-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 46,
      "id": "free-crm-contacts-page-feature;free-crm-contacts-page-scenario;;1"
    },
    {
      "cells": [
        "AsgharSalar",
        "Salar@123",
        "Ali",
        "Khan",
        "director"
      ],
      "line": 47,
      "id": "free-crm-contacts-page-feature;free-crm-contacts-page-scenario;;2"
    },
    {
      "cells": [
        "AsgharSalar",
        "Salar@123",
        "Kali",
        "Johnson",
        "manager"
      ],
      "line": 48,
      "id": "free-crm-contacts-page-feature;free-crm-contacts-page-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "Free CRM contacts page scenario",
  "description": "",
  "id": "free-crm-contacts-page-feature;free-crm-contacts-page-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user enters \"AsgharSalar\" and \"Salar@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user enters contacts details \"Ali\" and \"Khan\" and \"director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefiniation.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 7650185000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefiniation.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 76724700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AsgharSalar",
      "offset": 13
    },
    {
      "val": "Salar@123",
      "offset": 31
    }
  ],
  "location": "LoginPageStepDefiniation.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 623667100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefiniation.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3488432100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefiniation.user_is_on_home_page()"
});
formatter.result({
  "duration": 15339600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefiniation.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1131703500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali",
      "offset": 30
    },
    {
      "val": "Khan",
      "offset": 40
    },
    {
      "val": "director",
      "offset": 51
    }
  ],
  "location": "LoginPageStepDefiniation.user_enters_contacts_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 423486600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefiniation.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 1002847200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefiniation.close_the_browser()"
});
formatter.result({
  "duration": 1130904700,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Free CRM contacts page scenario",
  "description": "",
  "id": "free-crm-contacts-page-feature;free-crm-contacts-page-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user enters \"AsgharSalar\" and \"Salar@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user enters contacts details \"Kali\" and \"Johnson\" and \"manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefiniation.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 4578484100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefiniation.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 64417500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AsgharSalar",
      "offset": 13
    },
    {
      "val": "Salar@123",
      "offset": 31
    }
  ],
  "location": "LoginPageStepDefiniation.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 698314900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefiniation.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3006655800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefiniation.user_is_on_home_page()"
});
formatter.result({
  "duration": 6907500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefiniation.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1286484700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kali",
      "offset": 30
    },
    {
      "val": "Johnson",
      "offset": 41
    },
    {
      "val": "manager",
      "offset": 55
    }
  ],
  "location": "LoginPageStepDefiniation.user_enters_contacts_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 469147400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefiniation.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 956083500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefiniation.close_the_browser()"
});
formatter.result({
  "duration": 1012185700,
  "status": "passed"
});
});