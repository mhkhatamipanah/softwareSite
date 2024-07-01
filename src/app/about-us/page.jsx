import img1 from "@/assets/images/2.png";
import Image from "next/image";

const Page = () => {
  return (
    <section className="w-full flex justify-center  md:h-[calc(100vh-80px)] ">
      <div className="grid grid-cols-2 max-w-[1500px] w-full px-8 gap-8">
        <div className="col-span-2 md:col-span-1 w-full h-full pt-10 lg:pt-36">
          <Image src={img1} alt="about-us Image" />
        </div>
        <div className="col-span-2 md:col-span-1 w-full h-full pt-10 lg:pt-36 reverse-order">
          <h1 className="text-2xl sm:text-5xl md:text-4xl xl:text-6xl 2xl:text-7xl text-[#644099] font2  2xl:leading-[90px] xl:leading-[90px] mt-6 md:mt-8 xl:mt-12 2xl:mt-20">
          About Us
          </h1>
          <p className="text-md sm:text-lg xl:text-xl 2xl:text-2xl mt-3 md:mt-5 lg:mt-7 !leading-9 font3 text-gray-800">
       Custom Software Production is a company specializing in the development and delivery of bespoke software solutions for organizations. We focus on creating software that specifically meets the unique needs and goals of each organization, establishing ourselves as a trusted partner in software development and implementation projects. Our team possesses extensive technical capabilities and adheres to the highest development standards and processes, ensuring the design and implementation of high-quality software solutions.
          </p>
        
        </div>

      </div>
    </section>
  )
}

export default Page