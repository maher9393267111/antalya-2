import React from 'react'
import HeaderSummary from '../shared/HeaderSummary'
import { motion } from "framer-motion"
import { fadeIn } from "../../components/shared/Variant"
import { Properties } from "../data/Propertiesdata"
import PropertiesCard from "../../components/shared/PropertiesCard"
import Link from 'next/link'

function PopularRealEstateSection({data}) {
  return (
    <section className="px-[5%] pt-[60px] py-[60px] md:py-[150px]">
        <div className="section-content max-w-[1200px] mx-auto">
            <motion.div 
            variants={fadeIn("up", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            className="section-header flex justify-center items-center flex-col"
            >
            <HeaderSummary 
                containerBorder={`border-primary `}
                textColor={`text-primary`}
                dotBgColor={`bg-primary`}
                summaryText={'Featured Property'} 
            />

            <h2 
                className={`text-[30px] font-semibold text-[#000] sm:text-[40px] md:text-[38px] leading-tight text-center mb-[5px]`}
            >
                Our choice of popular real estate
                
            </h2>
            </motion.div>

        <div className="section-body mt-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {data?.map(property => (
                     
                    <Link href={`/properties/details/${property.id}`} key={property.id}>
                    <PropertiesCard property={property} />
                    </Link> 
                ))}
            </div>
            
            <Link href={`/properties`}>
                <div
                className="flex justify-center items-center"
                >
                <button className="btn-secondary text-2xl arabic rounded-md mt-[60px] flex justify-center items-center gap-3 group">
                تصفح جميع العقارات لدينا
                </button>
                </div>
            </Link>
            </div>
        </div>
    </section>
  )
}

export default PopularRealEstateSection