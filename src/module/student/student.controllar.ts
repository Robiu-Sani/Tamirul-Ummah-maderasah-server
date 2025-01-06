import { Request, Response } from 'express';
import StudentDB from './student.services';
// import StudentModel from './student.model';

const createStudent = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await StudentDB.createStudentIntoDB(payload);

    res.json({
      status: true,
      message: 'Student is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Student is not created successfully',
      error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const data = await StudentDB.getAllStudentIntoDB();
    res.json({
      status: true,
      message: 'All Student got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Student is not get successfully',
      error,
    });
  }
};

const getSearchStudent = async (req: Request, res: Response) => {
  const { search = '' } = req.query;

  try {
    // Call the service function to fetch data
    const data = await StudentDB.getSearchBarData({
      search: String(search),
    });

    // Respond with the fetched data
    res.json({
      status: true,
      message: 'search students retrieved successfully',
      data,
    });
  } catch (error) {
    // Respond with an error
    res.json({
      status: false,
      message: 'Student data retrieval failed',
      error,
    });
  }
};

const getTableStudent = async (req: Request, res: Response) => {
  const { page = 1, search = '', class: classFilter = '' } = req.query;
  const limit = 50;
  const skip = (Number(page) - 1) * limit;

  try {
    // Call the service function to fetch data
    const data = await StudentDB.getTableData({
      page: Number(page),
      search: String(search),
      classFilter: String(classFilter),
      limit,
      skip,
    });

    // Respond with the fetched data
    res.json({
      status: true,
      message: 'All students retrieved successfully',
      data,
    });
  } catch (error) {
    // Respond with an error
    res.json({
      status: false,
      message: 'Student data retrieval failed',
      error,
    });
  }
};

// export const getTableStudent = async (req: Request, res: Response) => {
//   const { page = 1, search = "", class: classFilter = "" } = req.query;
//   const limit = 50; // Number of records per page
//   const skip = (Number(page) - 1) * limit;

//   try {
//     // Construct query based on search and class filter
//     const query = {};
//     if (search) {
//       query.studentNameEnglish = { $regex: search, $options: "i" };
//     }
//     if (classFilter) {
//       query.class = classFilter;
//     }

//     // Response
//     res.json({
//       status: true,
//       message: "Students fetched successfully",
//       data: {
//         students,
//         totalStudents,
//         uniqueClasses,
//         totalClasses: uniqueClasses.length,
//         totalMale,
//         totalFemale,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: false,
//       message: "Failed to fetch students",
//       error: error.message,
//     });
//   }
// };

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await StudentDB.getSingleStudentIntoDB(id);
    res.json({
      status: true,
      message: 'Single Student got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Student is not get successfully',
      error,
    });
  }
};

const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await StudentDB.deleteSingleStudentIntoDB(id);
    res.json({
      status: true,
      message: 'Single Student delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Student is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchStudent = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await StudentDB.updateSingleByPatchStudentIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Student update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Student is not update successfully',
      error,
    });
  }
};

const updateSingleByPutStudent = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await StudentDB.updateSingleByPutStudentIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Student update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Student is not update successfully',
      error,
    });
  }
};

const getStudentbyClass = async (req: Request, res: Response) => {
  try {
    const { gender } = req.query; // gender can be undefined
    const { className } = req.params;

    // Ensure `gender` is a string or provide a fallback value
    const genderString = typeof gender === 'string' ? gender : '';

    const data = await StudentDB.getStudentByClassIntoDB(
      className,
      genderString,
    );

    res.json({
      status: true,
      message: 'Student is retrieved by class successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Failed to retrieve students by class',
      error,
    });
  }
};

const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteSingleStudent,
  getStudentbyClass,
  updateSingleByPatchStudent,
  updateSingleByPutStudent,
  getTableStudent,
  getSearchStudent,
};

export default StudentController;
