import { useState } from "react";

const Avatar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <span
        style={{
          fontSize: "50px",
          position: "absolute",
          top: "0",
          right: "1.8rem",
        }}
      >
        AR
      </span>
      {open && (
        <div className="container">
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Avatar;
