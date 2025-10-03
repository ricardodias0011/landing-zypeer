import mobile from "../assets/home.png";

export const HeroCards = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-8 relative w-[250px]  md:w-[700px] lg:w-[700px]h-[500px]">
      <img
        src={mobile as unknown as any}
        className="w-[250px] md:w-[400px] lg:w-[400px] object-contain rounded-lg"
        alt="About services"
      />
    </div>
  );
};
