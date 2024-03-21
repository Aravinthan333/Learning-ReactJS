import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "./postsSlice";
import { selectAllUsers } from "./usersSlice";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const dispatch = useDispatch();

  {
    /* -------------------------------------- Selectors ------------------------------------ */
  }

  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  {
    /* -------------------------------------- States ------------------------------------ */
  }

  const [inp, setInp] = useState({});
  const [userId, setUserId] = useState("");

  {
    /* -------------------------------------- Events ------------------------------------ */
  }

  const onContactChange = (e) => setUserId(e.target.value);

  const handleInp = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };

  const savePost = () => {
    if (inp.name && inp.designation) {
      //   dispatch(addPost({ id: nanoid(), ...inp }));
      dispatch(addPost({ ...inp, userId }));
    }
    setInp({ ...inp, name: "", designation: "" });
    setUserId("");
  };

  const canSave =
    Boolean(inp.name) && Boolean(userId) && Boolean(inp.designation);

  return (
    <div>
      {/* -------------------------------------- Input Field ------------------------------------ */}

      <div>
        <input
          type="text"
          name="name"
          value={inp.name}
          onChange={handleInp}
          placeholder="Name"
        />
        <select value={userId} onChange={onContactChange}>
          <option value="">Select</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.contact}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="designation"
          value={inp.designation}
          onChange={handleInp}
          placeholder="Designation"
        />

        <button onClick={savePost} disabled={!canSave}>
          Save post
        </button>
      </div>

      {/* -------------------------------------- Display Items ------------------------------------ */}

      {orderedPosts.map((post) => (
        <div key={post.id}>
          <h3>name : {post.name}</h3>
          <p>Designation : {post.designation}</p>
          <p>Id : {post.userId ? post.userId : "Not Assigned"}</p>
          <TimeAgo timeStamp={post.date} />
        </div>
      ))}
    </div>
  );
};

export default PostsList;
