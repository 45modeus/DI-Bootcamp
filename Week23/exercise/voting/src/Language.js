import React from "react";

function Language({ name, votes, onVote }) {
    return (
        <div>
            <span>{name}: </span>
            <span>{votes}: </span>
            <button onClick={onVote}>Vote</button>
        </div>
    );
}

export default Language;