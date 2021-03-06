package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

//data table with maps for parameterization of test cases

public class DealsPageStepDefinitionWithMap {

	WebDriver driver;

	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\User\\OneDrive\\Documents\\JavaTraining\\FreeCrmBDDFrameworkPractice\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://classic.freecrm.com/index.html");
	}

	@When("^title of login page$")
	public void title_of_login_page() {
		String title = driver.getTitle();
		System.out.println("Login page title: " + title);
		Assert.assertEquals("Free CRM - CRM software for customer relationship management, sales, and support.", title);
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) {
		for (Map<String, String> data : credentials.asMaps(String.class, String.class)) {
			driver.findElement(By.name("username")).sendKeys(data.get("username"));
			driver.findElement(By.name("password")).sendKeys(data.get("password"));
		}
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

	@Then("^user moves to deals page$")
	public void user_moves_to_deals_page() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}

	@Then("^user enters the deals details$")
	public void user_enters_contacts_details_and_and(DataTable dealsData) {
		for (Map<String, String> data : dealsData.asMaps(String.class, String.class)) {

			driver.findElement(By.id("title")).sendKeys(data.get("title"));
			driver.findElement(By.xpath("//input[@name='client_lookup']")).sendKeys(data.get("company"));
			driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
			driver.findElement(By.id("commission")).sendKeys(data.get("commission"));

			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();

			Actions action = new Actions(driver);
			action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
			driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
		}
	}

	@Then("^user closes browser$")
	public void user_closes_browser() {
		driver.quit();
	}

}
