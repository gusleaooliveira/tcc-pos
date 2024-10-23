import { IUser } from "@/interfaces/user";

export const MOCK_USER: IUser = {
  id: "1",
  name: "Henrique",
  last_name: "Pinheiro",
  phone: "(11) 99999-9999",
  email: "email@email.com",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  cpf: "123.456.789-00",
  gender: "Masculino",
  social_media: {
    id: "1",
    instagram: "instagram",
    facebook: "facebook",
    twitter: "twitter",
    linkedin: "linkedin",
    tiktok: "tiktok",
    youtube: "youtube",
  },
  address: {
    id: "1",
    name: "Rua Exemplo",
    cep: "12345678",
    country: "Brasil",
    state: "SP",
    city: "São Paulo",
    neighborhood: "Centro",
    street: "Rua Exemplo",
    number: "123",
    complement: "Casa Exemplo",
  },
  avatar: {
    id: "1",
    title: "avatar",
    url: "https://gravatar.com/avatar/701ef47054d0b128bb497fc0ca84306c?s=400&d=robohash&r=x",
  },
  password: "12345678",
  total_progress: 100,
};
