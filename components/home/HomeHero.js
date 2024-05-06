import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../shared/Header'
import arrow from '../../public/650adcad05bc07eb4bae8dbf_arrow.svg'

function HomeHero() {
  return (
    <Header
          summaryText={"مرحبا بكم في موقعنا"}
          title={'حيث تصبح منازل الأحلام حقيقة'}
          image={"/hero.jpg"}
          description={'اكتشف أكثر من 1000+ عرض عقاري.'}
          styles={"mt-16"}
        >
           <a href="https://wtspee.com/905385809972" target="_blank">
						<button className=" arabic btn-primary rounded-md mt-[60px] flex mx-auto gap-3 group">
						تواصل معنا

          

							<figure className="w-[13px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all">
								<Image src={arrow} alt="arrow" className="block w-full" />
							</figure>

              

						</button>
				
        </a>
        </Header>
  )
}

export default HomeHero