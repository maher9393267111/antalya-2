import React from 'react'
import diagonal from '../../public/wave.svg'
import { Categories } from "../data/Propertiesdata"
import CategoryCard from "../../components/home/CategoryCard"
import { motion } from "framer-motion"
import { fadeIn } from "../../components/shared/Variant"
import Image from 'next/image'

function SearchCaregory() {
  return (
    <section className={`px-[5%] pt-[60px] pb-[185px] md:pb-[185px] md:py-[150px] bg-homeCategory bg-cover bg-center text-center relative`}>
        <div className="section-content max-w-[1200px] mx-auto">
            <motion.div 
            variants={fadeIn("up", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            className="section-header flex justify-center items-center flex-col"
            >
                <h2 
                    className={`text-[30px] font-semibold text-white sm:text-[40px] md:text-[38px] leading-tight text-center mb-[5px]`}
                >
                    Search properties by category
                </h2>
            </motion.div>

            <div className="section-body mt-[60px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
                    {Categories.map(category => (
                        <motion.div
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: .1 }}
                        key={category.id}
                        >
                        <CategoryCard category={category}/>
                        </motion.div>
                    ))}
                </div>

                <figure className="w-full absolute -bottom-1 left-0">
                    <Image src={diagonal} alt="diagonal shape" className="block w-full"/>
                </figure>
                </div>
            </div>
    </section>
  )
}

export default SearchCaregory