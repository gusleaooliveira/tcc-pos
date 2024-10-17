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
  passwordResetToken: string | null;
}

export interface Like {
  id: string;
  is_liked: boolean;
  user_id: User;
}
