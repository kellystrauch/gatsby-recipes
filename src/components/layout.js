import React from "react";
import "./layout.scss";

export default function Layout({children}) {
    return (
        <>
            <header>
                <h1>Comfort Food Bakery</h1>
            </header>
            <div class="mycontainer">
                {children}
                <div class="fixed-bottom">
                    <h6>Copyright &#169; 2020 Kelly Strauch</h6>
                </div>
            </div>
        </>
    )
}