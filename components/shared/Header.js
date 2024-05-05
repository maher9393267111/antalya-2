import HeaderSummary from "./HeaderSummary"
import Image from "next/image"
import diagonal from '../../public/wave.svg'
import { motion } from "framer-motion"
import { fadeIn } from "./Variant"


const   Header =({title, description, image, children, summaryText, cutout, styles}) => {
  return (
    <div className={`bg-${image} ${image != 'home' && 'mt-16'} ${styles} bg-cover bg-center text-center pt-[182px] pb-[154px] px-[5%] lg:pt-[180px] lg:pb-[220px] relative`}>
  
      <div className={`z-30 relative ${image === 'home' ? 'flex flex-col items-start justify-start max-w-[550px] lg:left-20 -top-14' : ''}`}>
        <motion.div
          variants={fadeIn("up", 0.5, 0.2)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
        >
          <HeaderSummary summaryText={summaryText}/>
        </motion.div>

        <motion.h1 
          variants={fadeIn("up", 0.5, 0.4)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          className={`text-[33px] ${image === 'home' ? 'text-left' : ''} font-semibold text-[#ffffff] sm:text-[40px] md:text-[68px] leading-[1.1]`}
        >
          {title}
        </motion.h1>

        <motion.p 
          variants={fadeIn("up", 0.5, 0.6)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          className={`text-[19px] ${image === 'home' ? '' : 'mx-auto'} mt-[30px] font-light text-[#ffffe6] sm:text-[20px] md:text-[21px] max-w-2xl `}
        >
          {description}
        </motion.p>

        <motion.div 
          variants={fadeIn("up", 0.5, 0.8)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          className=''
        >
          {children}
        </motion.div>
      </div>

      <div className="hero-overlay drop"></div>
      
      <figure className={`bg ${cutout ?'w-[80%] absolute  -bottom-0 md:ml-5 lg:ml-14': 'w-full absolute -bottom-1 left-0' }`}>
          <Image src={diagonal} width={1500} height={1000} alt="diagonal shape" className="block w-full"/>
      </figure>
    </div>
  )
}

export default Header