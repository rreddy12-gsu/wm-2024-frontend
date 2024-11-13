import React from "react";
import getData from "../menuData.js"
import MenuItem from "./MenuItem.js"

const items = getData();

function PP({info}) {
    return <p>{info}</p>
}

export default function Menu() {
    return (
        <div>
            <h1>Our Menu</h1>
            <ul>
                {
                    items.map((item) => {
                        return (
                            <li>
                                <MenuItem item={item} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}