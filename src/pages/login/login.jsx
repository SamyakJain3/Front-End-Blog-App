import "./login.css"
import { Link } from "react-router-dom"
function login() {
  return (
    <div className="login">
        <span className="logintitle">Login</span>
      <form action="" className="loginform">
        <label htmlFor="">Email</label>
<input type="text" className="logininput"placeholder="enter your email"/>
        <label htmlFor="">Password</label>
<input type="password" placeholder="enter your email" className="logininput"/>
      <button className="loginbutton">login</button>
      </form>
      <Link className="link" to="/register">
      <button className="loginregister">Register</button>
            </Link> 
      </div>
  )
}

export default login
