class ProductsDetailsPage {
    elements = {
      productViewAddForm: () => cy.get('div.product-add-form'),
      productColor: () => cy.get('.swatch-attribute.color > .swatch-attribute-options'),
      productQty: () => cy.get('#qty'),
      productViewAddToCartBtn: () => cy.get('#product-addtocart-button'),
    };
    addProductToCart(size,color,quantity){
      this.elements.productViewAddForm().contains(size).trigger('mouseover')
      this.elements.productViewAddForm().contains(size).click()
      this.elements.productColor().get('div[option-label='+color+']').trigger('mouseover')
      this.elements.productColor().get('div[option-label='+color+']').click()
      this.elements.productQty().clear()
      this.elements.productQty().type(quantity)
      this.elements.productViewAddToCartBtn().click()
      cy.wait(4000)
    }

  }
  
  export const productsDetailsPage = new ProductsDetailsPage();