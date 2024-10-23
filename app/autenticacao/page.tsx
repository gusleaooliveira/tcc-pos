import { redirect } from "next/navigation";

export default function PageRedirect() {
  redirect("/autenticacao/acessar-conta");
  return null;
}
