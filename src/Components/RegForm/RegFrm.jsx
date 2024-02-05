import { useState } from "react";
import "./RegFrm.css";

const RegFrm = () => {
  const [user, setUser] = useState({
    name: "Ram",
    age: 26,
    gender: "Male",
    isMarried: true,
    country: "India",
    bio: "Tell me something about yourself",
  });

  function changeHandler(e) {
    setUser({
      ...user,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
    // const name = e.target.name;
    // const value =
    //   e.target.type === "checkbox" ? e.target.checked : e.target.value;

    // setUser((prevUser) => {
    //   return {...prevUser ,[name]: value}
    // })

    // setUser({ ...user, [name]: value });
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Marital Status</td>
            <td>{user.isMarried ? "Married" : "Not Married"}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{user.country}</td>
          </tr>
          <tr>
            <td>Bio</td>
            <td>{user.bio}</td>
          </tr>
        </tbody>
      </table>

      <form>
        <input
          type="text"
          value={user.name}
          placeholder="Full Name"
          onChange={changeHandler}
          name="name"
        />
        <input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={changeHandler}
          name="age"
        />
        <div className="gender">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={user.gender == "Male"}
              onChange={changeHandler}
            />{" "}
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={user.gender == "Female"}
              onChange={changeHandler}
            />{" "}
            Female
          </label>
        </div>
        <div>
          <label htmlFor="isMarried">
            <input
              type="checkbox"
              id="isMarried"
              checked={user.isMarried}
              name="isMarried"
              onChange={changeHandler}
            />{" "}
            Is Married
          </label>
        </div>
        <div className="select-div">
          <label htmlFor="country">Select Country :</label>
          <select
            id="country"
            name="country"
            value={user.country}
            onChange={changeHandler}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <textarea
          name="bio"
          placeholder="Write about yourself"
          onChange={changeHandler}
          cols="30"
          rows="5"
        />
      </form>
    </div>
  );
};

export default RegFrm;
