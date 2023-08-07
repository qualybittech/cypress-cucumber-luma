class HomePage {
    elements = {
      topmenu: () => cy.get('#ui-id-2'),
      showcart: () => cy.get('a.showcart'),
      proceedtocheckout: () => cy.get('#top-cart-btn-checkout'),
      signin: () => cy.get('div.panel.wrapper').contains('Sign In'),
    };

    clickShowCart() {
      //this.elements.showcart().trigger('mouseover');
      this.elements.showcart().click();
      cy.wait(2000);
    }
    clickProceedToCheckOut() {
      this.elements.proceedtocheckout().click();
      cy.wait(4000);
    }

    clickSignin(){
      cy.clearCookies();
      this.elements.signin().click();
    }
    navigateMenuSubmenu(menu,submenu){
      this.elements.topmenu().contains(menu).trigger('mouseover');
      this.elements.topmenu().contains(submenu).click();
    }
  }
  
  export const homePage = new HomePage();