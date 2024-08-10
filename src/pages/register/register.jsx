import "./register.css"
import { Link } from "react-router-dom"
function register() {
  return (
    <div className="Register">
    <span className="Registertitle">Register</span>
  <form action="" className="Registerform">
    <label htmlFor="">UserName</label>
<input type="text" className="Registerinput"placeholder="enter your Name"/>
    
    <label htmlFor="">Email</label>
<input type="text" className="Registerinput"placeholder="enter your email"/>
    <label htmlFor="">Password</label>
<input type="password" placeholder="enter your email" className="Registerinput"/>
  <button className="Registerbutton">Register</button>
  </form>
  <Link to="/Login" className="login">
  <button className="Registerlogin">login</button>
  </Link>
</div>
  )
}

export default register
