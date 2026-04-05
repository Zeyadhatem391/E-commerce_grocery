import Image from "next/image";
import BgHero from "@/assets/images/herobg.png";
import HeroImage from "@/assets/images/heroimg.png";

export default function Hero() {
  return (
    <div className="relative w-full lg:h-[71vh] md:h-[50vh] pb-10">
      <Image src={BgHero} alt="hero" fill className="object-cover" />
      <div className="absolute inset-0 bg-[#014162F2]"></div>
      <div className="relative flex md:flex-row flex-col-reverse h-full items-start justify-between text-white">
        <div className="lg:ps-24 md:ps-16 px-2  flex flex-col items-start self-center">
          <h1 className="md:text-3xl lg:text-6xl text-2xl md:w-10/12 w-full font-bold mb-4">
            Don’t miss our daily amazing deals.
          </h1>
          <p className="text-lg mb-6">Save up to 60% off on your first order</p>
          <button className="rounded-lg bg-[#D9D9D9] px-15 py-3 text-black cursor-pointer">
            Shop Now
          </button>
        </div>
        <Image
          className="w-auto h-full self-end"
          src={HeroImage}
          alt="hero"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
