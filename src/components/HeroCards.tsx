import BannerHonme from "../assets/home-banner.png";

export const HeroCards = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-8 relative w-full ">
      <img
        src={BannerHonme as unknown as any}
        className="w-full md:w-[600px] lg:w-[600px] object-contain rounded-lg"
        alt="About services"
      />
    </div>
  );
};
