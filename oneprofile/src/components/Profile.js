import React from "react";
import Header from './Header';
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../Handler/RegistrationHandler"
import { Redirect } from "react-router-dom";


export default function Dashboard() {

  const user = useContext(AuthContext);
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (!user) {
      setredirect("/");
    }
  }, [user]);
  if (redirect) {
    <Redirect to={redirect} />;
  }
  
  return (
    <div  className="dashboard">
      <Header />
      <center>
        <div>
        <img src={localStorage.getItem("photoURL")} alt="avatar"/>
        </div>
        <h1 className="dashboard-text">Welcome</h1>
      
        <p>Name: {localStorage.getItem("loadedInName")} </p>
        <p>Email: {localStorage.getItem("loadedInEmail")} </p>
       
      </center>
      
    </div>
  );
}

