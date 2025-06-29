import ExamSubject from './exam-subject.model';
import { IExamSubject } from './exam-subject.interface';

export const createExamSubject = async (payload: IExamSubject) => {
  const result = await ExamSubject.create(payload);
  return result;
};

export const getAllExamSubjects = async () => {
  const result = await ExamSubject.find().populate('class');
  return result;
};

export const getExamSubjectByClass = async (classId: string) => {
  const result = await ExamSubject.findOne({ class: classId }).populate(
    'class',
  );
  return result;
};

export const updateExamSubject = async (
  classId: string,
  payload: Partial<IExamSubject>,
) => {
  const result = await ExamSubject.findOneAndUpdate(
    { class: classId },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const deleteExamSubject = async (classId: string) => {
  const result = await ExamSubject.findOneAndDelete({ class: classId });
  return result;
};
