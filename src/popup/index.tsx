import * as React from "react";
import ReactDOM from "react-dom/client";
import browser from "webextension-polyfill";
import { Popup } from "./component";

let popupRoot: any;
export const renderVault = () => {
    popupRoot.render(<Popup />);
};

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
    popupRoot = ReactDOM.createRoot(
        document.getElementById("popup") as HTMLElement,
    );

    renderVault();
});
