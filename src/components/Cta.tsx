'use client';

import WebSystem from "@/assets/web-system.png";
import Image from "next/image";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="py-16 my-24 sm:my-32  px-8 dark:bg-neutral-900 bg-neutral-100  w-full flex justify-center dashboard-section"
    >
      <div className="container flex justify-center items-center flex-col">
        <div className="w-full md:max-w-[980px]">
          <h2 className="text-4xl text-center font-bold text-white">
            Aprendizado inteligente e prático para todos.
          </h2>
          <p className="text-white text-center text-2xl mt-4 mb-8 lg:mb-0">
            A Zypeer é um app que auxilia estudantes e professores. Estudantes têm acesso a ferramentas de IA personalizadas, simulados e organização de estudos. Já os professores, além das ferramentas, podem criar atividades impressas.
          </p>
        </div>
        <Image src={WebSystem} alt="web system" className="w-full max-w-[860px]" />
        {/* <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto" onClick={() => {
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
          }}>Baixe de graça ✨</Button>
          <a href="/#features">
            <Button
              variant="outline"
              className="w-full md:w-auto"
            >
              Ferramentas
            </Button>
          </a>

        </div> */}
      </div>
    </section>
  );
};
