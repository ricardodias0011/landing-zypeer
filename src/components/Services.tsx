
import GoogleApp from "@/assets/google-play.png";
import type { JSX } from "react";
import mobile from "../assets/mobile.png";
import { ChartIcon, MagnifierIcon, WalletIcon } from "./Icons";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Facil e simples",
    description:
      "Uma experiência fácil e intuitiva, projetada para otimizar seu tempo e esforço, tornando cada tarefa mais eficiente e prazerosa.",
    icon: <ChartIcon />,
  },
  {
    title: "Cabe no seu bolso",
    description:
      "Foi criado para ser fácil, simples e acessível, proporcionando uma experiência sem complicações e ao seu alcance.",
    icon: <WalletIcon />,
  },

  {
    title: "Tarefas automatizadas",
    description:
      "Aprendizado automatizado, como mágica, a zypeer transforma seu processo de estudo em algo ágil e eficiente.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section id="app-mobile" className="relative container py-24 sm:py-32 flex px-4 md:px-8">
      <div className="shadow-effect" />
      <div className="flex flex-row gap-10 justify-center md:justify-between items-center flex-wrap w-full z-10" >
        <div className="flex flex-col md:basis-1/2 w-full" data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <h3 className="inline bg-gradient-to-r from-[#EC75FF]  to-[#C8A6FF] text-transparent text-center md:text-start bg-clip-text text-4xl font-bold">
            Aplicativo moderno
          </h3>
          <p className=" text-xl mt-4 mb-8 max-w-md text-center md:text-start">
            Um app moderno com uma interface inovadora, simples e mágica.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title} className="hover:shadow-[0px_0px_40px_0px_#ED6AFF40] transition-shadow duration-300 ease-in-out">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-fuchsia-400 p-1 rounded-2xl fill-black">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-sm mt-2 text-white">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        <div data-aos="fade-left" className="flex flex-col items-center">
          <img
            src={mobile as unknown as any}
            className="w-[300px] md:w-[400px] lg:w-[400px] object-contain rounded-lg"
            alt="About services"
          />
          <button className="mt-4 cursor-pointer" onClick={() => {
            const ua = navigator.userAgent || navigator.vendor;

            const isIOS = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;

            if (isIOS) {
              window.open(
                "https://edu.zypeer.com.br/app/simulated?page=explore",
                "_blank"
              );
            } else {
              window.open("https://play.google.com/store/apps/details?id=com.zypeertech.zypeeredu", "_blank")
            }
          }}>
            <img src={GoogleApp} alt="Google Play App" width={250} />
          </button>
          {/* <Button
            className="w-full text-md py-3 h-11 mt-4  flex items-center gap-2 shadow-[0px_0px_30px_0px_#ED6AFF85] hover:shadow-[0px_0px_40px_0px_#ED6AFF85] transition-shadow duration-300 ease-in-out"
            onClick={() => {
              window.open("#features")
            }}
          >
            <p>Quero conhecer </p><GoArrowUpRight size={20} />
          </Button> */}

        </div>
      </div>
    </section>
  );
};
