import React, { useState } from "react";
import ClassModal from "./modal/ClassModal";

function Classes({ data, newClass, editClass, deleteClass }) {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [teacherId, setTeacherId] = useState(null);
  const [subjectId, setSubjectId] = useState(null);
  const [time, setTime] = useState(null);

  function renderClasses() {
    return data.classes.map(({ id, teacher, subject, time }) => {
      return (
        <div className="control-data-row" key={id}>
          <div>
            <button
              className="control-btn control-btn-delete"
              onClick={() => {
                deleteClass(id);
              }}
            >
              حذف
            </button>
            <button
              className="control-btn control-btn-edit"
              onClick={() => {
                setModal("edit");
                setId(id);
                setTeacherId({ value: teacher.id, label: teacher.name });
                setSubjectId({ value: subject.id, label: subject.name });
                setTime({ value: time, label: time });
              }}
            >
              تعديل
            </button>
          </div>

          <p className="control-row-title">{teacher.name}</p>

          <p className="control-row-title">{subject.name}</p>
        </div>
      );
    });
  }

  return (
    <section className="control-data">
      <button className="control-btn" onClick={() => setModal("new")}>
        إضافة درس جديد
      </button>

      {renderClasses()}

      {modal && (
        <ClassModal
          modal={modal}
          setModal={setModal}
          newClass={newClass}
          editClass={editClass}
          id={id}
          teacherId={teacherId}
          setTeacherId={setTeacherId}
          subjectId={subjectId}
          setSubjectId={setSubjectId}
          time={time}
          setTime={setTime}
        />
      )}
    </section>
  );
}

export default Classes;
