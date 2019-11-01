import { gql } from "apollo-boost";

/* Subjects Queries */
export const SUBJECTS = gql`
  {
    subjects {
      id
      name
    }
  }
`;

export const NEW_SUBJECT = gql`
  mutation NewSubject($name: String!) {
    newSubject(name: $name) {
      id
      name
    }
  }
`;

export const Edit_SUBJECT = gql`
  mutation EditSubject($input: EditSubjectInput!) {
    editSubject(input: $input) {
      id
      name
    }
  }
`;

export const DELETE_SUBJECT = gql`
  mutation DeleteSubject($id: ID!) {
    deleteSubject(id: $id) {
      name
    }
  }
`;

/* Teachers Queries */
export const TEACHERS = gql`
  {
    teachers {
      id
      name
    }
  }
`;

export const NEW_TEACHER = gql`
  mutation NewTeacher($name: String!) {
    newTeacher(name: $name) {
      id
      name
    }
  }
`;

export const EDIT_TEACHER = gql`
  mutation EditTeacher($input: EditTeacherInput!) {
    editTeacher(input: $input) {
      id
      name
    }
  }
`;

export const DELETE_TEACHER = gql`
  mutation DeleteTeacher($id: ID!) {
    deleteTeacher(id: $id) {
      name
    }
  }
`;

export const CLASSES = gql`
  {
    classes {
      id
      teacher {
        id
        name
      }
      subject {
        id
        name
      }
      time
    }
  }
`;

export const NEW_CLASS = gql`
  mutation NewClass($input: NewClassInput!) {
    newClass(input: $input) {
      id
    }
  }
`;

export const EDIT_CLASS = gql`
  mutation EditClass($input: EditClassInput!) {
    editClass(input: $input) {
      id
    }
  }
`;

export const DELETE_CLASS = gql`
  mutation DeleteClass($id: ID!) {
    deleteClass(id: $id) {
      id
    }
  }
`;

/* Mixed queries */
export const TEACHERS_SUBJECTS = gql`
  {
    teachers {
      id
      name
    }
    subjects {
      id
      name
    }
  }
`;

export const TEACHERS_CLASSES = gql`
  {
    teachers {
      id
      name
    }
    classes {
      id
      teacher {
        id
        name
      }
      subject {
        id
        name
      }
      time
    }
    subjects {
      id
      name
    }
  }
`;
