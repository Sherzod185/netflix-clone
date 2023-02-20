import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = ({ user, login }) => {
  const [fixed, setFixed] = useState(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  });

  return (
    <div
      className={`navbar ${fixed && "fixedNav"}`}
    >
      <Link className="brand" to="/main">
        <img src={logo} alt="logo" />
      </Link>
      <div className="logoImg">
        <div className="mrb">
          <div className="imgBlock">
            <img src={user?.user?.photoURL} alt="photoUrl" />
          </div>
          <div className="emailBlock">
            <h3>{user.user.displayName}</h3>

            <a target={"_"} href={"mailto:" + user?.user?.email}>
              {user?.user?.email}
            </a>
          </div>
          <Link className="logout" to="/" onClick={() => login()}>
            <LogoutIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
