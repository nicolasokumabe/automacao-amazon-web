describe('home page', () => {
    it('site deve estar online', () => {
        // visita a pagina
        cy.visit('https://www.amazon.com.br/')
        cy.get('[class*="a-carousel-rounded-buttons"]')

        // valida atalho amazon
        if (cy.get('#nav-logo-sprites').should('exist')) {
            cy.get('#nav-logo-sprites').click()
        } else {
            cy.get('#nav-bb-logo').click()
        }

        // valida se esta na pagina inicial  
        cy.get('#gw-card-layout')

        // valida caixa "ofertas do dia"
        cy.contains('Ofertas do Dia, de A a Z')
        cy.contains('Veja todas as ofertas').click()

        // valida se a pagina foi redirecionada para "ofertas do dia"
        cy.get('[class$="a-spacing-micro a-text-bold"]')
            .should('have.text', 'Ofertas e Promoções')

        // valida se existe oferta ativa
        cy.get('#anonCarousel1 > .a-carousel > [aria-posinset="1"] > [data-csa-c-type="item"] > .a-link-normal > .a-row > ._discount-asin-shoveler_style_badgeMessage__1IC2v > .a-size-mini > span')
            .should('have.text', 'Oferta')

        // valida subopcoes de atalho de pesquisa
        cy.contains('Todas as ofertas')
        cy.get('[class="GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h GridPresets-module__selectedPreset_-JsFklJdPGF-wQYPAy4H2"]')
            .scrollIntoView().should('have.text', 'Todas as ofertas')

        cy.contains('Ofertas Exclusivas Prime')
        cy.get('[data-testid="carousel-PrimeOnly"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Ofertas Exclusivas Prime')

        cy.contains('Dispositivos Amazon e Acessórios')
        cy.get('[data-testid="carousel-deals-collection-devices"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Dispositivos Amazon e Acessórios')

        cy.contains('Alimentos e Bebidas')
        cy.get('[data-testid="carousel-deals-collection-grocery"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Alimentos e Bebidas')

        cy.contains('Automotivo')
        cy.get('[data-testid="carousel-deals-collection-automotive"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Automotivo')

        cy.contains('Bebês')
        cy.get('[data-testid="carousel-deals-collection-baby"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Bebês')

        cy.contains('Beleza')
        cy.get('[data-testid="carousel-deals-collection-beauty"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Beleza')

        cy.contains('Brinquedos e Jogos')
        cy.get('[data-testid="carousel-deals-collection-toys-and-games"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Brinquedos e Jogos')

        cy.contains('Casa')
        cy.get('[data-testid="carousel-deals-collection-home"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Casa')

        cy.contains('Cozinha')
        cy.get('[data-testid="carousel-deals-collection-kitchen"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Cozinha')

    })
})