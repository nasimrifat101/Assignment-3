import { facilityServices } from "./facility.services";
import { catchAsync } from "../../utils/catchAsync";
import { noDataFound } from "../../utils/noDataFound";

const createFacility = catchAsync(async (req, res) => {
  const facilityData = req.body;
  if (!facilityData) {
    throw new Error("Data is invalid or null");
  }

  const result = await facilityServices.createFacilityIntoDb(facilityData);
  if (!result) {
    return noDataFound(res);
  }
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Facility added successfully",
    data: result,
  });
});

const updateFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  const facilityData = req.body;

  if (!id || !facilityData) {
    throw new Error("Data is invalid or null");
  }

  const result = await facilityServices.updateFacilityIntoDB(id, facilityData);
  if (!result) {
    return noDataFound(res);
  }
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Facility updated successfully",
    data: result,
  });
});

const deleteFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new Error("Data is invalid or null");
  }
  const result = await facilityServices.deleteFacilityFromDB(id);
  if (!result) {
    return noDataFound(res);
  }
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Facility deleted successfully",
    data: result,
  });
});

const getFacility = catchAsync(async (req, res) => {
  const result = await facilityServices.getAllFacilityFromDB();
  if (!result) {
    return noDataFound(res);
  }
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Facilities retrieved successfully",
    data: result,
  });
});

export const facilityController = {
  createFacility,
  updateFacility,
  deleteFacility,
  getFacility,
};
