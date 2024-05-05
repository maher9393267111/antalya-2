import React from 'react'
import AllProperties from "../../components/PropertiesDetails/AllProperties"
import HeaderSummary from '../shared/HeaderSummary'
import { motion } from "framer-motion"
import { fadeIn } from "../../components/shared/Variant"
import { featuredProperties } from "../data/FeaturedProperties"
import Link from 'next/link'

function LatestPropertiesSection() {
  return (
    <section className="px-[5%] pt-[50px] py-[60px] md:py-[80px] md:pb-[150px]">
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
                  summaryText={'Latest Property'} 
                />

                <h2 
                  className={`text-[30px] font-semibold text-[#000] sm:text-[40px] md:text-[38px] leading-tight text-center mb-[5px]`}
                >
                  Browse all properties
                </h2>
              </motion.div>

              <div className="section-body mt-[60px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {featuredProperties.map((property, index) => (
								<AllProperties
									key={index}
									id={property.id}
									propertyImage={property.propertyImage}
									bed={property.bed}
									status={property.status}
									price={property.price}
									name={property.name}
									location={property.location}
									bath={property.bath}
									sqft={property.sqft}
									featured={property.featured}
								/>
							))}
                </div>
                
                <Link href={`/properties`}>
                  <div
                    className="flex justify-center items-center"
                  >
                    <button className="btn-secondary rounded-md mt-[60px] flex justify-center items-center gap-3 group">
                      Browse all properties
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </section>
  )
}

export default LatestPropertiesSection