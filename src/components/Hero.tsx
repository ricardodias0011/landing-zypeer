
import Logo from "@/assets/LOGO.png";
import { HeroCards } from "./HeroCards";
import { Button } from "./ui/button";
export const Hero = () => {
  return (
    <>
      <div className="mt-[40px] hero-section min-h-fit md:min-h-[100vh] w-full flex items-center justify-center" id="home">
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 px-4  w-full">
          <div className="text-center lg:text-start space-y-6  w-full" data-aos="fade-right">
            <main className="text-5xl md:text-6xl font-bold">
              <img src={Logo} alt="Zypeer Logo" width={200} className="hidden md:block" />
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

            <p className="text-2xl md:w-10/12  mx-auto lg:mx-0">
              Aprenda e ensine de forma inovadora com Zypeer, a IA que
              personaliza seu aprendizado e transforma o ensino!
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-2 flex flex-row gap-1 flex-wrap">
              <Button
                className="w-full md:w-1/3 text-md py-3 h-11 shadow-[0px_0px_30px_0px_#ED6AFF85] hover:shadow-[0px_0px_40px_0px_#ED6AFF85] transition-shadow duration-300 ease-in-out"
                onClick={() => {
                  window.open("https://prof.zypeer.com.br", "_blank")
                }}
              >
                Testar Grátis
              </Button>
              <div className="rounded-full w-full md:w-1/3" style={{
                background: 'linear-gradient(180deg, #EC75FF 64.9%, #C8A6FF 100%)',
                padding: 1,
                minWidth: 252
              }}>
                <a
                  href="#features"
                  className={`w-full md:w-1/3 text-md border-0! rounded-full flex items-center justify-center bg-[#1C1C1C] h-11! px-4! py-2! cursor-pointer`}
                  style={{
                    minWidth: 250
                  }}
                >
                  Conheça os recursos
                </a>
              </div>
            </div>
          </div>

          {/* Hero cards sections */}
          <div className="z-10" data-aos="fade-left">
            <HeroCards />
          </div>
        </section>
      </div>
    </>

  );
};
