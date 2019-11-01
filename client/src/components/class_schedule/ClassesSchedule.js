import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";

const styles = {
  container: provided => ({
    ...provided,
    width: 360
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

export default function ClassesSchedule({ data }) {
  const [filter, setFilter] = useState("");
  const classes = useMemo(() => {
    if (!filter) {
      return data.classes;
    } else {
      return data.classes.filter(({ teacher }) => teacher.id === filter.value);
    }
  }, [filter]);

  function renderClasses() {
    return classes.map(({ id, teacher, subject, time }, index) => {
      return (
        <div className="control-data-row" key={id}>
          <p className="control-row-title">{time}</p>
          <p className="control-row-title">{teacher.name}</p>
          <p className="control-row-title">{subject.name}</p>
          <p className="control-row-title">{index + 1}</p>
        </div>
      );
    });
  }

  function renderTeacherOpts() {
    return data.teachers.map(({ id, name }) => {
      return { value: id, label: name };
    });
  }

  return (
    <section className="filter">
      <h1 className="filter-h1">عرض جدول التدريس</h1>

      <div className="filter-container">
        <p className="filter-submit">عرض</p>
        <div>
          <Select
            options={renderTeacherOpts()}
            styles={styles}
            placeholder="اختر اسم المدرس"
            value={filter}
            onChange={value => setFilter(value)}
          />
        </div>
        <p className="filter-title">اختر مدرساَ</p>
      </div>

      <div className="control-data control-data-schedule">
        <div className="control-data-row control-data-head">
          <p className="control-row-title">التوقيت</p>
          <p className="control-row-title"> المدرس</p>
          <p className="control-row-title"> المادة</p>
          <p className="control-row-title">#</p>
        </div>
        {renderClasses()}
      </div>
    </section>
  );
}
