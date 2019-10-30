import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-btns">
        <p className="nav-btn">تسجيل خروج</p>
        <p className="nav-btn">لوحة التحكم</p>
      </div>

      <Link className="nav-logo" to="/">
        الشعار
      </Link>
    </nav>
  );
}

export default Nav;
