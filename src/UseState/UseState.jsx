import { useState } from "react";

const UserDetails = () => {
  const [user, setUser] = useState({ name: "Sam", age: 21 });

  function changeHandler(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>
        {user.name}, {user.age}
      </h1>

      <form>
        <input
          type="text"
          value={user.name}
          onChange={changeHandler}
          name="name"
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={user.age}
          onChange={changeHandler}
          name="age"
          placeholder="Enter your age"
        />
      </form>
    </>
  );
};

export default UserDetails;
