import Image from "next/image"
import locationIcon from "../../public/icons/location-icon.png"
import carIcon from "../../public/icons/car-icon.png"
import bedIcon from "../../public/icons/bed-icon.png"
import bathIcon from "../../public/icons/bath-icon.png"
import directionIcon from "../../public/icons/direction-icon.png"
import { motion } from "framer-motion"
import { fadeIn } from "./Variant"

const PropertiesCard = (props) => {
    return (
        <motion.div 
        dir="rtl"
            variants={fadeIn("up", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            className="properties-card arabic border rounded-lg overflow-hidden cursor-pointer group relative"
        >
            <div className="card-content">
                {
                    props.property.id >= 5 &&
                    <span className="absolute top-[5%] left-[5%] z-30">
                        <p className={`arabic inline px-3 py-[7px] rounded-md text-[12px] text-[#26272b] bg-white`}>
                            المزايا
                        </p>
                    </span>
                }

                <figure className="overflow-hidden">
                    <Image
                        src={props?.property?.images[0]}
                        alt={props.property?.title}
                        width={1500} 
                        height={1000}
                        className="block w-full object-cover object-center group-hover:scale-110 transition-all duration-300"
                    />
                </figure>

                <div className="description py-[30px] px-[23px] md:px-10 relative">

                    <span className="absolute arabic -top-[5%] right-[5%]">
                        <p className={`inline arabic px-5 py-[11px] rounded-md text-[19px] text-white ${props.property.type === "FOR SALE" ? 'bg-[#ff4444]' : 'bg-[#00D97E]'}`}>
                        للبيع
                        </p>
                    </span>

                    <span className="absolute arabic -top-[5%] left-[5%]">
                        <p className={`inline arabic px-5 py-[11px] rounded-md text-[19px] text-white ${!props.property.type === "FOR SALE" ? 'bg-[#ff4444]' : 'bg-[#00D97E]'}`}>
                       للايجار
                        </p>
                    </span>



                    <div className="flex flex-col gap-5">
                        <h2 className="text-primary arabic text-[20px] font-medium">
                    سعر الايجار        {props.property?.rentprice}
                            <span className="text-[#00a862] text-base">
                              
                            </span>
                        </h2>

                        <h2 className="text-primary arabic text-[20px] font-medium">
                        سعر البيع :    {props.property?.sellprice}
                            <span className="text-[#00a862] text-base">
                              
                            </span>
                        </h2>


                        <div className="desc-1 flex gap-5 mb-5 flex-wrap md:justify-between">
                            <div className="flex justify-center items-center gap-2">
                                <figure className="w-5">
                                    <Image
                                        className="block w-full"
                                        src={bedIcon}
                                        alt="bed icon"
                                    />
                                </figure>
                                <p className="text-primary arabic text-[14px] sm:text-[15px] md:text-[16px]">
                                    {`${props.property.beds} سرير`}
                                </p>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <figure className="w-5">
                                    <Image
                                        className="block w-full"
                                        src={bathIcon}
                                        alt="bath icon"
                                    />
                                </figure>
                                <p className="text-primary arabic text-[14px] sm:text-[15px] md:text-[16px]">
                                    {`${props.property?.paths} حمام`}
                                </p>
                            </div>

                            <div className="flex justify-center arabic items-center gap-2">
                                <figure className="w-5">
                                    <Image
                                        className="block w-full"
                                        src={directionIcon}
                                        alt="direction icon"
                                    />
                                </figure>
                                <p className="text-primary arabic text-[14px] sm:text-[15px] md:text-[16px]">
                                    {`${props.property?.space} sqft`}
                                </p>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <figure className="w-5">
                                    <Image
                                        className="block w-full"
                                        src={carIcon}
                                        alt="car icon"
                                    />
                                </figure>
                                <p className="arabic text-primary text-[14px] sm:text-[15px] md:text-[16px]">
                                    {`${props.property?.parks}  حديقة `}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="desc-2">
                        <h4 className="arabic mb-[15px]">
                        {props.property?.title}
                        </h4>

                        <div className="location flex items-center gap-2">
                            <figure className="w-5">
                                <Image
                                src={locationIcon}
                                alt="location icon"
                                className="block w-full"
                                />
                            </figure>
                            <p className="text-base arabic">
                                {props.property?.location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PropertiesCard