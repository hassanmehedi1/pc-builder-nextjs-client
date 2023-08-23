import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        <div className="w-full h-full flex flex-col justify-center pl-16">
          <h2 className="text-4xl font-bold font-mono text-gray-700 ">
            Want To Build Your <br /> DREAM PC?
          </h2>
          <p className="text-gray-500">
            Ready to bring your dream PC to life? Imagine a powerhouse machine,
            meticulously tailored to your needs and desires. From the
            lightning-fast processors that make multitasking a breeze, to the
            graphics cards that transport you into immersive worlds, every
            component is a piece of the puzzle. At PC Builder, we are not just
            selling PC parts, we are offering you the chance to create a
            masterpiece, a digital canvas where speed, performance, and style
            unite!
          </p>
          <button className="my-4 text-left">
            <Link
              className="px-5 py-1 bg-[#00bfff] text-white rounded"
              href="/pc-builder"
            >
              PC Builder
            </Link>
          </button>
        </div>
        <div>
          <Image
            src="/pc.jpg"
            width={100}
            height={100}
            layout="responsive"
            alt="banner/img"
          ></Image>
        </div>
      </main>
    </div>
  );
};

export default Banner;
