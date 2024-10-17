'use client';
import { useLesson } from '@/hooks/useLesson';
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Input,
  Loader,
  Tabs,
  Text,
} from '@mantine/core';
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconDots,
  IconDownload,
  IconFile,
  IconFileLike,
  IconPoint,
  IconPointFilled,
  IconSend,
  IconThumbDown,
  IconThumbUp,
  IconThumbUpFilled,
} from '@tabler/icons-react';
import { useMutation } from '@tanstack/react-query';
import { api, apiDarcio, queryClient } from '@/services';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useAuth } from '@/contexts/login';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { socket } from '@/services';
import { DateTime } from 'luxon';
import { useCommentariesByLessonId } from '../../../hooks/useCommentaries';
import { useLikeByLessonIdAndUserId } from '@/hooks/useLike';
import { useModule } from '@/hooks/useModules';

type Props = {
  params: {
    id: string;
  };
};

export default function Lesson({ params }: Props) {
  const { user } = useAuth();
  const {
    data: lesson,
    isLoading,
    refetch: refetchLesson,
  } = useLesson(params.id, user?.id);
  const { data: commentaries, refetch } = useCommentariesByLessonId(params.id);
  const [videoTime, setVideoTime] = useState(0); // Estado para armazenar o tempo do vídeo em segundos
  const {
    data: like,
    isLoading: isLoadingLike,
    refetch: refetchLike,
  } = useLikeByLessonIdAndUserId(params.id, user?.id);
  const [moduleId, setModuleId] = useState(lesson?.module?.id);

  useEffect(() => {
    setModuleId(lesson?.module?.id);
  }, [lesson?.module?.id]);

  const { data: module, isLoading: isLoadingModule } = useModule(moduleId);

  const mutation = useMutation({
    mutationFn: async (url: string) => {
      const response = await api.get(`/document/${url}`);
      return response.data;
    },
    onSuccess: (response) => {
      toast.success('Arquivo baixado com sucesso');
      queryClient.invalidateQueries({ queryKey: ['download'] });
    },
    onError: () => {
      toast.error('Erro ao baixar arquivo');
    },
  });

  const mutationLike = useMutation({
    mutationFn: async (data: {
      user_id: string;
      lesson_id: string;
      is_liked: boolean;
    }) => {
      const response = await api.put('/lessons-likes/create-or-update', data);
      return response.data;
    },
    onSuccess: (response) => {
      toast.success('Like enviado com sucesso');
      refetchLike();
      queryClient.invalidateQueries({ queryKey: ['lessons-likes'] });
    },
    onError: () => {
      toast.error('Erro ao enviar like');
    },
  });

  const mutationCommentary = useMutation({
    mutationFn: async (data) => {
      const response = await api.post('/commentary', data);
      return response.data;
    },
    onSuccess: (response) => {
      toast.success('Comentário enviado com sucesso');
      refetch();
      queryClient.invalidateQueries({ queryKey: ['commentary'] });
    },
    onError: () => {
      toast.error('Erro ao enviar comentário');
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    mutationCommentary.mutate(data);
    socket.emit('commentaries', { lesson_id: params.id });
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      user_id: user?.id,
      lesson_id: params?.id,
      commentary: '',
    },
  });

  useEffect(() => {
    reset({
      user_id: user?.id,
      lesson_id: params?.id,
    });
  }, [params, user]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Conectado ao servidor');
    });

    socket.on('updateLessonProgressResponse', (data) => {
      console.log(data);
    });

    return () => {
      socket.off('updateLessonProgressResponse');
      socket.off('connect');
    };
  }, [socket]);

  useEffect(() => {
    if (videoTime > 0) {
      socket.emit('updateLessonProgress', {
        user_id: user?.id,
        lesson_id: params?.id,
        time: videoTime,
      });
    }
  }, [videoTime, params?.id, user?.id]);

  const formatVideoTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  console.log('lesson:', lesson);
  console.log('like:', like?.is_liked);
  console.log('module:', module);

  if (isLoading) return <Text>Carregando...</Text>;

  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }}>
      <Box
        style={{
          marginLeft: 48,
          marginTop: 29,
          marginBottom: 24.89,
          marginRight: 25,
        }}
      >
        <Box>
          <video
            style={{
              width: 1243,
              height: 670,
              borderRadius: 12,
            }}
            controls
            poster={lesson?.thumbnail?.url}
            onTimeUpdate={(e) => {
              const videoElement = e.target as HTMLVideoElement;
              setVideoTime(videoElement.currentTime); // Atualiza o estado com o tempo atual do vídeo em segundos
            }}
          >
            <source src={lesson?.video.url} />
          </video>
        </Box>
        <Box
          style={{
            width: 1243,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            paddingRight: 23,
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <Text
                style={{
                  color: '#f4c91d',
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  fontSize: 16,
                }}
              >
                {lesson?.module.title}
              </Text>
              <IconPointFilled style={{ width: 8, height: 8 }} />
              <Badge
                color="#C09D111A"
                radius="sm"
                style={{ fontSize: 16, fontWeight: 400 }}
              >
                Aula de
              </Badge>
              <IconPointFilled style={{ width: 8, height: 8 }} />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                Publicado em{' '}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {!!lesson?.module?.created_at
                  ? DateTime.fromISO(
                      lesson?.module?.created_at.toString(),
                    ).toFormat('dd/MM/yyyy')
                  : ''}
              </Text>
            </Box>
            <Box>
              {like?.is_liked ? 'Curtido' : 'Curtir'}

              <ActionIcon
                onClick={() => {
                  mutationLike.mutate({
                    user_id: user?.id,
                    lesson_id: params?.id,
                    is_liked: !like?.is_liked,
                  });
                  refetchLike();
                }}
              >
                {isLoadingLike ? (
                  <Loader />
                ) : like?.is_liked ? (
                  <IconThumbUpFilled />
                ) : (
                  <IconThumbUp />
                )}
              </ActionIcon>
            </Box>
          </Box>
          <Box>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 40,
                fontWeight: 800,
              }}
            >
              {lesson?.title}
            </Text>
          </Box>

          <Tabs defaultValue="description">
            <Tabs.List>
              <Tabs.Tab value="description">DESCRIÇÃO DA AULA</Tabs.Tab>
              <Tabs.Tab value="materials">MATERIAIS COMPLEMENTARES</Tabs.Tab>
              <Tabs.Tab value="comments">COMENTÁRIOS</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="description">
              <Box
                style={{
                  width: 1113,
                  marginTop: 32,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: 300 }}>
                  {lesson?.full_description}
                </Text>
              </Box>
            </Tabs.Panel>
            <Tabs.Panel value="materials">
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  marginTop: 32,
                }}
              >
                {lesson?.complementary_materials.map((material) => (
                  <Box
                    key={material.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderRadius: 12,
                      backgroundColor: '#181818',
                      paddingTop: 32,
                      paddingBottom: 32,
                      paddingLeft: 24,
                      paddingRight: 24,
                    }}
                  >
                    <Box>
                      <Text
                        style={{
                          textTransform: 'uppercase',
                          color: '#f4c91d',
                          fontWeight: 300,
                          fontSize: 14,
                        }}
                      >
                        {material.type_document
                          ? material.type_document
                          : 'E-BOOK'}
                      </Text>
                      <Text>
                        {material.document_description
                          ? material.document_description
                          : 'Material de apoio'}
                      </Text>
                    </Box>
                    <Box
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                      }}
                    >
                      <Text>
                        {material.size
                          ? `${(Number(material.size) / 1000).toFixed(2)}mb`
                          : ''}
                      </Text>

                      <ActionIcon
                        variant="outline"
                        color="#F4C91D"
                        onClick={() => {
                          const url = material.url.split('document/')[1];
                          console.log(url);

                          mutation.mutate(url);
                        }}
                      >
                        <IconDownload />
                      </ActionIcon>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Tabs.Panel>
            <Tabs.Panel value="comments">
              <Box style={{ marginTop: 32 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    placeholder="Digite seu comentário"
                    {...register('commentary')}
                    rightSectionPointerEvents="all"
                    size="xl"
                    radius="md"
                    leftSection={
                      <Avatar
                        style={{ width: 48, height: 48 }}
                        src={user?.avatar.url}
                      />
                    }
                    rightSection={
                      <ActionIcon
                        type="submit"
                        variant="transparent"
                        color="white"
                      >
                        <IconSend />
                      </ActionIcon>
                    }
                  />
                </form>
              </Box>
              <Box>
                {!!commentaries &&
                  commentaries.map((comentary) => (
                    <Box
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 8,
                        marginTop: 16,
                        marginRight: 12,
                      }}
                      key={comentary.id}
                    >
                      <Box>
                        <Avatar
                          style={{ width: 48, height: 48 }}
                          src={comentary?.user_id?.avatar?.url}
                        />
                      </Box>
                      <Box
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 4,
                          borderRadius: 12,
                          padding: 16,
                          backgroundColor: '#0d0d0d',
                          width: 714,
                          maxWidth: 714,
                          height: 121,
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: 500,
                            fontSize: 14,
                          }}
                        >
                          {comentary?.user_id?.name}
                        </Text>
                        <Text
                          style={{
                            textWrap: 'wrap',
                            textAlign: 'justify',
                            fontSize: 16,
                            fontWeight: 300,
                          }}
                        >
                          {comentary?.commentary}
                        </Text>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Tabs.Panel>
          </Tabs>
        </Box>
      </Box>
      <Box
        style={{
          marginTop: 29,
          marginBottom: 24.89,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {isLoadingModule ? (
          <Loader />
        ) : (
          <Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginBottom: 24,
                marginTop: 24,
              }}
            >
              <Button
                justify="start"
                leftSection={<IconArrowLeft />}
                variant="transparent"
                color="white"
                style={{
                  borderRight: '1px solid #1c1c1c',
                  flexGrow: 1,
                  height: 52,
                }}
              >
                Anterior
              </Button>
              <Button
                justify="end"
                rightSection={<IconArrowRight />}
                variant="transparent"
                color="white"
                style={{
                  borderLeft: '1px solid #1c1c1c',
                  flexGrow: 1,
                  height: 52,
                }}
              >
                Próxima
              </Button>
            </Box>
            <Box
              style={{
                marginTop: 29,
                marginBottom: 24.89,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              {module?.lessons?.map((lesson, index) => (
                <Box
                  key={lesson.id}
                  style={{
                    width: 556,
                    height: 175,
                    borderRadius: 12,
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 16,
                    backgroundColor: '#0e0e0e',
                  }}
                >
                  <Box>
                  {lesson?.miniature?.url ? (
                    <Image
                      src={lesson?.miniature?.url}
                      width={134}
                      height={127}
                      alt="thumbnail"
                    />
                  ) : (
                    <IconFile />
                  )}
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 4,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: 300,
                          fontSize: 14,
                        }}
                      >
                        Aula {index + 1}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 800,
                          fontSize: 16,
                          textTransform: 'uppercase',
                        }}
                      >
                        {lesson.title}
                      </Text>
                    </Box>
                    <Box
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      <Text>{formatVideoTime(lesson.duration)}</Text>
                      {lesson?.lession_progress?.percentage_completed ? 
                      <>
                        <IconPointFilled style={{ width: 8, height: 8 }} />  
                        <Text>{lesson?.lession_progress?.percentage_completed}%</Text>
                      </>
                      : ''}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
