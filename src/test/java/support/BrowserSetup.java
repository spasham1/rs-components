package support;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.junit.Assert;

public class BrowserSetup {

    protected WebDriver driver;
    
    public void openBrowser(String browser, String url) throws Exception {
    	String drivers= "./src/test/resources/drivers/";
		if (browser.equalsIgnoreCase("chrome")) {
    		ChromeOptions chrome_opts = new ChromeOptions();
    		System.setProperty("webdriver.chrome.driver", drivers+"chromedriver.exe");
    		driver = new ChromeDriver(chrome_opts);
		} else if (browser.equalsIgnoreCase("firefox")) {
    		FirefoxOptions firefox_opts = new FirefoxOptions();
    		System.setProperty("webdriver.gecko.driver", drivers+"geckodriver.exe");
    		firefox_opts.setCapability("marionette", true);
			driver = new FirefoxDriver(firefox_opts);
		} else if (browser.equalsIgnoreCase("internet explorer")) {
    		InternetExplorerOptions ie_opts = new InternetExplorerOptions();
    		System.setProperty("webdriver.ie.driver", drivers+"IEDriverServer.exe");
			driver = new InternetExplorerDriver(ie_opts);
		} else {
			Assert.fail("Invalid browser selection, choose from (ie, chrome, firefox)");
		}		
        try {
			driver.get(url);
			driver.manage().window().maximize(); 
        } catch (Exception e) {
        	e.printStackTrace();
        } 
    }
}
