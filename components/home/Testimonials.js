import React from 'react'
import HeaderSummary from '../shared/HeaderSummary'
import { motion } from "framer-motion"
import { fadeIn, Scale } from "../../components/shared/Variant"
import ReviewCard from "../../components/home/ReviewCard"
import { Reviews } from "../data/Review"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

function Testimonials() {
    const breakpoints = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        };
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
                  summaryText={'Testimonials'} 
                />

                <h2 
                  className={`text-[30px] font-semibold text-[#000] sm:text-[40px] md:text-[38px] leading-tight text-center mb-[5px]`}
                >
                  Discover our clients experiences
                </h2>
              </motion.div>

              <div className="section-body mt-[60px]">
                <motion.div 
                  variants={fadeIn("up", 0.5, 0)}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  className="review-cards overflow-hidden"
                >
                  <Swiper
                    breakpoints={breakpoints}
                    spaceBetween={20}
                    noSwiping={false}
                    navigation= {true}				
                    loop={true}
                    modules={[Navigation]}
                    className="swiper-no-swiping"
                  >
                   {
                      Reviews.map((review, index) => (
                        <SwiperSlide
                          className={`${index}`}
                          key={review.id}
                        >
                          <ReviewCard review={review}/>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>                    
                </motion.div>
                <div className="section-body-b mt-[150px] grid lg:grid-cols-2 items-center justify-center gap-[80px]">
                  <motion.div 
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    className="section-sub-header mx-auto order-2 lg:order-1 max-w-[500px]"
                  >
                    <HeaderSummary 
                      containerBorder={`border-primary `}
                      textColor={`text-primary`}
                      dotBgColor={`bg-primary`}
                      summaryText={'Download App'} 
                    />

                    <h2 
                      className={`text-[30px] font-semibold text-[#000] sm:text-[40px] md:text-[38px] leading-tight text-left mb-[5px]`}
                    >
                      Download it on your iPhone or Android and step into a world of property explorations.
                    </h2>

                    <div
                      className="download-btns flex gap-5 flex-wrap mt-[60px]"
                    >
                      <figure
                        className="w-[132px]"
                      >
                        <Image
                          src={'/icons/appstore.png'}
                          alt="google play download btn"
                          width={297}
                          height={88}
                          className="w-full block"
                        />
                      </figure>

                      <figure
                        className="w-[148.5px]"
                      >
                        <Image
                          src={'/icons/googleplay.png'}
                          alt="google play download btn"
                          width={297}
                          height={88}
                          className="w-full block"
                        />
                      </figure>
                    </div>
                  </motion.div>

                  <div className="order-1 lg:order-2">
                    <motion.div
                      variants={Scale(0.3, 0)}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <figure
                        className="rounded-3xl overflow-hidden"
                      >
                        <Image
                          src={'/mobile-app.jpg'}
                          alt="mobile app"
                          width={800}
                          height={908}
                        />
                      </figure>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Testimonials