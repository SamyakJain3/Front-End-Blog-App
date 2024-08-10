import "./setting.css"
import Sidebar from "../../components/sidebar/sidebar"
function setting() {
  return (
    <div className="setting">
      <div className="settingwrapper">
        <div className="settingtitle">
        <span className="settingupdatetitle">Update Your Account</span>
        <span className="settingdeletetitle">Delete your Account</span>
        </div>
        <form action="" className="settingform">
            <label htmlFor="">profile pic</label>
            <div className="settingprofilepic">
      <img src="src\assets\img\user.jpeg" alt="img" className="" />
<label htmlFor="fileinput"><i className="settingicon fa-solid fa-user"></i></label>
<input type="file" id="fileinput"className="settingfilefile"/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Samyak" />
            <label>Email</label>
            <input type="Email" placeholder="abs@gmail.com" />
            <label>Password</label>
            <input type="text"/>
            <button className="settingsubmit">Update</button>
        </form>
      </div>
      {/* <Sidebar /> */}
    </div>
  )
}

export default setting
