import React, { useState } from 'react'
import Link from 'next/link'

function FooterLinks(props) {
  return (
    <div className='flex flex-col'>
        <h5 className="text-[15px] text-primary mb-[10px] font-semibold">
            {props.header}
        </h5>
        {
            props.links.map(link => (
                <div key={link.id} className="">
                    <h6 
                        className="capitalize text-[16px] text-[#26272B] mb-[10px] font-semibold"
                    >
                        <Link 
                            href={props.header === 'Navigation' ? link.to : `/properties/category/${link.to}`}
                            
                            key={link.id}
                            className='hover:text-[#838383] transition-all duration-200'
                        >
                            {link.title}
                        </Link>
                    </h6>
                </div>
            ))
        }
    </div>
  )
}

export default FooterLinks