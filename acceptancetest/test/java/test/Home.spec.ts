import { expect, test} from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import {NavegarPage} from '../src/pages/NavegarPage';
import {selectRandomItems} from '../src/pages/SeleccionarProductosPage';
import { Carrito } from '../src/pages/Carrito';

test.describe('Pruebas en la página de EXITO', () => {
    
    test('Given que ingreso a la pag de EXITO, When ingreso mis datos de acceso, Then verifico que ingreso correctamente', async ({ page }) => {
        await page.goto('/');
        const homePage = new HomePage(page);
        await homePage.datosCredenciales();

    });

    
    test('Given que ingreso a la pag de EXITO, When ingreso al menu and selecciono una categoria, and luego una subcategoria, Then verifico que ingreso correctamente', async ({ page }) => {
        await page.goto('/');
        const homePage = new HomePage(page);
        await homePage.datosCredenciales();
        const navegarPage = new NavegarPage(page);
        await navegarPage.navegar();
        await page.waitForTimeout(6000);
        await selectRandomItems(page);
        const cart = new Carrito(page);
        await cart.clickOnCart();

    });

});