import { api } from '@/services';
import { Lesson } from '@/types/lesson';
import { useQuery } from '@tanstack/react-query';

const fetchLessonById = async (
  id: string,
  user_id?: string,
): Promise<Lesson> => {
  const queries = new URLSearchParams();

  if (!!user_id) {
    queries.set('user_id', user_id);
  }

  const response = await api.get(`/lesson/${id}`, {
    params: queries,
  });
  return response.data;
};

export const useLesson = (id: string, user_id?: string) => {
  return useQuery({
    queryKey: ['lesson', id, user_id],
    queryFn: () => fetchLessonById(id, user_id),
  });
};
