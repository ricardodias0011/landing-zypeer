import image5 from "../assets/screens/apps.png";
import image4 from "../assets/screens/chat.png";
import image1 from "../assets/screens/simulateds.jpg";
import image6 from "../assets/screens/slides.png";
import image2 from "../assets/screens/spaces.jpg";
import image3 from "../assets/screens/tasks.jpg";

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.css';
// @ts-ignore
import 'swiper/css/navigation';

interface FeatureProps {
  title: string;
  description: string;
  image: any;
}

const features: FeatureProps[] = [
  {
    title: "Simulados",
    description:
      "Gerar e Responder diversos simulados do enem e outros de graça.",
    image: image1,
  },
  {
    title: "Ferramentas IA",
    description:
      "Atividades, Plano de aula/estudo, Correção de questões, Gerar imagem, Mapa mental e Muito mais.",
    image: image5,
  },
  {
    title: "Slides",
    description:
      "Desenvolva apresentações em segundos com a nossa Inteligência Artificial.",
    image: image6,
  },
  {
    title: "Chat",
    description:
      "Chat com 8 IAs personalizados para te ajudar nas suas atividades diárias.",
    image: image4,
  },
  {
    title: "Espaços",
    description:
      "Crie espaços de estudo, salve seus materiais e compartilhe com facilidade.",
    image: image2,
  },
  {
    title: "Tarefas",
    description:
      "Crie tarefas To-Do com IA, otimizando seu aprendizado ou ensino.",
    image: image3,
  }
];

// const featureList: string[] = [
//   "Plano de aula/estudo",
//   "Gerar simulados",
//   "Correção de questões",
//   "Analise de redação",
//   "Gerar imagem",
//   "Resumir assunto",
//   "Digitalizar imagem ou documento",
//   "Gerar slides",
//   "E muito mais"
// ];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8  px-4 md:px-8"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <h2 className="text-3xl lg:text-4xl font-bold">
        Nossas {" "}
        <span className="bg-gradient-to-bl from-fuchsia-400/90 to-fuchsia-400 text-transparent bg-clip-text">
          Ferramentas
        </span>
        {" "}  e {" "}
        <span className="bg-gradient-to-bl from-fuchsia-400/90 to-fuchsia-400 text-transparent bg-clip-text">
          recursos
        </span>
      </h2>

      {/* <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm text-zinc-800 dark:text-zinc-200"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

      <div className="flex w-full">
        <Swiper
          slidesPerView={"auto"}
          navigation={true}
          spaceBetween={1}
          modules={[Navigation]}>
          {features.map(({ title, description, image }: FeatureProps) => (
            <SwiperSlide className="max-w-[350px] p-3">
              <div
                className="min-h-[600px] w-full border border-fuchsia-400 rounded-xl relative overflow-hidden max-w-[350px]  hover:shadow-[0px_0px_20px_0px_#ED6AFF85] transition-shadow duration-300 ease-in-out">
                <div className="absolute bottom-10 w-full z-30 flex flex-col items-center justify-center gap-2 px-4">
                  <h3 className="inline bg-gradient-to-b from-[#EC75FF]  to-[#C8A6FF] text-transparent bg-clip-text text-center text-3xl font-bold">
                    {title}
                  </h3>
                  <p className="text-center">{description}</p>
                </div>
                <div
                  className="absolute w-full h-full z-20"
                  style={{
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.95) 77.59%)"
                  }}
                />
                <img
                  src={image}
                  alt="About feature"
                  className="w-full h-full absolute object-cover rounded-lg opacity-45"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(({ title, description, image }: FeatureProps) => (
          <div
            className="min-h-[600px] w-full border border-fuchsia-400 rounded-xl relative overflow-hidden">
            <div className="absolute bottom-10 w-full z-30 flex flex-col items-center justify-center gap-2 px-4">
              <h3 className="inline bg-gradient-to-b from-[#EC75FF]  to-[#C8A6FF] text-transparent bg-clip-text text-center text-3xl font-bold">
                {title}
              </h3>
              <p className="text-center">{description}</p>
            </div>
            <div
              className="absolute w-full h-full z-20"
              style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.80) 77.59%)"
              }}
            />
            <img
              src={image}
              alt="About feature"
              className="w-full h-full absolute object-cover rounded-lg opacity-20"
            />
          </div>
        ))}
      </div> */}
    </section>
  );
};
