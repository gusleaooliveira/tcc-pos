import { useAuth } from '@/contexts/login';
import { api } from '@/services';
import { Modules } from '@/types/modules';
import { useQuery } from '@tanstack/react-query';

const fetchModules = async (): Promise<Modules> => {
  const response = await api.get('/modules');
  return response.data;
};

export const useModules = () => {
  return useQuery({
    queryKey: ['modules'],
    queryFn: fetchModules,
  });
};
