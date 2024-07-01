import Image from "next/image";
import img1 from "@/assets/images/1.png";
export default function Home() {
  return (
    <>
      <section className="w-full flex justify-center  md:h-[calc(100vh-80px)] ">
        <div className="grid grid-cols-2 max-w-[1500px] w-full px-8 ">
          <div className="col-span-2 md:col-span-1 w-full h-full pt-10 lg:pt-36 reverse-order">
            <h1 className="text-2xl sm:text-5xl md:text-4xl xl:text-6xl 2xl:text-7xl text-[#644099] font2  2xl:leading-[90px] xl:leading-[90px] mt-6 md:mt-8 xl:mt-12 2xl:mt-20">
              Custom Software Production
            </h1>
            <p className="text-md sm:text-lg xl:text-xl 2xl:text-2xl mt-3 md:mt-5 lg:mt-7 leading-9 font3 text-gray-800">
              {" "}
              Custom software production for tailored enterprise solutions. We
              create bespoke and specialized applications to enhance efficiency
              and drive growth
            </p>
              <button className="text-white bg-gradient-to-r from-[#8967ad] via-[#7e5ba6] to-[#644097] transition-all focus:ring-4 focus:ring-purple-300 font-medium rounded-[40px] px-6 py-3 text-center mr-2 mb-2 mt-7 font1 text-md sm:text-xl md:text-2xl">
                About Us
              </button>
          </div>
          <div className="col-span-2 md:col-span-1 w-full h-full pt-10 lg:pt-36">
            <Image src={img1} alt="Home Image" />
          </div>
        </div>
      </section>
    </>
  );
}
