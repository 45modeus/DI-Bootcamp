import React from "react";

function Quotebox({ quote, author, color, onNewQuote }) {
    const boxStyle = {
        backgroundColor: color,
        color: "white",
        padding: "30px",
        borderRadius: "10px",
        width: "400px",
        margin: "100px auto",
        textAlign: "center",
        transition: "all 0.5s ease"
    };

    const buttonStyle = {
        backgroundColor: "white",
        color: color,
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        marginTop: "20px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "all 0.3s ease"
    };

    return (
        <div style={boxStyle}>
            <h2 style={{color: "white"}}>"{quote}"</h2>
            <p>- {author}</p>
            <button style={buttonStyle} onClick={onNewQuote}>
                New Quote
            </button>
        </div>
    );
}

export default Quotebox;