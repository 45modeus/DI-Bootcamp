import { useState } from "react";

const CarFunction = (lol) => {
    const [color, changeColor] = useState("red")
    const [speed, changeSpeed] = useState(0)
    const [max_speed, changeMaxSpeed] = useState(lol.max_speed)

    const accelerate = () => {
        changeSpeed(speed + 10)
    }

    const decelerate = () => {
        changeSpeed(speed - 10)
    }

    return (
        <div style={{ backgroundColor: color }}>
            <h1>Hello I am a car from funtion colored</h1>
            <h2>I am going at {speed} km/h </h2>
            Speed <progress value={speed} max={max_speed}> {speed} km/h </progress>
            <button onClick={accelerate}>Accelerate</button>
            <button onClick={decelerate}>Decelerate</button>
        </div>
    )
}

export default CarFunction;