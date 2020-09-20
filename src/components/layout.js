import React from "react";
import "./layout.scss";

export default function Layout({children}) {
    return (
        <>
            <header>
                <h1>Comfort Food Bakery</h1>
            </header>
            <div>
                {children}
            </div>
        </>
    )
}