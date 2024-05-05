import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from "../../components/shared/Variant"
import PropertiesSearch from "../../components/shared/PropertiesSearch"
import { SearchFilters } from "../data/Propertiesdata"
import FilterCard from "../../components/shared/FilterCard"

function FilterSection() {
  return (
    <section className="px-[5%] py-[30px] ">
        <div className="section-content max-w-[1200px] mx-auto">
            <div className="section-body">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start justify-start">
                <PropertiesSearch />

                {SearchFilters.map(filter => (
                <motion.div 
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    key={filter.id}   
                    className="col-span-1"
                >
                    <FilterCard filter={filter}/>
                </motion.div>
                ))}
            </div>
            </div>
        </div>
    </section>
  )
}

export default FilterSection