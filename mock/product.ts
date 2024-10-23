import {
  ERanking,
  EStatus,
  IComment,
  IDocument,
  IImage,
  ILesson,
  IModule,
} from "@/interfaces/product";
import Nutricao from "@/public/imgSwiper/nutricao.svg";
import TreinamentoFisico from "@/public/imgSwiper/TreinamentoFisico.svg";
import Psicologia from "@/public/imgSwiper/Psicologia.svg";
import Psiquiatria from "@/public/imgSwiper/Psiquiatria.svg";
import Hipnoterapia from "@/public/imgSwiper/Hipnoterapia.svg";
import swiper1 from "@/public/imgSwiper/1.svg";
import swiper2 from "@/public/imgSwiper/2.svg";
import swiper3 from "@/public/imgSwiper/3.svg";
import swiper4 from "@/public/imgSwiper/4.svg";
import swiper5 from "@/public/imgSwiper/5.svg";
import card_apresentation from "@/public/img/card_apresentation.svg";
import playPlayer from "@/public/playPlayer.svg";
import pausePlayer from "@/public/pausePlayer.svg";

export const MOCK_IMAGES: IImage[] = [
  {
    id: "1",
    title: "thumb",
    url: Nutricao,
  },
  {
    id: "2",
    title: "thumb",
    url: TreinamentoFisico,
  },
  {
    id: "3",
    title: "thumb",
    url: Psicologia,
  },
  {
    id: "4",
    title: "thumb",
    url: Psiquiatria,
  },
  {
    id: "5",
    title: "thumb",
    url: Hipnoterapia,
  },
  {
    id: "6",
    title: "avatar",
    url: card_apresentation,
  },
  {
    id: "7",
    title: "playPlayer",
    url: playPlayer,
  },
  {
    id: "8",
    title: "pausePlayer",
    url: pausePlayer,
  },
];

export const MOCK_DOCUMENTS: IDocument[] = [
  {
    id: "1",
    title: "E-BOOK",
    type: "E-BOOK",
    size: "2mb",
    url: "https://www.google.com.br",
    image: {
      id: "1",
      title: "E-BOOK",
      url: "https://images.unsplash.com/photo-1683645589797-f3c9e8e7f6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: "2",
    title: "AUDIOBOOK",
    type: "AUDIOBOOK",
    size: "2mb",
    url: "https://www.google.com.br",
    image: {
      id: "1",
      title: "AUDIOBOOK",
      url: "https://images.unsplash.com/photo-1683645589797-f3c9e8e7f6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
];

export const MOCK_COMMENTS: IComment[] = [
  {
    id: "1",
    title: "Marcelo Souza",
    avatar: {
      id: "1",
      title: "avatar",
      url: "https://images.unsplash.com/photo-1683645589797-f3c9e8e7f6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    message:
      "Estou gostando bastante dos conteúdos. As aulas são completas e estão me ajudando muito a alcançar meus objetivos de emagrecimento de forma sustentável. Recomendo para todos que querem melhorar a saúde e o bem-estar.",
  },
];

export const MOCK_CERTIFICATION: IDocument[] = [
  {
    id: "1",
    title: "Certificado - iniciante",
    type: "CERTIFICATE",
    size: "2mb",
    url: "https://www.google.com.br",
    image: {
      id: "1",
      title: "CERTIFICATE",
      url: "https://images.unsplash.com/photo-1683645589797-f3c9e8e7f6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: "2",
    title: "Certificado - metodologia",
    type: "CERTIFICATE",
    size: "2mb",
    url: "https://www.google.com.br",
    image: {
      id: "2",
      title: "CERTIFICATE",
      url: "https://images.unsplash.com/photo-1683645589797-f3c9e8e7f6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
];

export const MOCK_LESSONS: ILesson[] = [
  {
    id: "1",
    title: "sua jornada começa aqui",
    thumbnail: MOCK_IMAGES[0],
    avatar: MOCK_IMAGES[1],
    status: EStatus.completed,
    time: "11:50",
    timeTotal: "100%",
    percent: 100,
    launchDate: "10/07/2024",
    module: "apresentação",
    description:
      "Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.Perder peso de forma sustentável é um desafio para muitas pessoas, mas é possível alcançar esse objetivo com determinação e foco. A chave para um emagrecimento saudável e duradouro está em adotar hábitos alimentares equilibrados, praticar atividades físicas regularmente e manter a motivação ao longo do processo. Além disso, buscar o apoio de profissionais, como nutricionistas e educadores físicos, pode ser fundamental para alcançar os objetivos de forma saudável e sustentável.Lembre-se, emagrecer não se trata apenas de perder peso rapidamente, mas sim de promover mudanças positivas no estilo de vida que irão beneficiar sua saúde a longo prazo.",
    documents: MOCK_DOCUMENTS,
    comments: MOCK_COMMENTS,
    like: true,
  },
  {
    id: "2",
    title: "O que é emagrecimento sustentável?",
    thumbnail: MOCK_IMAGES[1],
    avatar: MOCK_IMAGES[5],
    status: EStatus.started,
    time: "11:50",
    timeTotal: "100%",
    percent: 100,
    launchDate: "10/07/2024",
    module: "Emagrecimento sustentável ",
    description:
      "Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.Perder peso de forma sustentável é um desafio para muitas pessoas, mas é possível alcançar esse objetivo com determinação e foco. A chave para um emagrecimento saudável e duradouro está em adotar hábitos alimentares equilibrados, praticar atividades físicas regularmente e manter a motivação ao longo do processo. Além disso, buscar o apoio de profissionais, como nutricionistas e educadores físicos, pode ser fundamental para alcançar os objetivos de forma saudável e sustentável.Lembre-se, emagrecer não se trata apenas de perder peso rapidamente, mas sim de promover mudanças positivas no estilo de vida que irão beneficiar sua saúde a longo prazo.",
    documents: MOCK_DOCUMENTS,
    comments: MOCK_COMMENTS,
    like: true,
  },
  {
    id: "3",
    title: "Metodologia",
    thumbnail: MOCK_IMAGES[2],
    avatar: MOCK_IMAGES[5],
    status: EStatus.NotStarted,
    time: "11:50",
    timeTotal: "100%",
    percent: 100,
    launchDate: "10/07/2024",
    module: "Emagrecimento sustentável ",
    description:
      "Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.Perder peso de forma sustentável é um desafio para muitas pessoas, mas é possível alcançar esse objetivo com determinação e foco. A chave para um emagrecimento saudável e duradouro está em adotar hábitos alimentares equilibrados, praticar atividades físicas regularmente e manter a motivação ao longo do processo. Além disso, buscar o apoio de profissionais, como nutricionistas e educadores físicos, pode ser fundamental para alcançar os objetivos de forma saudável e sustentável.Lembre-se, emagrecer não se trata apenas de perder peso rapidamente, mas sim de promover mudanças positivas no estilo de vida que irão beneficiar sua saúde a longo prazo.",
    documents: MOCK_DOCUMENTS,
    comments: MOCK_COMMENTS,
    like: true,
  },
  {
    id: "4",
    title: "Como chegar aos objetivos?",
    thumbnail: MOCK_IMAGES[3],
    avatar: MOCK_IMAGES[5],
    status: EStatus.soon,
    time: "11:50",
    timeTotal: "100%",
    percent: 100,
    launchDate: "10/07/2024",
    module: "Emagrecimento sustentável ",
    description:
      "Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.Perder peso de forma sustentável é um desafio para muitas pessoas, mas é possível alcançar esse objetivo com determinação e foco. A chave para um emagrecimento saudável e duradouro está em adotar hábitos alimentares equilibrados, praticar atividades físicas regularmente e manter a motivação ao longo do processo. Além disso, buscar o apoio de profissionais, como nutricionistas e educadores físicos, pode ser fundamental para alcançar os objetivos de forma saudável e sustentável.Lembre-se, emagrecer não se trata apenas de perder peso rapidamente, mas sim de promover mudanças positivas no estilo de vida que irão beneficiar sua saúde a longo prazo.",
    documents: MOCK_DOCUMENTS,
    comments: MOCK_COMMENTS,
    like: true,
  },
  {
    id: "5",
    title: "3 passos práticos para o emagrecimento",
    thumbnail: MOCK_IMAGES[4],
    avatar: MOCK_IMAGES[5],
    status: EStatus.soon,
    time: "11:50",
    timeTotal: "100%",
    percent: 100,
    launchDate: "10/07/2024",
    module: "Emagrecimento sustentável ",
    description:
      "Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.Perder peso de forma sustentável é um desafio para muitas pessoas, mas é possível alcançar esse objetivo com determinação e foco. A chave para um emagrecimento saudável e duradouro está em adotar hábitos alimentares equilibrados, praticar atividades físicas regularmente e manter a motivação ao longo do processo. Além disso, buscar o apoio de profissionais, como nutricionistas e educadores físicos, pode ser fundamental para alcançar os objetivos de forma saudável e sustentável.Lembre-se, emagrecer não se trata apenas de perder peso rapidamente, mas sim de promover mudanças positivas no estilo de vida que irão beneficiar sua saúde a longo prazo.",
    documents: MOCK_DOCUMENTS,
    comments: MOCK_COMMENTS,
    like: true,
  },
  {
    id: "6",
    title: "Principais alimentos sustentáveis",
    thumbnail: MOCK_IMAGES[0],
    avatar: MOCK_IMAGES[5],
    status: EStatus.soon,
    time: "11:50",
    timeTotal: "100%",
    percent: 100,
    launchDate: "10/07/2024",
    module: "Emagrecimento sustentável ",
    description:
      "Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.Perder peso de forma sustentável é um desafio para muitas pessoas, mas é possível alcançar esse objetivo com determinação e foco. A chave para um emagrecimento saudável e duradouro está em adotar hábitos alimentares equilibrados, praticar atividades físicas regularmente e manter a motivação ao longo do processo. Além disso, buscar o apoio de profissionais, como nutricionistas e educadores físicos, pode ser fundamental para alcançar os objetivos de forma saudável e sustentável.Lembre-se, emagrecer não se trata apenas de perder peso rapidamente, mas sim de promover mudanças positivas no estilo de vida que irão beneficiar sua saúde a longo prazo.",
    documents: MOCK_DOCUMENTS,
    comments: MOCK_COMMENTS,
    like: true,
  },
  {
    id: "7",
    title: "7 dicas para se manter focado",
    thumbnail: MOCK_IMAGES[1],
    avatar: MOCK_IMAGES[5],
    status: EStatus.soon,
    time: "11:50",
    timeTotal: "100%",
    percent: 100,
    launchDate: "10/07/2024",
    module: "Emagrecimento sustentável ",
    description:
      "Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.Perder peso de forma sustentável é um desafio para muitas pessoas, mas é possível alcançar esse objetivo com determinação e foco. A chave para um emagrecimento saudável e duradouro está em adotar hábitos alimentares equilibrados, praticar atividades físicas regularmente e manter a motivação ao longo do processo. Além disso, buscar o apoio de profissionais, como nutricionistas e educadores físicos, pode ser fundamental para alcançar os objetivos de forma saudável e sustentável.Lembre-se, emagrecer não se trata apenas de perder peso rapidamente, mas sim de promover mudanças positivas no estilo de vida que irão beneficiar sua saúde a longo prazo.",
    documents: MOCK_DOCUMENTS,
    comments: MOCK_COMMENTS,
    like: true,
  },
  {
    id: "8",
    title: "Criando minha rotina saudável",
    thumbnail: MOCK_IMAGES[2],
    avatar: MOCK_IMAGES[5],
    status: EStatus.soon,
    time: "11:50",
    timeTotal: "100%",
    percent: 100,
    launchDate: "10/07/2024",
    module: "Emagrecimento sustentável ",
    description:
      "Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.Perder peso de forma sustentável é um desafio para muitas pessoas, mas é possível alcançar esse objetivo com determinação e foco. A chave para um emagrecimento saudável e duradouro está em adotar hábitos alimentares equilibrados, praticar atividades físicas regularmente e manter a motivação ao longo do processo. Além disso, buscar o apoio de profissionais, como nutricionistas e educadores físicos, pode ser fundamental para alcançar os objetivos de forma saudável e sustentável.Lembre-se, emagrecer não se trata apenas de perder peso rapidamente, mas sim de promover mudanças positivas no estilo de vida que irão beneficiar sua saúde a longo prazo.",
    documents: MOCK_DOCUMENTS,
    comments: MOCK_COMMENTS,
    like: true,
  },
  {
    id: "9",
    title: "Como progredir os resultados?",
    thumbnail: MOCK_IMAGES[3],
    avatar: MOCK_IMAGES[5],
    status: EStatus.soon,
    time: "11:50",
    timeTotal: "100%",
    percent: 100,
    launchDate: "10/07/2024",
    module: "Emagrecimento sustentável ",
    description:
      "Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.Perder peso de forma sustentável é um desafio para muitas pessoas, mas é possível alcançar esse objetivo com determinação e foco. A chave para um emagrecimento saudável e duradouro está em adotar hábitos alimentares equilibrados, praticar atividades físicas regularmente e manter a motivação ao longo do processo. Além disso, buscar o apoio de profissionais, como nutricionistas e educadores físicos, pode ser fundamental para alcançar os objetivos de forma saudável e sustentável.Lembre-se, emagrecer não se trata apenas de perder peso rapidamente, mas sim de promover mudanças positivas no estilo de vida que irão beneficiar sua saúde a longo prazo.",
    documents: MOCK_DOCUMENTS,
    comments: MOCK_COMMENTS,
    like: true,
  },
];

export const MOCK_MODULES: IModule[] = [
  {
    created_at: new Date(),
    id: "1",
    title: "NUTRIÇÃO",
    subTitle: "APRESENTAÇÃO",
    description:
      "Boas Vindas - description - Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.",
    isHighlight: false,
    number_of_lessons: 1,
    percent: 100,
    ranking: ERanking.gold,
    lessons: [MOCK_LESSONS[0]],
    completed: true,
    certification: MOCK_CERTIFICATION[0],
    location: Nutricao,
    color: "#F41D1D",
  },
  {
    created_at: new Date(),
    id: "2",
    title: "TREINAMENTO FÍSICO",
    subTitle: "MODULO 1",
    description:
      "Emagrecimento sustentável - description - Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.",
    isHighlight: true,
    number_of_lessons: 8,
    percent: 35,
    ranking: ERanking.bronze,
    lessons: [
      MOCK_LESSONS[1],
      MOCK_LESSONS[2],
      MOCK_LESSONS[3],
      MOCK_LESSONS[4],
      MOCK_LESSONS[5],
      MOCK_LESSONS[6],
      MOCK_LESSONS[7],
      MOCK_LESSONS[8],
    ],
    completed: false,
    certification: undefined,
    location: TreinamentoFisico,

    color: "#F46F1D",
  },
  {
    created_at: new Date(),
    id: "3",
    title: "PSICOLOGIA",
    subTitle: "MODULO 1",
    description:
      "Emagrecimento facial - description - Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.",
    isHighlight: true,
    number_of_lessons: 12,
    percent: 0,
    ranking: ERanking.notStarted,
    lessons: [
      MOCK_LESSONS[1],
      MOCK_LESSONS[2],
      MOCK_LESSONS[3],
      MOCK_LESSONS[4],
      MOCK_LESSONS[5],
      MOCK_LESSONS[6],
      MOCK_LESSONS[7],
      MOCK_LESSONS[8],
    ],
    completed: false,
    certification: undefined,
    location: Psicologia,
    color: "#F41D73",
  },
  {
    created_at: new Date(),
    id: "4",
    title: "PSIQUIATRIA",
    subTitle: "MODULO 1",
    description:
      "Emagrecimento avançado - description - Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.",
    isHighlight: true,
    number_of_lessons: 10,
    percent: 0,
    ranking: ERanking.notStarted,
    lessons: [
      MOCK_LESSONS[1],
      MOCK_LESSONS[2],
      MOCK_LESSONS[3],
      MOCK_LESSONS[4],
      MOCK_LESSONS[5],
      MOCK_LESSONS[6],
      MOCK_LESSONS[7],
      MOCK_LESSONS[8],
    ],
    completed: false,
    certification: undefined,
    location: Psiquiatria,
    color: "#C3DB10",
  },
  {
    created_at: new Date(),
    id: "5",
    title: "HIPNOTERIA",
    subTitle: "Considerações finais",
    description:
      "Próximos desafios- description - Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.",
    isHighlight: true,
    number_of_lessons: 1,
    percent: 0,
    ranking: ERanking.notStarted,
    lessons: [
      MOCK_LESSONS[1],
      MOCK_LESSONS[2],
      MOCK_LESSONS[3],
      MOCK_LESSONS[4],
      MOCK_LESSONS[5],
      MOCK_LESSONS[6],
      MOCK_LESSONS[7],
      MOCK_LESSONS[8],
    ],
    completed: false,
    certification: undefined,
    location: Hipnoterapia,
    color: "#C8870F",
  },
  {
    created_at: new Date(),
    id: "6",
    title: "baixe seu certificado ao concluir o curso",
    subTitle: "certificado",
    description:
      "baixe seu certificado ao concluir o curso - description - Nossa metodologia de emagrecimento sustentável se baseia na adoção de hábitos saudáveis e equilibrados, combinando uma alimentação adequada com a prática regular de exercícios físicos. Acreditamos que a chave para o sucesso está em manter a motivação ao longo do processo e buscar o suporte de profissionais especializados, como nutricionistas e educadores físicos. Em nosso curso, enfatizamos a importância de promover mudanças positivas no estilo de vida, visando benefícios duradouros para a saúde a longo prazo.",
    isHighlight: false,
    number_of_lessons: 1,
    percent: 0,
    ranking: ERanking.notStarted,
    lessons: [MOCK_LESSONS[8]],
    completed: false,
    certification: undefined,
    location: Hipnoterapia,
    color: "#C8870F",
  },
];
