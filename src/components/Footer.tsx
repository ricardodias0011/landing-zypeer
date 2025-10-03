


import Logo from "@/assets/LOGO.png";
import Kwai from "@/assets/video.png";
import { ChevronRight } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center footer pt-20"
    >
      <footer id="footer" className="container" >
        <div className="flex w-full items-center justify-center">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <img src={Logo} alt="Logo" className="lucide lucide-panels-top-left mr-2 w-50 mt-1" />
          </a>
        </div>
        <section className="container py-20 flex flex-row flex-wrap justify-start md:justify-center gap-30 px-4" >
          <div className="flex flex-col gap-2">
            <h3 className="inline bg-gradient-to-b from-[#EC75FF]  to-[#C8A6FF] text-transparent bg-clip-text text-3xl font-bold">
              Siga-nos
            </h3>
            <div>
              <a
                rel="noreferrer noopener"
                href="https://www.instagram.com/zypeeredu/"
                target="_blank"
                className="flex flex-row items-center gap-2 hover:opacity-100"
              >
                <FaInstagram color="#EC75FF" />
                Instagram
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="https://www.tiktok.com/@zypeeredu"
                target="_blank"
                className="flex flex-row items-center gap-2 hover:opacity-100"
              >
                <FaTiktok color="#EC75FF" />
                TikTok
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="https://www.kwai.com/@zypeeredu"
                target="_blank"
                className="flex flex-row items-center gap-2 hover:opacity-100"
              >
                <img src={Kwai} width={20} />
                Kwai
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="inline bg-gradient-to-b from-[#EC75FF]  to-[#C8A6FF] text-transparent bg-clip-text text-3xl font-bold">
              Plataformas
            </h3>
            <div>
              <a
                rel="noreferrer noopener"
                href="https://prof.zypeer.com.br"
                target="_blank"
                className="flex flex-row gap-2 hover:opacity-100"
              >
                <ChevronRight color="#EC75FF" />
                Professores
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="https://chat.zypeer.com.br"
                target="_blank"
                className="flex flex-row gap-2 hover:opacity-100"
              >
                <ChevronRight color="#EC75FF" />
                Chat Zypeer
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="https://edu.zypeer.com.br"
                target="_blank"
                className="flex flex-row gap-2 hover:opacity-100"
              >
                <ChevronRight color="#EC75FF" />
                Alunos Web | IOS
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="https://play.google.com/store/apps/details?id=com.zypeertech.zypeeredu"
                target="_blank"
                className="flex flex-row gap-2 hover:opacity-100"
              >
                <ChevronRight color="#EC75FF" />
                Alunos Android
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="inline bg-gradient-to-b from-[#EC75FF]  to-[#C8A6FF] text-transparent bg-clip-text text-3xl font-bold">
              Sobre
            </h3>
            <div>
              <a
                rel="noreferrer noopener"
                href="#features"
                className="flex flex-row gap-2 hover:opacity-100"
              >
                <ChevronRight color="#EC75FF" />
                Ferramentas e recursos
              </a>
            </div>

            <div>
              <a
                rel="noreferrer noopener"
                href="#pricing"
                className="flex flex-row gap-2 hover:opacity-100"
              >
                <ChevronRight color="#EC75FF" />
                Preço
              </a>
            </div>

            <div>
              <a
                rel="noreferrer noopener"
                href="#faq"
                className="flex flex-row gap-2 hover:opacity-100"
              >
                <ChevronRight color="#EC75FF" />
                FAQ
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="/edu/privacy-policy"
                className="flex flex-row gap-2 hover:opacity-100"
              >
                <ChevronRight color="#EC75FF" />
                Política de Privacidade
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="/edu/liability-policy"
                className="flex flex-row gap-2 hover:opacity-100"
              >
                <ChevronRight color="#EC75FF" />
                Termo de responsabilidade
              </a>
            </div>
          </div>
        </section>

        <section className="container pb-14 text-center">
          <h3>
            &copy; {new Date().getFullYear()} Todos os direitos reservados {" "}
            <a
              href="#"
              className="text-primary transition-all border-primary hover:border-b-2"
            >
              Zypeer tecnologia
            </a>
          </h3>
        </section>
      </footer>
    </div>
  );
};
