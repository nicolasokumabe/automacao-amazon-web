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

        cy.contains('Cuidados Pessoais e Limpeza')
        cy.get('[data-testid="carousel-deals-collection-health-and-personal-care"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Cuidados Pessoais e Limpeza')

        cy.contains('CD e Vinil')
        cy.get('[data-testid="carousel-deals-collection-dvd"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'CD e Vinil')

        // clica no botao para mostrar mais opcoes
        cy.get('.a-section > .a-begin > .a-row > .a-carousel-row-inner > .a-carousel-right > .a-button > .a-button-inner')
            .click()

        // valida novas subopcoes de atalho de pesquisa
        cy.contains('DVD e Blu-ray')
        cy.get('[data-testid="carousel-deals-collection-dvd-and-blu-ray"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'DVD e Blu-ray')

        cy.contains('Eletrônicos e Celulares')
        cy.get('[data-testid="carousel-deals-collection-electronics"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Eletrônicos e Celulares')

        cy.contains('Esportes e Aventura')
        cy.get('[data-testid="carousel-deals-collection-sports"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Esportes e Aventura')

        cy.contains('Ferramentas e Construção')
        cy.get('[data-testid="carousel-deals-collection-tools"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Ferramentas e Construção')

        cy.contains('Informática')
        cy.get('[data-testid="carousel-deals-collection-computers"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Informática')

        cy.contains('Jardim e Piscina')
        cy.get('[data-testid="carousel-deals-collection-lawn-and-garden"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Jardim e Piscina')

        cy.contains('Livros e eBooks')
        cy.get('[data-testid="carousel-deals-collection-books"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Livros e eBooks')

        cy.contains('Moda')
        cy.get('[data-testid="carousel-deals-collection-fashion"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Moda')

        cy.contains('Papelaria e Escritório')
        cy.get('[data-testid="carousel-deals-collection-office-products"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Papelaria e Escritório')

        cy.contains('Pet Shop')
        cy.get('[data-testid="carousel-deals-collection-pet-products"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Pet Shop')

        cy.contains('Video Games')
        cy.get('[data-testid="carousel-deals-collection-video-games"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Video Games')

        cy.contains('Outlet')
        cy.get('[data-testid="carousel-Outlet"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h')
            .scrollIntoView().should('have.text', 'Outlet')

    })
})