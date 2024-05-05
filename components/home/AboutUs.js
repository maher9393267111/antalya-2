import React from 'react'
import HeaderSummary from '../shared/HeaderSummary'
import { motion } from "framer-motion"
import { fadeIn, Scale } from "../../components/shared/Variant"
import Link from 'next/link'
import Image from 'next/image'
import arrow from '../../public/650adcad05bc07eb4bae8dbf_arrow.svg'

function AboutUs() {
  return (
    <section className="bg-primarylight px-[5%] pt-[50px] py-[100px] md:pt-[80px] md:pb-[150px] text-center relative">
            <div className="">
              <div className="section-content grid xl2:grid-cols-2 items-center justify-center gap-[80px] max-w-[1200px] mx-auto">
                <motion.div
                  variants={fadeIn("up", 0.5, 0)}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  className="section-header flex flex-col justify-start items-start order-2 max-w-[500px]"
                >
                  <HeaderSummary summaryText='About us'/>

                  <h2 className="text-[30px] text-white text-left mb-1 md:text-[38px] lg:text-[43px] md:leading-tight">
                  Uncover exceptional properties at value prices only here.
                  </h2>
                  
                  <Link href={`/postproperty`}>
                    <button className="btn-secondary hover:bg-white hover:text-black font-bold rounded-md mt-[60px] flex justify-center items-center gap-3 group">
                      Post a property

                      <figure className="w-[13px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all">
                        <Image 
                          src={arrow}
                          alt="arrow"
                          className="block w-full filter invert-[100%]"
                        />
                      </figure>
                    </button>
                  </Link>
                </motion.div>

                <div className="section-body order-1 flex justify-center items-center">
                  <motion.div
                    variants={Scale(0.3, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center text-white w-[290px] h-[290px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] border-[3px] border-white rounded-[50%] flex justify-center items-center flex-col mx-auto relative group"
                  >
                    
                    <div className="absolute w-[0] h-[0] group-hover:w-[90%] group-hover:h-[90%] bg-white transition-all duration-300 rounded-[50%]"></div>

                    <div className="text-[70px] lg:text-[108px] xl2:text-[120px] mb-[15px] lg:mb-[30px] group-hover:text-primarylight transition-all duration-300 z-30">
                      $3.7B
                    </div>
                    <p className="text-white sm:text-[20px] mb-[10px] lg:mb-[20px] group-hover:text-primarylight transition-all duration-300 z-30">
                      Managed Properties
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default AboutUs