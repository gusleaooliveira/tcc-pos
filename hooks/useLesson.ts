import { api } from '@/services';
import { Lesson } from '@/types/lesson';
import { useQuery } from '@tanstack/react-query';

const fetchLessonById = async (id: string): Promise<Lesson> => {
  const response = await api.get(`/lesson/${id}`);
  return response.data;
};

export const useLesson = (id: string) => {
  return useQuery({
    queryKey: ['lesson', id],
    queryFn: () => fetchLessonById(id),
  });
};
