import { IFacility } from "./facility.interface";
import { FacilityModel } from "./facility.model";

const createFacilityIntoDb = async (data: IFacility) => {
  const result = await FacilityModel.create(data);
  return result;
};

const updateFacilityIntoDB = async (id: string, data: IFacility) => {
  const result = await FacilityModel.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteFacilityFromDB = async(id:string)=>{
  const result = await FacilityModel.findByIdAndUpdate(id, {isDeleted: true}, {new: true});
  return result;
}

const get

export const facilityServices = {
  createFacilityIntoDb,
  updateFacilityIntoDB,
  deleteFacilityFromDB
};
