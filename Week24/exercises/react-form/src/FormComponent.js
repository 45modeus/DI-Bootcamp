import React from "react";

const FormComponent = ({ data, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h1>Enter your information</h1>

            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                />
            </label>

            <br />
            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleChange}
                />
            </label>

            <br />

            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={data.age}
                    onChange={handleChange}
                />
            </label>

            <br />

            <label>
                Female
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={data.gender === "female"}
                    onChange={handleChange}
                />
            </label>

            <br />

            <label>
                Male
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={data.gender === "male"}
                    onChange={handleChange}
                />
            </label>

            <br />

            <label>
                Destination:
                <select
                    name="destination"
                    value={data.destination}
                    onChange={handleChange}
                >
                    <option value="">-- Please choose a destination</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Rodrigues">Rodrigues</option>
                </select>
            </label>
            <br />

            <h3>Dietary Restrictions</h3>
            <label>
                <input
                    type="checkbox"
                    name="nutsFree"
                    checked={data.nutsFree}
                    onChange={handleChange}
                 />
                Nuts Free
            </label>
            <br />

            <label>
                <input
                    type="checkbox"
                    name="lactoseFree"
                    checked={data.lactoseFree}
                    onChange={handleChange}
                 />
                Lactose Free
            </label>

            <br />
            <label>
                <input
                    type="checkbox"
                    name="veganMeal"
                    checked={data.veganMeal}
                    onChange={handleChange}
                 />
                Vegan Meal
            </label>
            <br />

            <button type="submit">Submit</button>

            <hr />
            <h3>Entered information</h3>
            <p>Your name: {data.firstName} {data.lastName}</p>
            <p>Your age: {data.age}</p>
            <p>Your gender: {data.gender}</p>
            <p>Your destination: {data.destination}</p>
            <p>Your dietary restrictions:</p>
            <p>Nuts Free : {data.nutsFree ? "Yes" : "No"}</p>
            <p>Lactose Free : {data.lactoseFree ? "Yes" : "No"}</p>
            <p>Vegan Meal : {data.veganMeal ? "Yes" : "No"}</p>
        </form>
    );
};

export default FormComponent;