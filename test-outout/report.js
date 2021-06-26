$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/User/OneDrive/Documents/JavaTraining/FreeCrmBDDFrameworkPractice/src/main/java/Features/dealsmap.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#@tag"
    }
  ],
  "line": 20,
  "name": "Free CRM Deals Page Feature",
  "description": "",
  "id": "free-crm-deals-page-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "#  @tag1"
    }
  ],
  "line": 23,
  "name": "Free CRM deals page scenario",
  "description": "",
  "id": "free-crm-deals-page-feature;free-crm-deals-page-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27
    },
    {
      "cells": [
        "AsgharSalar",
        "Salar@123"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user moves to deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user enters the deals details",
  "rows": [
    {
      "cells": [
        "title",
        "company",
        "amount",
        "commission"
      ],
      "line": 34
    },
    {
      "cells": [
        "deals title1",
        "Amazon",
        "3700",
        "10"
      ],
      "line": 35
    },
    {
      "cells": [
        "deals title2",
        "Ebay",
        "1700",
        "20"
      ],
      "line": 36
    },
    {
      "cells": [
        "deals title3",
        "Google",
        "7700",
        "30"
      ],
      "line": 37
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsPageStepDefinitionWithMap.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 6277935900,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageStepDefinitionWithMap.title_of_login_page()"
});
formatter.result({
  "duration": 13310300,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageStepDefinitionWithMap.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 640664400,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageStepDefinitionWithMap.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2320721300,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageStepDefinitionWithMap.user_is_on_home_page()"
});
formatter.result({
  "duration": 9523800,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageStepDefinitionWithMap.user_moves_to_deals_page()"
});
formatter.result({
  "duration": 990737700,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageStepDefinitionWithMap.user_enters_contacts_details_and_and(DataTable)"
});
formatter.result({
  "duration": 6726155400,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageStepDefinitionWithMap.user_closes_browser()"
});
formatter.result({
  "duration": 856420400,
  "status": "passed"
});
});