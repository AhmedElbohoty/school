import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Teachers from "../Teachers";

import {
  TEACHERS,
  NEW_TEACHER,
  EDIT_TEACHER,
  DELETE_TEACHER
} from "../../../queries/queries";

function TeachersModel() {
  const { error, data, networkStatus } = useQuery(TEACHERS, {
    notifyOnNetworkStatusChange: true
  });
  const [newTeacher, newOpts] = useMutation(NEW_TEACHER);
  const [editTeacher, editOpts] = useMutation(EDIT_TEACHER);
  const [deleteTeacher, deleteOpts] = useMutation(DELETE_TEACHER);

  function newTeach(name) {
    newTeacher({
      variables: { name },
      refetchQueries: [{ query: TEACHERS }],
      awaitRefetchQueries: [{ query: TEACHERS }]
    });
  }

  function editTeach(id, name) {
    editTeacher({
      variables: {
        input: {
          id,
          name
        }
      },
      refetchQueries: [{ query: TEACHERS }],
      awaitRefetchQueries: [{ query: TEACHERS }]
    });
  }

  function deleteTeach(id, name) {
    const sure = window.confirm(`هل تريد حذف المدرس ${name}`);

    if (sure) {
      deleteTeacher({
        variables: { id },
        refetchQueries: [{ query: TEACHERS }],
        awaitRefetchQueries: [{ query: TEACHERS }]
      });
    }
  }

  if (error) return <p className="is-error"> حدث حطأ في النظام</p>;

  if (networkStatus === 1)
    return <p className="is-loading"> ... جاري تحميل بيانات</p>;

  if (
    networkStatus === 4 ||
    newOpts.loading ||
    editOpts.loading ||
    deleteOpts.loading
  )
    return <p className="is-loading"> ... جاري تحديث بيانات</p>;

  return (
    <Teachers
      data={data}
      newTeacher={newTeach}
      editTeacher={editTeach}
      deleteTeacher={deleteTeach}
    />
  );
}

export default TeachersModel;
