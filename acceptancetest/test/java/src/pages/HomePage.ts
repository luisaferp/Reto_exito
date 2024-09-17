import { Page, Locator } from '@playwright/test';
const elementos = require("../pages/Localizadores.ts");
const datos = require("../resources/Login.json");

export class HomePage {
    
    private micuentaLocator: Locator;
    private ingresarLocator: Locator;
    private usuarioLocator: Locator;
    private contrasennaLocator: Locator;
    private signInLocator: Locator;

    constructor(page: Page) {
        this.micuentaLocator = page.locator(elementos.BTN_MI_CUENTA);
        this.ingresarLocator = page.locator(elementos.BTN_EMAIL_CONTRASENNA);
        this.usuarioLocator = page.locator(elementos.TXT_USUARIO);
        this.contrasennaLocator = page.locator(elementos.TXT_CONTRASENNA);
        this.signInLocator = page.locator(elementos.BTN_ENTRAR);
    }

    async datosCredenciales() {
        await this.micuentaLocator.click();
        await this.ingresarLocator.click();
        await this.usuarioLocator.fill(datos.usuario);
        await this.contrasennaLocator.fill(datos.contrasenna);
        await this.signInLocator.click();
    }


}