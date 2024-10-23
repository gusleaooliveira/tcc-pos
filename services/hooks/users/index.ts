import { AxiosResponse } from "axios";
import { IUser } from "@/interfaces/user";
import { api } from "@/lib/axios";

const userURL = process.env.NEXT_PUBLIC_MOCK_API_USER_RESPONSE || "";

export async function fetchUser(id: string): Promise<AxiosResponse<IUser[]>> {
  const response: AxiosResponse<IUser[]> = await api.get(`${userURL}/${id}`);
  return response;
}

export async function putUser(data: IUser) {
  const response = await api.patch(`${userURL}/${data.id}`, {
    ...data,
  });
  return response;
}

export const postAvatar = async (data: any) => {
  const response = await api.post(`/avatar`, data);
  return response;
};
