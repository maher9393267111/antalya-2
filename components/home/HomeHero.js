import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../shared/Header'
import arrow from '../../public/650adcad05bc07eb4bae8dbf_arrow.svg'

function HomeHero() {
  return (
    <Header
          summaryText={"Welcome to Property"}
          title={'Where dream homes become a reality.'}
          image={"home"}
          description={'Discover more than 1,000+ property showcases.'}
          styles={"mt-16"}
        >
          <Link href={`/postproperty`}>
            <button className="btn-primary rounded-md mt-[60px] flex justify-center items-center gap-3 group">
              Post a property

              <figure className="w-[13px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all">
                <Image 
                  src={arrow}
                  alt="arrow"
                  className="block w-full"
                />
              </figure>
            </button>
          </Link>
        </Header>
  )
}

export default HomeHero