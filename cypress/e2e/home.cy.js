describe('home page', () => {
    it('site deve estar online', () => {
        // visita a pagina
        cy.visit('https://www.amazon.com.br/')
        cy.get('[class*="a-carousel-rounded-buttons"]')

        // valida atalho amazon
        cy.get('#nav-logo-sprites').then(($logoSprites) => {
            if ($logoSprites.length > 0 && $logoSprites.is(':visible')) {
                cy.wrap($logoSprites).click()
            } else {
                cy.get('#nav-bb-logo').click()
            }
        })

        // valida se esta na pagina inicial  
        cy.get('#gw-card-layout')

        // valida caixa "ofertas do dia"
        cy.contains('Ofertas do Dia, de A a Z')
        cy.contains('Veja todas as ofertas').click()
        cy.get('[class$="a-spacing-micro a-text-bold"]')

    })
})