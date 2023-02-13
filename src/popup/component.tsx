import React from "react";
import browser from "webextension-polyfill";
import css from "./styles.module.css";

export function Popup() {
    // Sends the `popupMounted` event
    React.useEffect(() => {
        browser.runtime.sendMessage({ popupMounted: true });
    }, []);

    return (
        <div className={css.popupContainer}>
            <div className="mx-4 my-4">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p className="lead mb-0">Example Extension</p>
                    </div>
                </div>
                <hr />
                <button
                    className={css.btn}
                    onClick={() =>
                        browser.runtime.sendMessage({ gotMessage: true })
                    }
                >
                    Send message to background
                </button>
            </div>
        </div>
    );
}
