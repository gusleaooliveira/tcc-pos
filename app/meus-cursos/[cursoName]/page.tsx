"use client";
import { redirect, useParams } from "next/navigation";

export default function PageRedirect() {
  const params = useParams();
  const { cursoName } = params;
  if (!!cursoName) {
    redirect(`/meus-cursos/${cursoName}/metodologia`);
  }
  redirect(`/meus-cursos`);
  return null;
}
