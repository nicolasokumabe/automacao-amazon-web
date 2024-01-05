describe('home page', () => {
    it('site deve estar online', () => {
        // cy.viewport(1440, 900)
        cy.visit('https://www.amazon.com.br/')
        cy.get('[class*="a-carousel-rounded-buttons"]')
    })
})