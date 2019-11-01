import React, { useState } from "react";
import Modal from "../Modal";

function Subjects({ data, newSubject, editSubject, deleteSubject }) {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [subject, setSubject] = useState("");

  function renderSubjects() {
    return data.subjects.map(({ id, name }) => {
      return (
        <div className="control-data-row" key={id}>
          <div>
            <button
              className="control-btn control-btn-delete"
              onClick={() => {
                deleteSubject(id, name);
              }}
            >
              حذف
            </button>
            <button
              className="control-btn control-btn-edit"
              onClick={() => {
                setModal("edit");
                setId(id);
                setSubject(name);
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
        إضافة قسم جديد
      </button>

      {renderSubjects()}

      {modal && (
        <Modal>
          <form
            className="modal-container"
            onSubmit={e => {
              e.preventDefault();
              if (modal === "new") {
                newSubject(subject);
              } else {
                editSubject(id, subject);
              }
            }}
          >
            <div className="modal-head">
              <p className="modal-close" onClick={() => setModal(false)}>
                إغلاق
              </p>
              <p>{modal === "new" ? "إضافة قسم جديد" : "تعديل القسم"}</p>
            </div>

            <label className="modal-label">اسم القسم</label>
            <input
              className="modal-input"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder={modal === "new" ? "اسم القسم" : subject}
            />

            <input
              type="submit"
              className="modal-submit"
              value={modal === "new" ? "إضافة قسم" : " تعديل القسم"}
            />
          </form>
        </Modal>
      )}
    </section>
  );
}

export default Subjects;
