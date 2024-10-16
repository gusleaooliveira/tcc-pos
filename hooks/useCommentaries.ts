import { api } from '@/services';
import { Commentaries } from '@/types/commentaries';
import { useQuery } from '@tanstack/react-query';

const getCommentaries = async (lesson_id: string): Promise<Commentaries> => {
  const response = await api.get(`/commentary/lesson/${lesson_id}`);
  return response.data;
};

export const useCommentariesByLessonId = (lesson_id: string) => {
  return useQuery({
    queryKey: ['commentary', lesson_id],
    queryFn: () => getCommentaries(lesson_id),
  });
};
