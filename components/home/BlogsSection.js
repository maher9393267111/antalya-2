import React from 'react'
import HeaderSummary from '../shared/HeaderSummary'
import { motion } from "framer-motion"
import { fadeIn } from "../../components/shared/Variant"
import MoreBlogs from "../../components/blogsCompo/MoreBlogs"

function BlogsSection() {
  return (
    <section className="px-[5%] pt-[60px] py-[60px] md:py-[150px] bg-[#f7f8fc]">
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
                  summaryText={'From Blog'} 
                />

                <h2 
                  className={`text-[30px] font-semibold text-[#000] sm:text-[40px] md:text-[38px] leading-tight text-center mb-[5px]`}
                >
                  The latest tips
                </h2>
              </motion.div>

            <div className="section-body">
              <motion.div 
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                className=""
              >
                  <MoreBlogs/>
              </motion.div>
              </div>
            </div>
          </section>
  )
}

export default BlogsSection