import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ClassesSchedule from "../ClassesSchedule";

import { TEACHERS_CLASSES } from "../../../queries/queries";

function ClassScheduleModel() {
  const { error, data, networkStatus } = useQuery(TEACHERS_CLASSES, {
    notifyOnNetworkStatusChange: true
  });

  if (error) return <p className="is-error"> حدث حطأ في النظام</p>;

  if (networkStatus === 1)
    return <p className="is-loading"> ... جاري تحميل بيانات</p>;

  if (networkStatus === 4)
    return <p className="is-loading"> ... جاري تحديث بيانات</p>;

  return <ClassesSchedule data={data} />;
}

export default ClassScheduleModel;
