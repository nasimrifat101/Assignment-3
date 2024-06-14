
import { facilityServices } from "./facility.services";
import { catchAsync } from '../../utils/catchAsync';

const createFacility = catchAsync(async (req, res) => {
  const facilityData = req.body;
  if (!facilityData) {
    throw new Error("Data is invalid or null");
  }

  const result = await facilityServices.createFacilityIntoDb(facilityData);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Facility added successfully",
    data: result,
  });
});


const updateFacility = catchAsync(async(req,res)=>{
  const {id} = req.params;
  const facilityData = req.body;

  if(!id || !facilityData){
    throw new Error("Data is invalid or null");
  }

  const result = await facilityServices.updateFacilityIntoDB(id, facilityData);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Facility updated successfully",
    data: result,
  });
})


const deleteFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new Error("Data is invalid or null");
  }
  const result = await facilityServices.deleteFacilityFromDB(id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Facility deleted successfully",
    data: result,
  });
});

const getFacility = catchAsync(async (req, res) => {
  const result = await facilityServices.getAllFacilityFromDB();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Facility fetched successfully",
    data: result,
  });
});


export const facilityController = {
  createFacility,
  updateFacility,
  deleteFacility,
  getFacility
};
