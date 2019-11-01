import React from "react";
import Select from "react-select";
import { useQuery } from "@apollo/react-hooks";
import Modal from "../../Modal";

import { TEACHERS_SUBJECTS } from "../../../queries/queries";

const styles = {
  container: provided => ({
    ...provided,
    width: "100%"
  }),
  control: provided => ({
    ...provided,
    borderRadius: 46
  }),
  placeholder: provided => ({
    ...provided,
    width: "100%",
    paddingRight: 20,
    textAlign: "right",
    lineHeight: 10
  }),
  singleValue: provided => ({
    ...provided,
    width: "100%",
    paddingRight: 10,
    textAlign: "right",
    lineHeight: 10
  }),
  input: provided => ({
    ...provided,
    width: "100%",
    textAlign: "right"
  }),
  option: provided => ({
    ...provided,
    width: "100%",
    paddingRight: "20px",
    textAlign: "right"
  })
};

function ClassModal({
  modal,
  setModal,
  editClass,
  newClass,
  id,
  teacherId,
  setTeacherId,
  subjectId,
  setSubjectId,
  time,
  setTime
}) {
  const { error, data, networkStatus } = useQuery(TEACHERS_SUBJECTS, {
    notifyOnNetworkStatusChange: true
  });

  if (error) return <p className="is-error"> حدث حطأ في النظام</p>;

  if (networkStatus === 1)
    return <p className="is-loading"> ... جاري تحميل بيانات</p>;

  if (networkStatus === 4)
    return <p className="is-loading"> ... جاري تحديث بيانات</p>;

  function renderTeachersOpts() {
    return data.teachers.map(({ id, name }) => {
      return { value: id, label: name };
    });
  }

  function renderSubjectsOpts() {
    return data.subjects.map(({ id, name }) => {
      return { value: id, label: name };
    });
  }

  function renderTimeOpts() {
    const ampm = ["AM", "PM"];
    const time = [];

    ampm.forEach(m => {
      for (let i = 1; i <= 12; i++) {
        time.push(`${i}:00 ${m}`);
      }
    });

    return time.map(time => {
      return { value: time, label: time };
    });
  }

  return (
    <Modal>
      <form
        className="modal-container"
        onSubmit={e => {
          e.preventDefault();
          if (modal === "new") {
            newClass({
              teacherId: teacherId.value,
              subjectId: subjectId.value,
              time: time.value
            });
          } else {
            editClass({
              id,
              teacherId: teacherId.value,
              subjectId: subjectId.value,
              time: time.value
            });
          }
        }}
      >
        <div className="modal-head">
          <p className="modal-close" onClick={() => setModal(false)}>
            إغلاق
          </p>
          <p>{modal === "new" ? "إضافة درس جديد" : "تعديل الدرس"}</p>
        </div>

        <label className="modal-label">اسم المدرس</label>
        <Select
          styles={styles}
          className="modal-select"
          options={renderTeachersOpts()}
          value={teacherId}
          onChange={value => setTeacherId(value)}
          placeholder="اختر اسم المدرس"
        />

        <label className="modal-label">اسم القسم</label>
        <Select
          styles={styles}
          className="modal-select"
          options={renderSubjectsOpts()}
          value={subjectId}
          onChange={value => setSubjectId(value)}
          placeholder="اختر اسم القسم"
        />

        <label className="modal-label">التوقيت</label>
        <Select
          styles={styles}
          className="modal-select"
          options={renderTimeOpts()}
          value={time}
          onChange={value => setTime(value)}
          placeholder="اختر التوقيت "
        />

        <input
          type="submit"
          className="modal-submit"
          value={modal === "new" ? "إضافة درس" : " تعديل الدرس"}
        />
      </form>
    </Modal>
  );
}

export default ClassModal;
