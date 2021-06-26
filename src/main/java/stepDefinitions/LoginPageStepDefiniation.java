//package stepDefinitions;
//
//import org.junit.Assert;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//
//public class LoginPageStepDefiniation {
//
//	WebDriver driver;
//	
//	@Given("^user is already on Login Page$")
//	public void user_is_already_on_Login_Page() {
//		System.setProperty("webdriver.chrome.driver",
//				"C:\\Users\\User\\OneDrive\\Documents\\JavaTraining\\FreeCrmBDDFrameworkPractice\\Drivers\\chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.get("https://classic.freecrm.com/index.html");
//	}
//	
//	@When("^title of Login Page is Free CRM$")
//	public void title_of_Login_Page_is_Free_CRM() {
//		String title = driver.getTitle();
//		System.out.println("Login page title: " + title);
//		Assert.assertEquals("Free CRM - CRM software for customer relationship management, sales, and support.", title);
//	}
//	
//	//Reg Exp:
////	 //1. \"([^\"]*)\"
////	 //2. \"(.*)\"
//	
//	@Then("^user enters \"(.*)\" and \"(.*)\"$")
//	public void user_enters_username_and_password(String username, String password) {
//	    driver.findElement(By.name("username")).sendKeys(username);
//	    driver.findElement(By.name("password")).sendKeys(password);
//	}
//	
//	@Then("^user clicks on login button$")
//	public void user_clicks_on_login_button() {
//	    driver.findElement(By.xpath("//input[@type='submit']")).click();
//	    
//	}
//	
//	@Then("^user is on home page$")
//	public void user_is_on_home_page() {
//	    String title = driver.getTitle();
//	    System.out.println("Home page title: " + title);
//	    Assert.assertEquals("CRMPRO", title);
//	}
//	
//	@Then("^user moves to new contact page$")
//	public void user_moves_to_new_contact_page() {
//	    driver.switchTo().frame("mainpanel");
//	    Actions action = new Actions(driver);
//	  //a[contains(text(),'Contacts')]
//	    action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();    
//	    driver.findElement(By.xpath("//a[text()='New Contact']")).click();
//	    
//	}
//	
//	@Then("^user enters contacts details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void user_enters_contacts_details_and_and(String firstname, String lastname, String position) {
//	    driver.findElement(By.id("first_name")).sendKeys(firstname);
//	    driver.findElement(By.id("surname")).sendKeys(lastname);
//	    driver.findElement(By.id("company_position")).sendKeys(position);
//	}
//	
//	@Then("^user clicks on save button$")
//	public void user_clicks_on_save_button() {
//		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
//	}
//	
//	@Then("^close the browser$")
//	public void close_the_browser() {
//		driver.quit();
//	}
//	
//	
//}
