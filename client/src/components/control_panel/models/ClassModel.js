import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Classes from "../Classes";

import {
  CLASSES,
  NEW_CLASS,
  EDIT_CLASS,
  DELETE_CLASS
} from "../../../queries/queries";

function ClasssModel() {
  const { error, data, networkStatus } = useQuery(CLASSES, {
    notifyOnNetworkStatusChange: true
  });
  const [newClass, newOpts] = useMutation(NEW_CLASS);
  const [editClass, editOpts] = useMutation(EDIT_CLASS);
  const [deleteClass, deleteOpts] = useMutation(DELETE_CLASS);

  function newClassroom(input) {
    newClass({
      variables: { input },
      refetchQueries: [{ query: CLASSES }],
      awaitRefetchQueries: [{ query: CLASSES }]
    });
  }

  function editClassroom(input) {
    editClass({
      variables: { input },
      refetchQueries: [{ query: CLASSES }],
      awaitRefetchQueries: [{ query: CLASSES }]
    });
  }

  function deleteClas(id) {
    const sure = window.confirm(`هل تريد حذف هذا الدرس`);

    if (sure) {
      deleteClass({
        variables: { id },
        refetchQueries: [{ query: CLASSES }],
        awaitRefetchQueries: [{ query: CLASSES }]
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
    <Classes
      data={data}
      newClass={newClassroom}
      editClass={editClassroom}
      deleteClass={deleteClas}
    />
  );
}

export default ClasssModel;
