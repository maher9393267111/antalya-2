import React from 'react'
import Image from 'next/image'

function ReviewCard(props) {
  const stars = Array(props.review.starRating).fill(null);
  return (
    <div className='card bg-white min-h-[300px] border rounded-lg shadow-customC'>
        <div className='card-content py-[35px] px-[40px] flex flex-col justify-center items-start'>
            <div className='star-ratings flex gap-2'>
                {stars.map((star, index) => (
                    <figure 
                        className='w-[20px]'
                        key={index}
                    >
                        <Image
                            src={`/icons/star-icon.png`}
                            alt='star'
                            width={192}
                            height={192}
                            className='w-full block'
                        />
                    </figure>
                ))}
            </div>

            <div className='mt-[25px]'>
                <p className='mb-[10px] text-[17px] text-[#6e6e6e] font-semibold'>
                    &quot;{props.review.quote}&quot;
                </p>
            </div>

            <div className='mt-[25px]'>
                <h4 className='mb-[3px] text-base'>
                    {props.review.author}
                </h4>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard