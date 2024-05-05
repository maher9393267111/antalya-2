import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function CategoryCard(props) {
  return (
    <Link href={`/properties/category/${props.category.to}`}>
        <div className='bg-white rounded-lg group transition-all duration-300'>
            <div className='pt-[30px] pb-[40px] flex justify-center items-center flex-col'>
                
                <figure className='border w-[125px] h-[125px] flex justify-center items-center rounded-[50%] shadow-customC group-hover:bg-[#26272b] transition-all duration-300 relative'>
                    <div className='absolute w-[100px] h-[100px] group-hover:w-[120%] group-hover:h-[120%] border-[4px] border-transparent group-hover:border-[#26272b] rounded-[50%] transition-all duration-300'></div>

                    <Image 
                        src={props.category.image}
                        alt={props.category.title}
                        className='block w-[44px] group-hover:filter group-hover:invert-[100%] transition-all duration-300'
                        width={240}
                        height={240}
                    />
                </figure>
                <h3 className='text-[21px] capitalize mt-[30px]'>
                    {props.category.title}
                </h3>
            </div>
        </div>
    </Link>
  )
}

export default CategoryCard