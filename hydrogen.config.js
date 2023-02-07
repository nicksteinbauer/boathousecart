import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'boathouse-cart-rental-2023.myshopify.com',
    storefrontToken: '1df896d8e460879b8537f9a0aeba1b22',
    storefrontApiVersion: '2022-07',
  },
  logger: {
    showQueryTiming: true,
  }
});
