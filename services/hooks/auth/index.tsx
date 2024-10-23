import { IAuthLogin } from "@/interfaces/auth";
import { api } from "@/lib/axios";
import { AxiosResponse } from "axios";

const authURL = process.env.NEXT_PUBLIC_MOCK_API_AUTH_RESPONSE || "";

export default async function fetchAuthLogin(
  id: string
): Promise<AxiosResponse<IAuthLogin[]>> {
  const response: AxiosResponse<IAuthLogin[]> = await api.get(authURL);
  return response;
}

export async function postRecoverPassword(data: any) {
  const response = await api.post(`/auth/recover-password`, data);
  return response;
}
