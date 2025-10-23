import React, { useState } from "react";
import Garage from "./Garage";

function Car(props) {
    const [color] = useState("red");

    return (
        <div>
            <h2>
                This is a {color} {props.carinfo.model}
            </h2>
            <Garage size="small" />
        </div>
    );
}

export default Car;