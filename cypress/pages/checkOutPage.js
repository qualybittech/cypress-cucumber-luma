class CheckOutPage {
    elements = {
      customeremail: () => cy.get('div._with-tooltip input[id="customer-email"]'),
      firstname: () => cy.get('input[name="firstname"]'),
      lastname: () => cy.get('input[name="lastname"]'),
      company: () => cy.get('input[name="company"]'),
      streetline1: () => cy.get('input[name="street[0]"]'),
      streetline2: () => cy.get('input[name="street[1]"]'),
      streetline3: () => cy.get('input[name="street[2]"]'),
      city: () => cy.get('input[name="city"]'),
      regionid: () => cy.get('select[name="region_id"]'),
      postcode: () => cy.get('input[name="postcode"]'),
      countryid: () => cy.get('select[name="country_id"]'),
      telephone: () => cy.get('input[name="telephone"]'),
      shippingmethodfixed: () => cy.get('input[name="ko_unique_1"]'),
      next: () => cy.get('#shipping-method-buttons-container'),
      placeorder: () => cy.get('button.checkout'),
      ordersuccesstext: () => cy.get('#maincontent > div.page-title-wrapper > h1 > span'),
    };

    enterCheckoutDetails(loggedin,customeremail,firstname,lastname,company,streetline1,streetline2,streetline3,city,region,postcode,country,telephone){
      if(loggedin.includes('false')){
        this.elements.customeremail().type(customeremail);
        this.elements.firstname().type(firstname);
        this.elements.lastname().type(lastname);
        this.elements.company().type(company);
        this.elements.streetline1().type(streetline1);
        this.elements.streetline2().type(streetline2);
        this.elements.streetline3().type(streetline3);
        this.elements.city().type(city);
        this.elements.regionid().select(region);
        this.elements.postcode().type(postcode);
        this.elements.countryid().select(country);
        this.elements.telephone().type(telephone);
      }
      this.elements.shippingmethodfixed().click();
      this.elements.next().contains('Next').click();
      this.elements.placeorder().click();
    }

    verifyOrderSuccess(){
      this.elements.ordersuccesstext().contains('Thank you for your purchase!');
    }
  }
  
  export const checkOutPage = new CheckOutPage();