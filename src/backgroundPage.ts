import browser from "webextension-polyfill";

// Listen for messages sent from other parts of the extension
browser.runtime.onMessage.addListener(
    (request: { popupMounted: boolean; gotMessage: boolean }) => {
        // Log statement if request.popupMounted is true
        // NOTE: this request is sent in `popup/component.tsx`
        if (request.popupMounted) {
            console.log("backgroundPage notified that Popup.tsx has mounted.");
        } else if (request.gotMessage) {
            console.log("GOT MESSAGE");
        }
    },
);
