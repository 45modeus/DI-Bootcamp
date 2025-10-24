import React, { useState } from "react";
import Language from "./Language";
import "./App.css"

function App() {

  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0 },
    {name: "Python", votes: 0 },
    {name: "Javascript", votes: 0 },
    {name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div className="App">
      <h1>Vote your Favourite language!</h1>
      {languages.map((lang, index) => (
        <Language
          key={index}
          name={lang.name}
          votes={lang.votes}
          onVote={() => handleVote(index)}
         />
      ))}
    </div>
  );
}

export default App;
