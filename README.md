# Problem

## How to reproduce

1. Run `yarn build`
2. Load the unpacked extension in chrome
3. Open the popup window
4. Click on the button
5. You will see the error in the console (With chrome in popup window and with firefox in background script)

-   When you run `yarn dev`, the messaging works and you can send messages to background script.

**Getting Started**

Run the following commands to install dependencies and start developing

```
yarn install
yarn dev
```

**Scripts**

-   `yarn dev` - run `webpack` in `watch` mode
-   `yarn build` - builds the production-ready unpacked extension
-   `yarn prettify` - runs Prettier
