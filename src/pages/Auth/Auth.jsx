import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  //true = signup, false = login
  const[loginOrSignUp, setLoginOrSignUp] = React.useState(false);
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {loginOrSignUp ? <SignUp setLoginOrSignUp = {setLoginOrSignUp}/> : <LogIn setLoginOrSignUp = {setLoginOrSignUp}/> }
    </div>
  );
};
function LogIn(props) {
  const setLoginOrSignUp = props.setLoginOrSignUp;
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account? <span style={{color: "red"}} onClick={()=> setLoginOrSignUp(true)}>Sign Up</span>
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }
function SignUp(props) {
  const setLoginOrSignUp = props.setLoginOrSignUp;
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
            <span style={{fontSize: '12px'}}>Already have an account. <span style={{color: "red"}} onClick={()=> setLoginOrSignUp(false)}>Login !</span></span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Auth;