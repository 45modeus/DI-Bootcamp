import React, { useState, useEffect } from "react";

const Color = () => {
    const [favColor, setFavColor] = useState("pink");

    useEffect(() => {
        alert("useEffect reached");
        setFavColor("brown");
    }, []);

    const changeColor = () => {
        setFavColor("red");
    };

    return (
        <div>
            <h2>My Favourite color is {favColor}</h2>
            <button onClick={changeColor}>Change to red</button>
        </div>
    );
};

export default Color;