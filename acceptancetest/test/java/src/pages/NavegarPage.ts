import { Page, Locator } from '@playwright/test';
const elementos = require ("../pages/Localizadores.ts");

export class NavegarPage {

    private menuLocator: Locator;
    private categoriaLocator: Locator;
    private subcategoria: Locator;

    constructor (page: Page) {
        this.menuLocator = page.locator(elementos.BTN_MENU);
        this.categoriaLocator = page.locator(elementos.BTN_CATEGORIA);
        this.subcategoria= page.locator (elementos.BTN_SUBCATEGORIA);
    }
    async navegar() {
        await this.menuLocator.click();
        await this.categoriaLocator.click();
        await this.subcategoria.click();

}

}