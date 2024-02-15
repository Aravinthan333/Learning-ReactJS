import { useEffect, useState } from "react";
import { UserDetailApi } from "../services/Api";
import NavBar from "../components/NavBar";
import { logout, isAuthenticated } from "../services/Auth";
import { useNavigate, Navigate } from "react-router-dom";

export default function DashboardPage() {
  //   const style = {
  //     border: "1px solid black",
  //     padding: "2px",
  //     minWidth: "150px",
  //   };

  const navigate = useNavigate();

  const [user, setUser] = useState({ name: "", email: "", localId: "" });

  useEffect(() => {
    if (isAuthenticated) {
      UserDetailApi().then((res) => {
        console.log(res);
        setUser({
          name: res.data.users[0].displayName,
          email: res.data.users[0].email,
          localId: res.data.users[0].localId,
        });
      });
    }
  }, []);

  const logoutUser = () => {
    logout();
    navigate("/login");
  };

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  // ------------------------------------------------------------------------

  return (
    <div>
      <NavBar logoutUser={logoutUser} />

      <main role="main" className="container mt-5">
        <div className="container">
          <div className="text-center mt-5">
            <h3>Dashboard page</h3>
            {user.name && user.email && user.localId ? (
              <div>
                <p className="text-bold ">
                  Hi {user.name}, your Firebase ID is {user.localId}
                </p>
                <p>Your email is {user.email}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
