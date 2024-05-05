import { useState } from "react"
import arrow from '../../public/651175a3d472aedd788836cb_arrow.svg'
import Image from "next/image"
import Link from "next/link";

const FilterCard = (props) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cursor-pointer relative"
        >
            <div>
                <div className={`px-[25px] py-[28px] border rounded-md flex justify-between items-center ${isHovered ? 'shadow-customB' : 'shadow-customA'} transition-all z-50`}>
                    <h4 className="text-[#6e6e6e] font-medium">
                        {props.filter.type}
                    </h4>
                    <figure className="w-[20px]">
                        <Image
                            src={arrow}
                            alt="arrow"
                            className="rotate-45 w-full block"
                        />
                    </figure>
                </div>
                {
                    isHovered && 
                    <div className="px-[25px] py-2 border mt-[5px] rounded-md relative lg:absolute top-[95%] left-0 w-full bg-white z-40">
                        {props.filter.subTypes.map( subtype => (
                            <Link
                                href={`/properties/category/${subtype.to}`}
                                key={subtype}
                            >
                                <h4 className="text-[16px] text-[#6e6e6e] py-2 capitalize hover:text-black transition-all">
                                    {subtype.title}
                                </h4>
                            </Link>
                        ) )}
                    </div>
                }
            </div>
        </div>
    )
}

export default FilterCard