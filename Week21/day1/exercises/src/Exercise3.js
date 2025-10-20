import React, { Component } from "react";
import "./exercise.css"

class Exercise extends Component {
    render() {

        const style_header = {
            color: "White",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };

        return (
            <div>
                <h1 style={style_header}>
                    This is a styled header
                </h1>

                <p className="para">This is a paragraph in my Exercise Component.</p>

                <a href="https://react.dev" target="_blank" rel="noreferrer">
                Visit React Documentation</a>

                <form>
                    <label>
                        Name: 
                        <input type="text" name="name" />
                    </label>
                    <button type="submit">Submit</button>
                </form>

                <img 
                src="https://via.placeholder.com/150"
                alt="Example"
                width="150"
                height="150"
                />

                <ul>
                    <li>First Item</li>
                    <li>Second Item</li>
                    <li>Third Item</li>
                </ul>
            </div>
        );
    }
}

export default Exercise;