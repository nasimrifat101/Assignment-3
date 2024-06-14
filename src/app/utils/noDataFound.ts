// utils/responseUtils.ts
import { Response } from 'express';

export const noDataFound = (res: Response) => {
  return res.status(404).json({
    success: false,
    statusCode: 404,
    message: "No Data Found",
    data: []
  });
};
