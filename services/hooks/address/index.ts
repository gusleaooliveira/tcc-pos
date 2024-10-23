import { apiCEP } from "@/lib/axios";

export const fetchAddressByCEP = async (cep: string) => {
  const formattedCep = cep.replace(/\D/g, "");
  if (formattedCep.length !== 8) return null;
  const response = await apiCEP.get(`/${formattedCep}/json/`);
  const data = response.data;
  console.log("🚀 ~ response:", response);
  if (response.status === 200 && response.data.erro === "true") {
    return Promise.reject(response);
  } else if (response.status === 200) {
    return {
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
      country: "Brasil",
    };
  }

  return Promise.reject(response);

  // try {
  //   const response = await fetch(
  //     `https://viacep.com.br/ws/${formattedCep}/json/`
  //   );
  //   const data = await response.json();

  //   if (data.erro) {
  //     throw new Error("CEP não encontrado");
  //   }

  //   return {
  //     street: data.logradouro,
  //     neighborhood: data.bairro,
  //     city: data.localidade,
  //     state: data.uf,
  //     country: "Brasil",
  //   };
  // } catch (error) {
  //   console.error("Erro ao buscar CEP:", error);
  //   return null;
  // }
};
