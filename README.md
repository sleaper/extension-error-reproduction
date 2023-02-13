# Problem

-   When you run `yarn build` and try to run the extension in produciton build. The messaging is broken and you get this error:
    `Error: Could not establish connection. Receiving end does not exist.`
-   In firefox the error is in background script and in chrome it is in the popup window.

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
