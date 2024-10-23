export function generateSlug(title: string): string {
  return title
    .toLocaleLowerCase() // Transforma em minúsculas
    .normalize("NFD") // Normaliza a string
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/[^\w-]+/g, ""); // Remove caracteres especiais
}
