import { Page, Locator, expect } from '@playwright/test';

class SelectorHelper {
    private titles: Locator[];
    private titlesSize: number;

    constructor(titles: Locator[], titlesSize: number) {
        this.titles = titles;
        this.titlesSize = titlesSize;
    }

    async getRandomTitleText(): Promise<string> {
        const randomIndex = Math.floor(Math.random() * this.titlesSize);
        let text = await this.titles[randomIndex].innerText();
        text = text.split('\n')[0].trim();
        return text;
    }
}

export async function selectRandomItems(page: Page) {
    const titleLocator = page.locator('//p[contains(@class, "styles_name")]');

    const titles = titleLocator.locator('..');
    const titlesCount = await titles.count();

    if (titlesCount < 5) {
        throw new Error('No hay suficientes elementos para seleccionar.');
    }

    const selectorHelper = new SelectorHelper(Array.from({ length: titlesCount }, (_, i) => titles.nth(i)), titlesCount);
    const selectedTitles: string[] = [];

    for (let i = 0; i < 5; i++) {
        const randomTitle = await selectorHelper.getRandomTitleText();
        console.log(`Seleccionado: ${randomTitle}`);

        const buttonLocator = page.locator(`//p[contains(text(), "${randomTitle}")]/ancestor::article//button[contains(@class, 'DefaultStyle')]`);
        console.log(`Número de botones encontrados: ${buttonLocator}`);

        await buttonLocator.waitFor({ state: 'visible', timeout: 15000 });
        await buttonLocator.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        await buttonLocator.click();

        selectedTitles.push(randomTitle);
    }

    console.log('Títulos seleccionados:', selectedTitles);
}
