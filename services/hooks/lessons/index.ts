import { ILesson, IModule } from "@/interfaces/product";
import { api, apiWithoutAuth } from "../../../lib/axios/index";
import { AxiosResponse } from "axios";

interface IFetchModules {
  id?: string;
  access_token: string;
}

interface IFetchLessons {
  id?: string;
  user_id?: string;
  access_token: string;
}

export async function fetchLessons({
  id,
  access_token,
}: IFetchModules): Promise<AxiosResponse<ILesson>> {
  const url = `/lesson/${id}`;
  const response: AxiosResponse<ILesson> = await api.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response;
}


export async function fetchLessonsByModuleId({
  id,
  user_id,
  access_token,
}: IFetchLessons): Promise<{lesson: ILesson, module: IModule}> {
  const params = new URLSearchParams()
  if (!!user_id) params.append('user_id', user_id)

  const responseLesson: AxiosResponse<ILesson> = await api.get(`/lesson/${id}`, {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });

  const responseModule: AxiosResponse<IModule> = await api.get(`/modules/to-lesson/${responseLesson.data.module.id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  })

  return {
    lesson: responseLesson.data,
    module: responseModule.data
  };
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