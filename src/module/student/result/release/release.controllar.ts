import { Request, Response } from 'express';
import releaseDB from './release.services';

const createReleaseDate = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await releaseDB.createReleaseDateIntoDB(payload);

    res.json({
      status: true,
      message: 'result submited successfully',
      data,
    });
  } catch (err) {
    res.json({
      status: false,
      message: 'result is not submited successfully',
      error: err,
    });
  }
};

const getReleaseDate = async (req: Request, res: Response) => {
  try {
    const data = await releaseDB.getReleaseIntoDB();

    res.json({
      status: true,
      message: 'result get successfully',
      data,
    });
  } catch (err) {
    res.json({
      status: false,
      message: 'result is not get successfully',
      error: err,
    });
  }
};

const updateSingleReleaseDate = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await releaseDB.UpdateReleaseIntoDB(id, payload);
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

const releaseControllar = {
  createReleaseDate,
  getReleaseDate,
  updateSingleReleaseDate,
};
export default releaseControllar;
