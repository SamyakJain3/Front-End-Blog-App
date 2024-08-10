import { useState } from "react";
import "./Topbar.css";
import { Outlet, Link } from "react-router-dom";
export default function topbar() {
  const user = false;
  const [isOpen, setisOpen] = useState(false);
  const bar = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <div className="top">
        <div className="topleft">
          <img src="src\assets\img\sB.png" alt="LOGO" className="Logo" />
          
        </div>
        <div className="topcenter">
          <ul className={isOpen?"toplist active": "toplist" }>
            <li className="toplistitem">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="toplistitem">
              <Link className="link" to="/">
                Contact
              </Link>
            </li>
            <li className="toplistitem">
              <Link className="link" to="/single">
                My Blog
              </Link>
            </li>

            <li className="toplistitem">
              <Link className="link" to="/write">
                Write
              </Link>
            </li>

            <li className="toplistitem">{user && logout}</li>
          </ul>
        </div>
        <div className="topright">
          {user ? (
            <img src="" alt="Logo" className="topImg" />
          ) : (
            <ul className="toplist">
              <li className="toplistitem">
                <Link className="link" to="/Login">
                  login
                </Link>
              </li>
              <li className="toplistitem">
                <Link className="link" to="/register">
                  register
                </Link>
              </li>
            </ul>
          )}
          <i
            className= {isOpen ? "Topicon fa-solid fa-xmark" : "Topicon fa-solid fa-bars"} onClick={bar}
          ></i>
        </div>
      </div>
    </>
  );
}
