import React from "react";
import Login from "../Login/Login";

const Router = () => {
  return (
    <div>
      <Login path="/login" element={<Login></Login>}></Login>
    </div>
  );
};

export default Router;
