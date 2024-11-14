import React from "react";
import getData from "../menuData.js"
import MenuItem from "./MenuItem.js"

const items = getData();

export default function Menu() {
    return (
        <div className="menu">
            <h1>Our Menu</h1>
                {
                    items.map((item) => {
                        return (
                            <>
                                <MenuItem item={item} />
                                <div className="spacer"></div>
                            </>
                        )
                    })
                }
        </div>
    )
}