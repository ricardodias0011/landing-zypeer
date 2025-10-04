
import Logo from "@/assets/mini-logo.png";
import InstagramLink from "@/components/icons/instagram.svg";
import LogoLink from "@/components/icons/logo.svg";
import TikTokLink from "@/components/icons/tiktok.svg";
import WhatsappLink from "@/components/icons/whatsapp.svg";

import { Button } from "@/components/ui/button";
import { ChevronRight, Download } from "lucide-react";
export const ZypeerLinks = () => {

  const ButtonLink = (props: { icon: string, text: string, link: string }) => (
    <div className="rounded-2xl w-full" style={{
      background: 'linear-gradient(180deg, #EC75FF 64.9%, #C8A6FF 100%)',
      padding: 1,
      minWidth: 252
    }}>
      <a
        href={props.link}
        rel="noreferrer noopener"
        target="_blank"
        className={`w-full border-0! rounded-2xl flex items-center justify-between bg-[#101010] py-4 px-6 cursor-pointer`}
      >
        <img src={props.icon} alt={props.text} width={45} className="bg-[#252525] rounded-2xl border-1 border-[#EC75FF] p-2" />
        <p className="font-bold text-2xl">
          {props.text}
        </p>
        <span className="py-1 px-2 flex flex-row items-center gap-1 rounded-xl bg-gradient-to-r from-[#EC75FF] to-[#C8A6FF] text-black">
          <p className="text-sm">ACESSAR</p>
          <ChevronRight />
        </span>
      </a>
    </div>
  )

  return (
    <>
      <title>Zypeer - Links</title>
      <meta name="description" content="Aprenda e ensine de forma inovadora com Zypeer, a IA que
              personaliza seu aprendizado e transforma o ensino!" />
      <div className="bg-black text-white links-section h-full min-h-screen w-full flex items-center justify-center" id="home">
        <section className="max-w-md w-full">
          <div className="text-center space-y-6  w-full flex items-center justify-center flex-col"
            data-aos="fade-up"
          >
            <img src={Logo} alt="Zypeer Logo" width={130} />
            <main className="text-4xl font-normal">
              <h1 className="inline bg-gradient-to-r from-[#EC75FF]  to-[#C8A6FF] text-transparent bg-clip-text">
                Aprendizado
              </h1>{" "}
              {" "}
              <h2 className="flex flex-col">
                <span className="inline bg-gradient-to-r">
                  organizado
                </span>{" "}
                e eficiente
              </h2>
            </main>
            <div className="grid grid-cols-2 gap-2 w-full px-2">
              <Button
                className="w-full text-md h-11 py-3 shadow-[0px_0px_30px_0px_#ED6AFF85] hover:shadow-[0px_0px_40px_0px_#ED6AFF85] transition-shadow duration-300 ease-in-out"
                onClick={() => window.open("https://prof.zypeer.com.br", "_blank")}
              >
                Testar Grátis
              </Button>

              <div
                className="rounded-full p-[1px]"
                style={{
                  background: "linear-gradient(180deg, #EC75FF 64.9%, #C8A6FF 100%)",
                }}
              >
                <a
                  onClick={() => {
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
                  }}
                  className="flex gap-2 items-center justify-center w-full h-11 text-md rounded-full bg-[#1C1C1C] transition-all duration-300 hover:opacity-90"
                >
                  Baixar App <Download />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full px-2">
              <ButtonLink
                icon={LogoLink}
                text="NOSSO SITE"
                link="https://zypeer.com.br?o=links"
              />
              <ButtonLink
                icon={TikTokLink}
                text="TIK TOK"
                link="https://www.tiktok.com/@zypeeredu"
              />
              <ButtonLink
                icon={InstagramLink}
                text="INSTAGRAM"
                link="https://www.instagram.com/zypeeredu/"
              />
              <ButtonLink
                icon={WhatsappLink}
                text="SUPORTE"
                link="https://api.whatsapp.com/send/?phone=5574999772904&type=phone_number&app_absent=0"
              />
            </div>
          </div>

        </section>
      </div>
    </>

  );
};
