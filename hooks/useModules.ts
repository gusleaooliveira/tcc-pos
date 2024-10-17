import { useAuth } from '@/contexts/login';
import { api } from '@/services';
import { Module, Modules } from '@/types/modules';
import { useQuery } from '@tanstack/react-query';

const fetchModules = async (): Promise<Modules> => {
  const response = await api.get('/modules');
  return response.data;
};

const fetchModule = async (id: string): Promise<Module> => {
  const response = await api.get(`/modules/to-lesson/${id}`);
  return response.data;
};

export const useModules = () => {
  return useQuery({
    queryKey: ['modules'],
    queryFn: fetchModules,
  });
};

export const useModule = (id: string) => {
  return useQuery({
    queryKey: ['module', id],
    queryFn: () => fetchModule(id),
  });
};
