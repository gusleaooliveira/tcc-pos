import { IMedia } from "./media";
import { IUser } from "./user";

export interface IAuthLogin {
  email: string;
  password: string;
  avatar: IMedia;
}

export interface IAuthChangePassword {
  old_password: string;
  new_password: string;
}

export interface IResponseAuthLogin {
  user: IUser;
  access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbnJpcXVlQGNyaWEuZGlnaXRhbCIsInN1YiI6IjlhMzg1MmFiLTVhYjktNDVlZS05Zjc5LTUyMWFlOWI3MjNmNyIsImlhdCI6MTcyNzg5ODA1MSwiZXhwIjoxNzI3OTg0NDUxfQ.WoPC_Oz1fECnBHoDDoUTkAbEKfVcAZjQ2w9eYunN_7A";
}
