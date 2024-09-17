import { Page, expect } from '@playwright/test';

export class Carrito {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async clickOnCart(): Promise<void> {
        const cartLocator = this.page.locator("//span[contains(text(),'Carrito')]");
        await cartLocator.waitFor({ state: 'visible', timeout: 15000 });
        await cartLocator.click();
        console.log('Clic en el carrito realizado.');
    }
}
