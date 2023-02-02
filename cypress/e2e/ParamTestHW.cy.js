describe('Block form', () => {
    before(() => {  
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('nb-card:nth-child(3) > nb-card-header').click();
        cy.get('[title~="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
      })
    const data = [
        {testData: {firstName: 'Jane', lastName: 'Doe', email: 'example@gmail.com', website: 'www.com'}, 
        expectedResult: {firstName: 'Jane', lastName: 'Doe', email: 'example@gmail.com', website: 'www.com'}},
        ]

    data.forEach(({testData, expectedResult}) => {
        it(`passes data ${testData}`, () => {
            cy.get('#inputFirstName').type(`${testData.firstName}`);
            cy.get('#inputFirstName').should("contain.value", `${expectedResult.firstName}`);

            cy.get('#inputLastName').type(`${testData.lastName}`);
            cy.get('#inputLastName').should("contain.value", `${expectedResult.lastName}`);

            cy.get('#inputEmail').type(`${testData.email}`);
            cy.get('#inputEmail').should("contain.value", `${expectedResult.email}`);

            cy.get('#inputWebsite').type(`${testData.website}`);
            cy.get('#inputWebsite').should("contain.value", `${expectedResult.website}`);
            })
        })
    })
