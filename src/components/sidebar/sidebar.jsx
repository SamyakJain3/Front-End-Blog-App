import "./sidebar.css";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">
          <p>
            This Website is A Blog Uploading Website. Where People Uploads There Thought.
          </p>
        </span>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">
      Categories
        </span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">Food</li>
          <li className="sidebarlistitem">City</li>
          <li className="sidebarlistitem">Nature</li>
          <li className="sidebarlistitem">Technology</li>
          {/* <li className="sidebarlistitem">Tech</li> */}
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">Follow Us</span>
        <div className="sidebarsocial">
        <i className="sidebaricon fa-brands fa-facebook"></i>
        <i className="sidebaricon fa-brands fa-twitter" ></i>
        <i className="sidebaricon fa-brands fa-pinterest" ></i>
        <i className="sidebaricon fa-brands fa-square-instagram" ></i>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
