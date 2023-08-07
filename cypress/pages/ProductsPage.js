class ProductsPage {
    elements = {
      productlist: () => cy.get('#maincontent ol'),
    };
    addProductToCart(productName,size,color){
      this.elements.productlist().contains(productName).trigger('mouseover')
      this.elements.productlist().contains(productName).click()
      //this.elements.productlist().contains(productName).parentsUntil('item product product-item').contains(size).trigger('mouseover');
      //this.elements.productlist().contains(productName).parentsUntil('item product product-item').contains(size).click();
      //this.elements.topmenu().contains(submenu).click();
    }

    viewProductDetail(productName){
      this.elements.productlist().contains(productName).trigger('mouseover')
      this.elements.productlist().contains(productName).click()
    }
  }
  
  export const productsPage = new ProductsPage();