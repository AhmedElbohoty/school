import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <section id="main">
      <div>
        <h1 className="main-h1">تطبيق تنظيم جدولة لمدرسة</h1>

        <div className="main-btns">
          <Link className="main-btn" to="/">
            عرض جدول التدريس
          </Link>
          <Link className="main-btn" to="/">
            عرض جدول الدروس
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Main;
