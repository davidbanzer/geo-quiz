/// <reference types="cypress" />

describe("Completar el Quiz", () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/quiz/inicio-sesion");
    });

    it("Completar el Quiz", () => {
        // iniciar sesión
        cy.get("input[formcontrolname='usuario']").type("davidtaller");
        cy.get("input[formcontrolname='contrasena']").type("password");
    
        // click al botón de iniciar sesión
        cy.get("button").click();

        // completar el quiz

        // click al botón de iniciar quiz

        cy.get("a").find("div").contains("Iniciar Quiz").click();

        // seleccionar 15 preguntas del quiz
        cy.get(".option-container div").eq(0).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(1).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(2).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(0).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(1).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(2).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(0).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(1).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(2).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(0).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(1).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(2).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(0).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(1).click();
        cy.get("button").contains("Siguiente").click();

        cy.get(".option-container div").eq(2).click();
        cy.get("button").contains("Finalizar").click();
        
        // verificar que el toast de success se muestra con el mensaje correcto
		cy.get(".toast-success").should("be.visible").contains("Puntaje agregado correctamente");

        // verificar que aparezcan los resultados
        cy.get("h1").contains("Resultados")
    });

});