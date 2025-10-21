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
                <br></br>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    Visit React Documentation</a>

                <br></br>
                <br></br>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <button type="submit">Submit</button>
                </form>

                <p>This is an image</p>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React Logo"
                    width="300"
                />
                <br></br>
                <br></br>
                <p>This is a list</p>
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