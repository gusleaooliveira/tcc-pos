'use client';
import { useLesson } from '@/hooks/useLesson';
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Input,
  Tabs,
  Text,
} from '@mantine/core';
import {
  IconDots,
  IconDownload,
  IconPoint,
  IconPointFilled,
  IconSend,
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

type Props = {
  params: {
    id: string;
  };
};

export default function Lesson({ params }: Props) {
  const { user } = useAuth();
  const { data: lesson, isLoading } = useLesson(params.id);
  const [commentaries, setCommentaries] = useState<any[]>([]);

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

  const mutationCommentary = useMutation({
    mutationFn: async (data) => {
      const response = await api.post('/commentary', data);
      return response.data;
    },
    onSuccess: (response) => {
      toast.success('Comentário enviado com sucesso');
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
      console.log('Conectado ao socket');
    });

    socket.on('list-commentaries-by-lesson', (data) => {
      console.log(data);

      setCommentaries((prev) => [...prev, data]);
    });

    socket.emit('commentaries', { lesson_id: params.id });

    return () => {
      socket.disconnect();
      socket.off('list-commentaries-by-lesson');
      socket.off('connect');
    };
  }, [socket, params.id, commentaries]);

  useEffect(() => {
    socket.on('newComment', (comment) => {
      setCommentaries((prev) => [...prev, comment]); // Adicionando o novo comentário à lista
    });

    return () => {
      socket.off('newComment'); // Limpeza do listener
    };
  }, [socket]);

  console.log(commentaries);

  if (isLoading) return <Text>Carregando...</Text>;

  return (
    <Box
      style={{
        marginLeft: 48,
        marginRight: 48,
        marginTop: 29,
        marginBottom: 24.89,
      }}
    >
      <Box>
        <video
          style={{
            width: 1243,
            height: 670,
          }}
          controls
          poster={lesson?.thumbnail?.url}
        >
          <source src={lesson?.video.url} />
        </video>
      </Box>
      <Box
        style={{
          width: 1243,
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
              {!!lesson?.commentaries &&
                lesson?.commentaries.map((comentary) => (
                  <Box>
                    <Box>
                      <Avatar
                        style={{ width: 48, height: 48 }}
                        src={comentary?.user?.avatar.url}
                      />
                    </Box>
                    <Box>
                      <Text>{comentary?.user?.name}</Text>
                      <Text>{comentary?.commentary}</Text>
                    </Box>
                  </Box>
                ))}
            </Box>
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Box>
  );
}
