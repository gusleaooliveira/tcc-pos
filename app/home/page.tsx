'use client';

import { Box, Button, Text } from '@mantine/core';
import { useAuth } from '@/contexts/login';
import { useModules } from '@/hooks/useModules';
import { Lesson, Module } from '@/types/modules';
import Image from 'next/image';
import badges from '@/assets/badges.png';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const { logout, accessToken } = useAuth();
  const { data: modules, isLoading } = useModules();

  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  console.log(modules);

  return (
    <Box>
      <Box>
        {modules?.map((module: Module) => (
          <Box
            key={module.id}
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <Box
              style={{
                width: 440,
                maxWidth: 440,
                maxHeight: 176.11,
                height: 176.11,
                marginRight: 48,
                padding: 32,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 12,
                backgroundColor: '#151515',
              }}
            >
              <Box>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                  }}
                >
                  {'Aula 1'}
                </Text>
                <Text style={{ fontSize: 28, fontWeight: 800 }}>
                  {module.title}
                </Text>
              </Box>
              <Box>
                <Image src={badges} alt={module.title} />
                <Text>{'32%'}</Text>
              </Box>
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 16,
                maxWidth: 'calc(1392px - 123px)',
              }}
              id={'externo'}
            >
              {module?.lessons?.length > 0 &&
                module?.lessons?.map((lesson: Lesson, index: number) => (
                  <Link href={`/lesson/${lesson.id}`} key={lesson.id}>
                    <Box
                      key={lesson.id}
                      style={{
                        position: 'relative',
                        width: 330,
                        maxWidth: 330,
                        height: 425,
                        maxHeight: 425,
                        borderRadius: 4,
                      }}
                      id={'box'}
                    >
                      <Box
                        style={{
                          maxWidth: 314,
                          width: 314,
                          maxHeight: 124,
                          height: 124,
                          size: 24,
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          zIndex: 1,
                          marginLeft: 8,
                          marginRight: 8,
                          marginBottom: 8,
                        }}
                        id={'texto'}
                      >
                        <Box
                          style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 8,
                            height: '100%',
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: 900,
                              textAlign: 'center',
                              fontSize: 24,
                              marginTop: 16,
                              marginLeft: 16,
                              marginRight: 16,
                            }}
                          >
                            {lesson.title}
                          </Text>
                          <Box
                            style={{
                              paddingBottom: 4,
                              paddingLeft: 8,
                              paddingRight: 8,
                              paddingTop: 4,
                              backgroundColor: '#3c3c3c',
                              borderRadius: 4,
                              width: 55,
                              height: 30,
                              marginBottom: 16,
                            }}
                          >
                            <Text
                              style={{
                                fontWeight: 400,
                                fontSize: 12,
                                textAlign: 'center',
                              }}
                            >{`Aula ${index}`}</Text>
                          </Box>
                        </Box>
                      </Box>
                      <Image
                        src={lesson.thumbnail.url}
                        alt={lesson.title}
                        width={330}
                        height={425}
                        style={{
                          maxWidth: 330,
                          maxHeight: 425,
                          borderRadius: 12,
                          position: 'relative',
                          zIndex: 0,
                        }}
                      />
                    </Box>
                  </Link>
                ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Button onClick={logout}>Deslogar</Button>
    </Box>
  );
}
