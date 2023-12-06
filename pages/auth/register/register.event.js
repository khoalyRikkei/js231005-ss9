import { RegisterService } from "./register.service.js";

const registerService = new RegisterService();

window.handleRegister = registerService.onRegister;

const productElement = document.querySelector("#products");
registerService.renderProduct(productElement);
