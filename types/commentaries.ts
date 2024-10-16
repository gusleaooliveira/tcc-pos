export interface Avatar {
  id: string;
  title: string;
  url: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  last_name: string;
  phone: string;
  password: string;
  description: string | null;
  cpf: string;
  gender: string | null;
  is_first_login: boolean;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  total_progress: number;
  created_at: string;
  updated_at: string;
  avatar: Avatar;
}

export interface Commentary {
  id: string;
  commentary: string;
  created_at: string;
  updated_at: string;
  user_id: User;
}

export type Commentaries = Commentary[];
