'use client';
import { Box, Button, Input, PasswordInput, Text } from '@mantine/core';
import Image from 'next/image';
import home from '@/assets/home.webp';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { api, queryClient } from '@/services';
import { IconLogin } from '@tabler/icons-react';
import { toast } from 'react-toastify';
import { useAuth } from '@/contexts/login';
import { useRouter } from 'next/navigation';
import { User } from '@/types/user';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post('/auth/login', data);
      const user: User = response.data.user;
      login(user, response.data.access_token);
      return response.data;
    },
    onSuccess: () => {
      toast.success('Login realizado com sucesso');
      queryClient.invalidateQueries({ queryKey: ['login'] });
      router.push('/home');
    },
    onError: () => {
      toast.error('Email ou senha inválidos');
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
        gap: 10,
      }}
    >
      <Box
        style={{
          flexGrow: 4,
          // , border: '1px solid red'
        }}
      >
        <Image
          src={home}
          alt="home"
          style={{ width: '100%', height: '100vh' }}
        />
      </Box>
      <Box
        style={{
          flexGrow: 10,
          // border: '1px solid blue',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text size="xl" style={{ textAlign: 'center' }}>
            Login
          </Text>
          <Input.Wrapper label="Email:">
            <Input placeholder="Email" {...register('email')} />
          </Input.Wrapper>
          {errors.email && <Text c="red">{errors.email.message}</Text>}
          <PasswordInput
            type="password"
            label="Senha"
            placeholder="Password"
            {...register('password')}
          />
          {errors.password && <Text c="red">{errors.password.message}</Text>}
          <Button
            type="submit"
            variant="filled"
            fullWidth
            rightSection={<IconLogin size={16} />}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
}
