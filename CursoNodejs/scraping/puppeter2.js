// Require the Puppeteer library.
const puppeteer = require("puppeteer");

// Move the code inside of an async function.
async function scrapeProduct() {
    // Create a new Puppeteer instance.
    const browser = await puppeteer.launch();

    // Create a new browser page.
    const page = await browser.newPage();

    // Navigate to the product page on Amazon.
    await page.goto("https://www.amazon.com/retroiluminado-interruptores-duraderas-anti-fantasma-resistente/dp/B09TR4Y91J/ref=sr_1_1_sspa?_encoding=UTF8&content-id=amzn1.sym.8148f1e1-83ed-498f-85be-ff288b197da7&keywords=gaming+keyboard&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1");

    // Wait for the product title and price elements to load.
    await page.waitForSelector("#productTitle");
    await page.waitForSelector("#corePrice_feature_div");

    // Extract the product title and price.
    const title = await page.$eval("#productTitle", (element) => element.textContent);
    const price = await page.$eval("#corePrice_feature_div", (element) => {
        // Extract the price text from the element.
        const priceText = element.querySelector(".a-price").textContent;

        const priceValue = priceText.replace(/\D/g, '');

        return priceValue;
    });

    // Print the results to the console.
    console.log(`Product title: ${title}`);
    console.log(`Product price: ${price / 100}`);

    // Close the browser.
    await browser.close();
}

// Call the async function.
scrapeProduct();