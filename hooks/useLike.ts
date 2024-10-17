import { api } from '@/services';
import { Commentaries } from '@/types/commentaries';
import { Like } from '@/types/like';
import { useQuery } from '@tanstack/react-query';

const getLikeByLessonIdAndUserId = async (
  lesson_id: string,
  user_id: string,
): Promise<Like> => {
  let params = new URLSearchParams();
  if (!!user_id) {
    params.set('user_id', user_id);
  }
  const response = await api.get(`/lessons-likes/by-user/${lesson_id}`, {
    params,
  });
  return response.data;
};

export const useLikeByLessonIdAndUserId = (
  lesson_id: string,
  user_id: string,
) => {
  return useQuery({
    queryKey: ['lessons-likes', lesson_id, user_id],
    queryFn: () => getLikeByLessonIdAndUserId(lesson_id, user_id),
  });
};
