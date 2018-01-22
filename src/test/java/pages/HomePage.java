package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import support.*;

/**
 * Created by SPasham on 22/01/2018.
 */

public class HomePage extends BaseSetup {
    
    By searchBox = By.id("searchTerm");
    By searchResults = By.xpath("//*[@id='txtHintBox' and contains(@style, 'display: block;')]");
    public static By basket = By.className("js-basket");
    public static By checkout = By.xpath("(//span[text()='Checkout securely'])[1]");
    public static By loginDialog = By.id("loginModelPanel_container");
    public static By addToBasket = By.xpath("//*[@value='Add to basket']");
    public static By viewBasketButton = By.className("viewBasketBtnDiv");

    public HomePage(WebDriver driver) {
        super(driver);
    }

    public HomePage verifyHomePageLinks() {
    	String[] links = {"Log In", "Register", "Branch Network", "for the inspired", "Solutions", "Help", 
    						"All Products", "Our Brands", "New Products", "My Account", "Services"};
    	for(String link: links) {
    		waitForVisibilityOf(By.linkText(link));
    	}
    	return new HomePage(driver);
    }
    
    public void searchBoxIsPresent() {
    	waitForVisibilityOf(searchBox);
    }
    
    public void enterTextInSearchBox(String text) throws Exception {
    	input(searchBox, text);
    }
    
    public void displaySearchResults() {
    	waitForVisibilityOf(searchResults);
    }
    
    public void selectLink(int linkItem) {
    	int link = linkItem+1;
    	click(By.xpath("//*[@id='txtHint']/li["+link+"]"));
    }

}
