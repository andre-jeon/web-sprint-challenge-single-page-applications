describe('add text to the box', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3001/')
        cy.url().should('include','localhost')
    })

    it('order button is disabled', () => {
        cy.get('#orderBtn').should('be.disabled')
    })

    it('can type a name', () => {
        cy.get('input[name="name"]')
        .type('André Jeon')
        .should('have.value', 'André Jeon')
    })

    it('can select a size', () => {
        cy.get('#size').select('Medium')
    })

    it('can check mutiple toppings', () => {
        cy.get('input[name="Pepperoni"]').check()
        cy.get('input[name="Pineapple"]').check()
    })

    it('can type special insturctions', () => {
        cy.get('input[name="specialInst"]')
        .type('Make it fast pls')
        .should('have.value', 'Make it fast pls')
    })

    it('can order a new pizza', () => {
        cy.get('#orderBtn').click()
    })
})