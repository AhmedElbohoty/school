// Import Resolvers
const resolvers = {
  Query: {
    async teachers(_, __, { models }) {
      const teachers = await models.Teacher.find();

      return teachers;
    },
    async teacherById(_, { id }, { models }) {
      const teacher = await models.Teacher.findById(id);

      return teacher;
    },
    async subjects(_, __, { models }) {
      const subjects = await models.Subject.find();

      return subjects;
    },
    async subjectById(_, { id }, { models }) {
      const subject = await models.Subject.findById(id);

      return subject;
    },
    async classes(_, __, { models }) {
      const classes = await models.Class.find();

      return classes;
    },
    async classById(_, { id }, { models }) {
      const singleClass = await models.Class.findById(id);

      return singleClass;
    }
  },
  Mutation: {
    newTeacher(_, { input }, { models }) {
      const newTeacher = new models.Teacher(input);

      return newTeacher.save();
    },
    async editTeacher(_, { input }, { models }) {
      const { id, name } = input;
      await models.Teacher.updateOne({ _id: id }, { name });

      const updatedTeacher = await models.Teacher.findById(id);

      return updatedTeacher;
    },
    async deleteTeacher(_, { id }, { models }) {
      const teacher = await models.Teacher.findById(id);

      await models.Teacher.deleteOne({ _id: id });

      return teacher;
    },
    newSubject(_, { name }, { models }) {
      const newSubject = new models.Subject({ name });

      return newSubject.save();
    },
    async editSubject(_, { input }, { models }) {
      const { id, name } = input;
      await models.Subject.updateOne({ _id: id }, { name });

      const updatedSubject = await models.Subject.findById(id);

      return updatedSubject;
    },
    async deleteSubject(_, { id }, { models }) {
      const subject = await models.Subject.findById(id);

      await models.Subject.deleteOne({ _id: id });

      return subject;
    },
    newClass(_, { input }, { models }) {
      const newClass = new models.Class(input);

      return newClass.save();
    }
  },
  Class: {
    teacher({ teacherId }, _, { models }) {
      const teacher = models.Teacher.findById(teacherId);

      return teacher;
    },
    subject({ subjectId }, _, { models }) {
      const subject = models.Subject.findById(subjectId);

      return subject;
    }
  }
};

module.exports = resolvers;
