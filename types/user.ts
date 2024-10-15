export interface User {
  id: string;
  email: string;
  name: string;
  last_name: string;
  phone: string;
  description: string;
  cpf: string;
  gender: string;
  is_first_login: boolean;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  total_progress: number;
  created_at: string;
  updated_at: string;
  avatar: {
    id: string;
    title: string;
    url: string;
  };
  social_media: {
    id: string;
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    tiktok: string;
    youtube: string;
  };
  address: {
    id: string;
    name: string;
    cep: string;
    country: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    complement: string;
    number: string;
  };
}
