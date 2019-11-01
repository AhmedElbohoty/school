import React, { useState } from "react";
import SubjectsModel from "./models/SubjectsModel";
import TeachersModel from "./models/TeachersModel";
import ClassModel from "./models/ClassModel";

function ControlPanel() {
  const [tab, setTab] = useState("subject");

  return (
    <section className="control">
      <h1 className="control-h1">لوحة التحكم</h1>
      <div className="control-tabs">
        <p
          className={`control-tab ${tab === "class" && "control-tab-active"}`}
          onClick={() => setTab("class")}
        >
          الدروس
        </p>
        <p
          className={`control-tab ${tab === "teacher" && "control-tab-active"}`}
          onClick={() => setTab("teacher")}
        >
          المدرسين
        </p>
        <p
          className={`control-tab ${tab === "subject" && "control-tab-active"}`}
          onClick={() => setTab("subject")}
        >
          الأقسام
        </p>
      </div>

      {tab === "subject" && <SubjectsModel />}
      {tab === "teacher" && <TeachersModel />}
      {tab === "class" && <ClassModel />}
    </section>
  );
}

export default ControlPanel;
