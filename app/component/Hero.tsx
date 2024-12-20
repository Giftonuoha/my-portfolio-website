import Link from "next/link"
import TextEffect from "./TextEffect"
import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { FaLocationArrow } from "react-icons/fa"

const Hero = () => {
  return (
    <div className="pb-20  overflow-hidden w-full  flex flex-col justify-center items-center">
      {/* Spot Light Area */}
      <div className=" w-full">
        <Spotlight className="-top-40 " fill="#D1D1AD"/>
        <Spotlight className="top-10" fill="#5B738B"/>
        <Spotlight className="top-20" fill="#D1D1AD"/>
       </div>
       {/* Text Generation Animation Effect Area */}
       <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center text-center justify-center ">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl items-center"
            words="Transforming Ideas Into Seamless User Experiences"
          />
          <div className="">
            <p className="text-center md:tracking-wider mb-8 lg:mb-6 text-sm md:text-lg lg:text-2xl text-mutedBlue ">
              Hi!, I&apos;m Gift,
              <span className="ml-4">
              <TextEffect/>
              </span>
            </p>

            <Link href="#About">
            <MagicButton
              title="Explore my work"
              icon={<FaLocationArrow/>}
              position="right"
            />
            </Link>
          </div>
       </div>
    </div> 
  )
}

export default Hero