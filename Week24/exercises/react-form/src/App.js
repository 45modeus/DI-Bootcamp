import React, { useState } from "react";
import "./index.css";
import FormComponent from "./FormComponent";

function App() {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      veganMeal: false,
    });

    //handle change in form 
    const handleChange = (event) => {
      const { name, value, type, checked } = event.target;

      setFormData((prevData) =>({
        ...prevData,
        [name]: type === "checkbox" ? checked: value,
      }));
    };

    //on submit show data in url
    const handleSubmit = (event) => {
      event.preventDefault();
      const queryString = new URLSearchParams(formData).toString();
      window.location.href = `?${queryString}`;
    };

    return (
      <div style={{ background: "beige", color: "black", padding: "20px" }}>
        <FormComponent 
          data={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    );
}

export default App;
