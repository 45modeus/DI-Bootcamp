import React from "react";

class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            speed : 0,
            fuel: 45,
            max_speed: props.max_speed
        }
    }

    accelerate = () => {
        let new_speed = this.state.speed + 10
        if(new_speed > this.state.max_speed){
            return
        }
        this.setState({speed : new_speed})
    }

    decelerate = () => {
        this.setState({speed : this.state.speed - 10 })
    }

    render () {
        return (
            <div>
                <h1>Hi, I am just a car of make {this.props.make} and model {this.props.model}. </h1>
                <h2>I am currently going at {this.props.speed} km/h. </h2>
            </div>
        )
    }
}

export default Car;