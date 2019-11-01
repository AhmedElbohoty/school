import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Subjects from "../Subjects";

import {
  SUBJECTS,
  NEW_SUBJECT,
  Edit_SUBJECT,
  DELETE_SUBJECT
} from "../../../queries/queries";

function SubjectsModel() {
  const { error, data, networkStatus } = useQuery(SUBJECTS, {
    notifyOnNetworkStatusChange: true
  });
  const [newSubject, newOpts] = useMutation(NEW_SUBJECT);
  const [editSubject, editOpts] = useMutation(Edit_SUBJECT);
  const [deleteSubject, deleteOpts] = useMutation(DELETE_SUBJECT);

  function newSub(name) {
    newSubject({
      variables: { name },
      refetchQueries: [{ query: SUBJECTS }],
      awaitRefetchQueries: [{ query: SUBJECTS }]
    });
  }

  function editSub(id, name) {
    editSubject({
      variables: {
        input: {
          id,
          name
        }
      },
      refetchQueries: [{ query: SUBJECTS }],
      awaitRefetchQueries: [{ query: SUBJECTS }]
    });
  }

  function deleteSub(id, name) {
    const sure = window.confirm(`هل تريد حذف مادة ${name}`);

    if (sure) {
      deleteSubject({
        variables: { id },
        refetchQueries: [{ query: SUBJECTS }],
        awaitRefetchQueries: [{ query: SUBJECTS }]
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
    <Subjects
      data={data}
      newSubject={newSub}
      editSubject={editSub}
      deleteSubject={deleteSub}
    />
  );
}

export default SubjectsModel;
