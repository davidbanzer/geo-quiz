/// <reference types="cypress" />

describe("Validaciones del Login", () => {
	beforeEach(() => {
		cy.visit("http://localhost:4200/quiz/inicio-sesion");
	});

	it("Mostrar error al no introducir datos", () => {
		// click al botón de iniciar sesión
		cy.get("button").click();

		// verificar que el toast de error se muestra con el mensaje correcto
		cy.get(".toast-error").should("be.visible").contains("Ingrese datos válidos");

		// verificar que los input tienen el borde rojo
		cy.get("input[formcontrolname='usuario']").invoke("css", "border-color").should("eq", "rgb(255, 0, 0)");
		cy.get("input[formcontrolname='contrasena']").invoke("css", "border-color").should("eq", "rgb(255, 0, 0)");
	});

	it("Mostrar error cuando se ingresa datos en blanco", () => {
		cy.get("input[formcontrolname='usuario']").type(" ");
		cy.get("input[formcontrolname='contrasena']").type(" ");

		// intercept
		cy.intercept("POST", "/api/login/").as("login");

		// click al botón de iniciar sesión
		cy.get("button").click();

		// esperar respuesta 400
		cy.wait("@login").then((interception) => {
			expect(interception.response.statusCode).to.eq(400);
		});

		// verificar que el toast de error se muestra con el mensaje correcto
		cy.get(".toast-error").should("be.visible").contains("Este campo no puede estar en blanco.");

	})

	it("Mostrar error al introducir un usuario o contraseña es incorrecto", () => {
		cy.get("input[formcontrolname='usuario']").type("david");
		cy.get("input[formcontrolname='contrasena']").type("123456");

		// intercept
		cy.intercept("POST", "/api/login/").as("login");

		// click al botón de iniciar sesión
		cy.get("button").click();

		// esperar respuesta 400
		cy.wait("@login").then((interception) => {
			expect(interception.response.statusCode).to.eq(400);
		});

		// verificar que el toast de error se muestra con el mensaje correcto
		cy.get(".toast-error").should("be.visible").contains("No puede iniciar sesión con las credenciales proporcionadas");
	});
});

describe("Hacer Login y Logout", () => {

	beforeEach(() => {
		cy.visit("http://localhost:4200/quiz/inicio-sesion");
	});

	it("Mostrar página de inicio de sesión", () => {
		cy.location("pathname").should("include", "/quiz/inicio-sesion");
	});

	it("Iniciar sesión correctamente", () => {
		cy.get("input[formcontrolname='usuario']").type("davidtaller");
		cy.get("input[formcontrolname='contrasena']").type("password");

		// intercept
		cy.intercept("POST", "/api/login/").as("login");

		// click al botón de iniciar sesión
		cy.get("button").click();

		// esperar respuesta 200
		cy.wait("@login").then((interception) => {
			expect(interception.response.statusCode).to.eq(200);
		});

		// verificar que el token del localStorage no es null
		cy.window().then((win) => {
			expect(win.localStorage.getItem("token")).not.to.be.null;
		});

		// verificar que el toast de success se muestra con el mensaje correcto
		cy.get(".toast-success").should("be.visible").contains("Usuario loggeado");

		// verificar que se redirecciona a la página de inicio
		cy.location("pathname").should("include", "/quiz");
	});

	it("Cerrar sesión correctamente", () => {
		cy.get("input[formcontrolname='usuario']").type("davidtaller");
		cy.get("input[formcontrolname='contrasena']").type("password");

		// click al botón de iniciar sesión
		cy.get("button").click();

		// verificar que el toast de success se muestra con el mensaje correcto
		cy.get(".toast-success").should("be.visible").contains("Usuario loggeado");
		cy.get(".toast-success").click();

		// click al botón de cerrar sesión
		cy.get("a").contains("Cerrar Sesión").click();

		// verificar que el toast de success se muestra con el mensaje correcto
		cy.get(".toast-success").should("be.visible").contains("Sesión cerrada");	

		// Verificar que se redirecciona a la página de inicio de sesión
		cy.location("pathname").should("include", "/quiz/inicio-sesion");
	})
});

describe("Validaciones del Registro", () => {
	beforeEach(() => {
		cy.visit("http://localhost:4200/quiz/registro");
	});

	it("Mostrar error al no introducir datos", () => {
		// click al botón de registrar
		cy.get("button").click();

		// verificar que el toast de error se muestra con el mensaje correcto
		cy.get(".toast-error").should("be.visible").contains("Ingrese datos válidos");

		// verificar que los input tienen el borde rojo
		cy.get("input[formcontrolname='usuario']").invoke("css", "border-color").should("eq", "rgb(255, 0, 0)");
		cy.get("input[formcontrolname='contrasena']").invoke("css", "border-color").should("eq", "rgb(255, 0, 0)");
		cy.get("input[formcontrolname='correo']").invoke("css", "border-color").should("eq", "rgb(255, 0, 0)");
	});

	it("Mostrar error cuando se ingresa datos en blanco", () => {
		cy.get("input[formcontrolname='usuario']").type(" ");
		cy.get("input[formcontrolname='contrasena']").type(" ");
		cy.get("input[formcontrolname='correo']").type("david@gmail.com");

		// intercept
		cy.intercept("POST", "/api/register/").as("registro");

		// click al botón de registrar
		cy.get("button").click();

		// esperar respuesta 400
		cy.wait("@registro").then((interception) => {
			expect(interception.response.statusCode).to.eq(400);
		});

		// verificar que el toast de error se muestra con el mensaje correcto
		cy.get(".toast-error").should("be.visible").contains("Este campo no puede estar en blanco.");

	});

	it("Mostrar error cuando ya existe el usuario", () => {
		cy.get("input[formcontrolname='usuario']").type("davidtaller");
		cy.get("input[formcontrolname='contrasena']").type("password");
		cy.get("input[formcontrolname='correo']").type("david@gmail.com");

		// intercept
		cy.intercept("POST", "/api/register/").as("registro");

		// click al botón de registrar
		cy.get("button").click();

		// esperar respuesta 400
		cy.wait("@registro").then((interception) => {
			expect(interception.response.statusCode).to.eq(400);
		});

		// verificar que el toast de error se muestra con el mensaje correcto
		cy.get(".toast-error").should("be.visible").contains("Ya existe un usuario con ese nombre.");
	});
});

describe("Registro de usuario", () => {
	beforeEach(() => {
		cy.visit("http://localhost:4200/quiz/registro");
	});

	it("Mostrar página de registro", () => {
		cy.location("pathname").should("include", "/quiz/registro");
	});

	it("Registrar usuario correctamente", () => {
		cy.get("input[formcontrolname='usuario']").type("davidtaller8");
		cy.get("input[formcontrolname='contrasena']").type("password");
		cy.get("input[formcontrolname='correo']").type("david@gmail.com");

		// intercept
		cy.intercept("POST", "/api/register/").as("registro");

		// click al botón de registrar
		cy.get("button").click();

		// esperar respuesta 200
		cy.wait("@registro").then((interception) => {
			expect(interception.response.statusCode).to.eq(200);

		});

		// verificar que el toast de success se muestra con el mensaje correcto
		cy.get(".toast-success").should("be.visible").contains("Usuario registrado");

		// verificar que se redirecciona a la página de inicio
		cy.location("pathname").should("include", "/quiz");

	});
});