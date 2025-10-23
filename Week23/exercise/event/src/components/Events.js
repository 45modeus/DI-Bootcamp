import React, { useState } from "react";

const Events = () => {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const clickMe = () => {
        alert("I was clicked");
    };

    const handleKeyDown = (event) => {
        if(event.key === "Enter") {
            alert(`You pressed Enter! The input value is ${event.target.value}`);
        }
    };

    const toggle = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div>
            <button onClick={clickMe}>Click me!</button>
            <br /><br />
            <input
                type="text"
                placeholder="Type something and press enter"
                onKeyDown={handleKeyDown} 
            />

             <br /><br />

            <button onClick={toggle}>
                {isToggleOn ? "ON" : "OFF"}
            </button>
        </div>
    );
};

export default Events;