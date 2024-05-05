import { motion } from "framer-motion"
import { fadeIn } from "./Variant"
import Image from "next/image"
import searchicon from '../../public/icons/search.png'

const PropertiesSearch = () => {
    return (
        <motion.form
            variants={fadeIn("up", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            className="grid lg:col-span-2"
        >
            <div className="grid overflow-hidden rounded-md gap-3 relative">
                <div className="relative">
                    <Image
                    src={searchicon}
                    alt="search icon"
                    className="w-7 h-7 absolute top-[25%] left-4 sm:top-[33%]"
                    />
                    <input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Search for properties..."
                    required
                    className="w-full border rounded-md transition-all outline-primary outline-1 py-[15px] pr-[12px] pl-[52px]
                    sm:py-[28px]"
                    />
                </div>
                <button
                    className="bg-primary hover:bg-primarylight transition-all duration-200 text-white font-semibold py-[12px] px-[36px] rounded-md sm:w-[130px] sm:absolute sm:right-2 sm:top-[8%] sm:py-[22px]" 
                >
                    Search
                </button>
            </div>
        </motion.form>
    )
}

export default PropertiesSearch