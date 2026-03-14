'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./gradiantbg";
import { Globe } from "./globe";
import { useState } from "react";
import { GlobeDemo } from "./gridglobe";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie"
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from './magicbutton'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5   gap-4  lg:gap-8  mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,

  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('abdullaomi46@gmail.com');
    setCopied(true);
  }

  return (

    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 overflow-hidden relative rounded-3xl border border-white/[0.2]  transition duration-200 hover:shadow-xl   dark:shadow-none    ",
        className,
      )}
      style={{
        background: '#020024',
        backgroundColor: ' linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(40, 102, 115, 1) 42%)'
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover , object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover , object-center , w-full , h-full'}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation >
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
          </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative  md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'

        )}>
          <div className="font-sans text-sm md:text-xs lg:text-base z-10 font-extralight text-[#c1c2d3] dark:text-neutral-300">
            {description}
          </div>
          <div className=" font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
      {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-6 ">
                {['HTML', 'CSS', 'JavaScript'].map
                  ((item) => (
                    <span key={item} className=" py-2  lg:px-3 px-3 text-xs  opacity-50 lg:opacity-100  rounded-lg text-center  bg-[#10132E]">
                      {item}
                    </span>
                  ))}
                <span className="py-4 px-3 lg:py-4 lg:px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {['Node.JS', 'express.js', 'Python'].map
                  ((item) => (
                    <span key={item} className=" py-2 lg:px-3 px-3 text-xs  opacity-50 lg:opacity-100  rounded-lg text-center  bg-[#10132E]">
                      {item}
                    </span>
                  ))}

              </div>
            </div>
          )}




          
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidyMid slice',
                  }
                }}
                  isPaused={!copied}
                />
              </div>
              <MagicButton
                title={copied ? 'Email Copied' : 'Copy My Email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>

  );
};
