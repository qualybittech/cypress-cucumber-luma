Feature: E2E Checkout Journeys
    Background:
        Given A web browser is at the luma home page

    Scenario: To verify order created sucessfully for two products with login from Products details page
	    When I logged in with username "roni_cost@example.com" and password "roni_cost3@example.com"
        And A user Navigate to "Women" and "Tops"
        And I view the product detail "Breathe-Easy Tank"
        And I select size "M" and color "Yellow" and quantity "2" in product details page
        And A user Navigate to "Women" and "Bottoms"
        And I view the product detail "Erika Running Short"
        And I select size "29" and color "Green" and quantity "3" in product details page
        And I Navigate to view cart
        And I Enter checkout details
        |loggedin|customeremail     |firstname|lastname |company|streetline1|streetline2 |streetline3|city   |region|postcode|country      |telephone   |
        |true   |checkout@gmail.com|Danny    |Morrision|Balmer |walsal     |North street|1st floor  |Florida|Alaska|64530   |United States|9876543201  |
        Then Order should be created successfully