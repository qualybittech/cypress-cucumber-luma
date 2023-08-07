import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "@pages/HomePage";
import {loginPage} from '@pages/LoginPage'
import { productsDetailsPage } from "@pages/ProductsDetailspage";
import { productsPage } from "@pages/ProductsPage";
import { checkOutPage } from "@pages/checkOutPage";
  
  Given("A web browser is at the luma home page", () => {
    cy.clearCookies();
    cy.visit("/");
  });

  When("I logged in with username {string} and password {string}", (username,password) => {
    homePage.clickSignin();
    loginPage.submitLogin(username,password);
  });

  When("A user Navigate to {string} and {string}", (menu,submenu) => {
    homePage.navigateMenuSubmenu(menu,submenu);
  });
  
  When("I Navigate to view cart", () => {
    homePage.clickShowCart();
    homePage.clickProceedToCheckOut();
  });

  // Products page

  When("the user select product {string} and size {string} and color {string}", (product,size,color) => {
    productsPage.addProductToCart(product,size,color);
  });
 
  //Product details page
  When("I view the product detail {string}", (product) => {
    productsPage.viewProductDetail(product);
  });

  When("I select size {string} and color {string} and quantity {string} in product details page", (size,color,quantity) => {
    productsDetailsPage.addProductToCart(size,color,quantity);
  });

//Checkout details page

When("I Enter checkout details", (table) => {
  table.hashes().forEach((row) => {
    checkOutPage.enterCheckoutDetails(row.loggedin,row.customeremail,row.firstname, row.lastname, row.company, 
      row.streetline1, row.streetline2, row.streetline3, row.city, row.region, row.postcode,
      row.country, row.telephone);
  });
});

Then("Order should be created successfully", () => {
  checkOutPage.verifyOrderSuccess();
});
