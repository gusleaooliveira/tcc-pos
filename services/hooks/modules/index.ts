import { IModule } from "@/interfaces/product";
import { api, apiWithoutAuth } from "../../../lib/axios/index";
import { AxiosResponse } from "axios";

interface IFetchModules {
  id?: string;
  access_token: string;
}

export async function fetchModules({
  id,
  access_token,
}: IFetchModules): Promise<AxiosResponse<IModule[]>> {
  const url = !!id ? `/modules/${id}` : "/modules";
  const response: AxiosResponse<IModule[]> = await api.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response;
}

export async function fetchModulesHome(): Promise<AxiosResponse<IModule[]>> {
  const response: AxiosResponse<IModule[]> =
    await apiWithoutAuth.get("/modules/home");

  console.log("🚀 ~ response:", response);
  if (response.status === 200) return response;
  return Promise.reject(response);
}

export async function fetchModulesToLessons({
  id,
  access_token,
}: IFetchModules): Promise<AxiosResponse<IModule>> {
  const url = !!id ? `/modules/to-lesson/${id}` : "/modules";
  const response: AxiosResponse<IModule> = await api.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response;
}
