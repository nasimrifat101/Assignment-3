import { Schema, model } from "mongoose";
import { IFacility } from "./facility.interface";

export const facilitySchema = new Schema<IFacility>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pricePerHour: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
})


export const FacilityModel = model<IFacility>('Facility', facilitySchema)