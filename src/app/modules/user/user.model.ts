import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

export const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  address: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  try {
    const salt = config.bcrypt_salt;
    if (!salt) {
      throw new Error("salt not found");
    }
    const hashedPassword = await bcrypt.hash(user.password, Number(salt));
    user.password = hashedPassword;
    next();
  } catch (err: any) {
    next(err);
  }
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UserModel = model<IUser>("User", userSchema);
