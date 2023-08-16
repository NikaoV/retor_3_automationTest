describe("Funcionamiento pagina Web", ()=>{
        beforeEach(()=>{
                cy.visit("https://nikaov.github.io/Hoteles/");
        });
        it("Verificar que todas las cards esten al inicio", ()=>{
                cy.get(".items").should("have.length",18)
        });

        it("Aplicar filtro y verificar que aparezca el precio indicado", ()=>{
                cy.get("#pricesFilter").select("$").should("have.value", 1);
                cy.get(".price").should("have.length", 3)
                cy.get("#pricesFilter").select("$$").should("have.value", 2);
                cy.get(".price").should("have.length", 4)
                cy.get("#pricesFilter").select("$$$").should("have.value", 3);
                cy.get(".price").should("have.length", 2)
                cy.get("#pricesFilter").select("$$$$").should("have.value", 4);
                cy.get(".price").should("have.length", 9)
        })

        it("Limpiar los filtros y Verificar que este todo", ()=>{
                cy.get(".btn").click();
                cy.get(".items").should("have.length",18)
                cy.get("#countries").select("Uruguay").should("have.value", "Uruguay");
                cy.get(".items").should("have.length", 1);
                cy.get(".btn").click();
                cy.get(".items").should("have.length",18)
        })
});