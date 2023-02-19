import React, { useEffect } from "react";
import { auth, provider } from "./firebase/config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Login from "./signin/Login";
const App = () => {
  const [user, setUser] = useState(null);
  const handel = () => {
    signInWithPopup(auth, provider)?.then((user) => {
      setUser(user.user);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
      }
    });
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem("user"));
  }, []);
  const userL = JSON.parse(localStorage?.getItem("user"));

  return (
    <div className="app">
      <Routes>
        <Route path="/main" element={<Main user={userL} />} />
        <Route path="/" element={<Login handel={handel} user={user} />} />
      </Routes>
    </div>
  );
};

export default App;
