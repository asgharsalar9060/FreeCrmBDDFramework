$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 6943782900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 75601900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_enters_username_and_password()"
});
formatter.result({
  "duration": 622221700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2575807600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_is_on_home_page()"
});
formatter.result({
  "duration": 10040300,
  "status": "passed"
});
});