import React, { useState } from "react";
import Modal from "../Modal";

function Teachers({ data, newTeacher, editTeacher, deleteTeacher }) {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [teacher, setTeacher] = useState("");

  function renderTeachers() {
    return data.teachers.map(({ id, name }) => {
      return (
        <div className="control-data-row" key={id}>
          <div>
            <button
              className="control-btn control-btn-delete"
              onClick={() => {
                deleteTeacher(id, name);
              }}
            >
              حذف
            </button>
            <button
              className="control-btn control-btn-edit"
              onClick={() => {
                setModal("edit");
                setId(id);
                setTeacher(name);
              }}
            >
              تعديل
            </button>
          </div>

          <p className="control-row-title">{name}</p>
        </div>
      );
    });
  }

  return (
    <section className="control-data">
      <button className="control-btn" onClick={() => setModal("new")}>
        إضافة مدرس جديد
      </button>

      {renderTeachers()}

      {modal && (
        <Modal>
          <form
            className="modal-container"
            onSubmit={e => {
              e.preventDefault();
              if (modal === "new") {
                newTeacher(teacher);
              } else {
                editTeacher(id, teacher);
              }
            }}
          >
            <div className="modal-head">
              <p className="modal-close" onClick={() => setModal(false)}>
                إغلاق
              </p>
              <p>{modal === "new" ? "إضافة مدرس جديد" : "تعديل المدرس"}</p>
            </div>

            <label className="modal-label">اسم المدرس</label>
            <input
              className="modal-input"
              value={teacher}
              onChange={e => setTeacher(e.target.value)}
              placeholder={modal === "new" ? "اسم المدرس" : teacher}
            />

            <input
              type="submit"
              className="modal-submit"
              value={modal === "new" ? "إضافة مدرس" : " تعديل المدرس"}
            />
          </form>
        </Modal>
      )}
    </section>
  );
}

export default Teachers;
