import React, { useState } from "react";
import "../App.css";
import NavBar from "./navbar";
import swal from "sweetalert";

const LoginSignupPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allowSignup, setAllowSignup] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();
    // Perform sign-in logic here
   
    localStorage.setItem(email, JSON.stringify({ email, password }));

    swal("Success!", "Sign up successful!, please proceed with Sign in", "success");
    setAllowSignup(false);
  };
  const handleSignin = (event) => {
    event.preventDefault();
    // Perform sign-in logic here
    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
     
      swal("Success!", "Sign in successful!, please proceed with Sign in", "success");
    
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
     
      localStorage.setItem(email, JSON.stringify({ email, password }));
      props.history.push("/homepage");
      // Perform additional sign-in logic here
    } else {
     
      swal("Failure!", "Invalid email or password, please try again!", "error");
    }
  };
  return (
    <>
    <NavBar/>
    
    <span className="glow">Account Login/Signup Page</span>
    <div className="Auth-form-container">
    <div className="Auth-form">
      {allowSignup ? (
        <>
      
          <h2 className="designbottom">Sign up</h2>

          <form onSubmit={handleSignup} >
            <div className="form-group mt-3">
            <label>
              <div className="label1">
              Email:
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            </div>
            <div className="form-group mt-3">
            <label>
            <div className="label1">
              Password:
             </div> 
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            </div>
            <div className="d-grid gap-2 mt-3">
            <button type="submit">Sign Up</button>
            </div>
          </form>
          
        </>
      ) : (
        <>
          <h2 className="designbottom">Sign in</h2>
          <form onSubmit={handleSignin}>
            <label>
              <div className="label1">
              Email:
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label >
            <div className="label1">
              Password:
            </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Sign In</button>
          </form>
          <span>
            <div className="or-section">
              or{" "}
              <button
                type="submit"
                className="signup-btn"
                onClick={() => {
                  
                  setAllowSignup(true);
                }}
              >
                signup
              </button>
            </div>
          </span>
        </>
      )}
    </div>
    </div>
    </>
  );
};

export default LoginSignupPage;
