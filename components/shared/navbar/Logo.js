import React from 'react'
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
        <div className="mr-4 cursor-pointer relative z-10">
            <Image src="/icons/logo.png" width={120} height={120} alt="Logo" />
        </div>
    </Link>
  )
}

export default Logo