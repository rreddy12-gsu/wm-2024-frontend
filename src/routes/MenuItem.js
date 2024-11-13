import React from "react";

export default function MenuItem({item}) {
    return (
        <div className="menuItem">
            <h2>{item["name"]}</h2>
            <p>Ingredients: {item["ingredients"]}</p>
            <p>{item["info"]}</p>
        </div>
    )
}