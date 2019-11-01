import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-btns">
        <p className="nav-btn">تسجيل خروج</p>
        <Link to="control-panel" className="nav-btn">
          لوحة التحكم
        </Link>
      </div>

      <Link className="nav-logo" to="/">
        الشعار
      </Link>
    </nav>
  );
}

export default Nav;
