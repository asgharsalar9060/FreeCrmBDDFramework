package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginPage {

	WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\User\\OneDrive\\Documents\\JavaTraining\\FreeCrmBDDFrameworkPractice\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://classic.freecrm.com/index.html");
	}
	
	@When("^title of Login Page is Free CRM$")
	public void title_of_Login_Page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println("Login page title: " + title);
		Assert.assertEquals("Free CRM - CRM software for customer relationship management, sales, and support.", title);
	}
	
	@Then("^user enters username and password$")
	public void user_enters_username_and_password() {
	    driver.findElement(By.name("username")).sendKeys("AsgharSalar");
	    driver.findElement(By.name("password")).sendKeys("Salar@123");
	}
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
	    driver.findElement(By.xpath("//input[@type='submit']")).click();
	    
	}
	
	@Then("^user is on home page$")
	public void user_is_on_home_page() {
	    String title = driver.getTitle();
	    System.out.println("Home page title: " + title);
	    Assert.assertEquals("CRMPRO", title);
	}
	
	
}
