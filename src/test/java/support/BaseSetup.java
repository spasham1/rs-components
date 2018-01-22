package support;

import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class BaseSetup {

    protected WebDriver driver;
    protected WebElement element;

    public BaseSetup(WebDriver driver) {
        this.driver = driver;
    }    

	public void quit() throws Exception {
		if(driver!=null)
			driver.quit();
	}

    public void waitForVisibilityOf(By locator) {
    	try {
    		WebDriverWait wait = new WebDriverWait(driver, 10);
    		wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    	} catch (Exception e) {
    		Assert.fail("Element '"+locator+"' is not visible in 10 seconds");
    	}
    }
    
    public WebElement findElement(By locator) {
    	try{
    	element = new WebDriverWait(driver, 10)
    			.until(ExpectedConditions.presenceOfElementLocated(locator)); 
    	} catch (Exception e) {
    		Assert.fail("Failed to find element '"+locator+"' in 10 seconds");
    	}
    	return element;
    }
    
    public void click(By locator) {
    	element = findElement(locator);
    	element.click();
    }

    public void input(By locator, String text) throws Exception {
    	click(locator);
    	element.clear();
    	element.sendKeys(text);
    }
    
    public void pageShouldContainTitle(String title) {
    	if(!driver.getTitle().contains(title))
    		Assert.fail("Page does not contain title " +title);
    }    
    
    public void pageShouldContainText(String text) {
		waitForVisibilityOf(By.xpath("//*[contains(., '" + text + "')]"));
	}

}