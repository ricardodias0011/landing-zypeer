'use client';


import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="py-16 my-24 sm:my-32  px-8 dark:bg-neutral-900 bg-neutral-100  w-full flex justify-center"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-3xl font-bold ">
            Aprendizado
            <span className="bg-gradient-to-bl from-fuchsia-400/50 to-fuchsia-400 text-transparent bg-clip-text">
              {" "}
              inteligente e prático {" "}
            </span>
            para todos.
          </h2>
          <p className="dark:text-zinc-400 text-zinc-500 text-md mt-4 mb-8 lg:mb-0">
            A Zypeer é um app que auxilia estudantes e professores. Estudantes têm acesso a ferramentas de IA personalizadas, simulados e organização de estudos. Já os professores, além das ferramentas, podem criar atividades impressas.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
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

        </div>
      </div>
    </section>
  );
};
