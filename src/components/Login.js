import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Login.css";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <div className="left">
        <h1>Board.</h1>
      </div>
      <div className="right">
        <div>
          <div className="heading">
            <h1>Sign In</h1>
            <p>Sign in to your account</p>
          </div>
          <div className="buttons">
            <button className="btn" onClick={() => loginWithRedirect({ redirectUri: `${window.location.origin}/dashboard` })}>
              <FcGoogle />
              <p>Sign in with Google</p>
            </button>
            <button className="btn" onClick={() => loginWithRedirect({ redirectUri: `${window.location.origin}/dashboard` })}>
              <FaApple />
              <p>Sign in with Apple</p>
            </button>
          </div>
          <div className="forms">
            <p>Email</p>
            <input type="email" />
            <p>Password</p>
            <input type="password" />
            <p>
              <a href="#">Forget Password?</a>
            </p>
            <button className="form-btn" onClick={() => navigate("/dashboard")}>
              Sign In
            </button>
          </div>
          <div className="signup">
            <p className="register">
              Dont hava an account? <a href="#">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
