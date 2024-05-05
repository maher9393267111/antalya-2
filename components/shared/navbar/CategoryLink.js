import { useState } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic'

const CategoryLink = ({ name, to, width, toggleNav, styles }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div>
			<Link href={`${to}`}  onClick={toggleNav}>
				<div
					className="relative group "
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					<p className={`text-xl nav-link lg:text-[17px] w-[180px] ${styles}`}>{name}</p>
					<p
						className={`w-[${width}}px] mt-1 relative bg-primarylight/40 h-[3px] overflow-hidden group`}>
						<div
							className={`w-[${width}}px]  ${
								isHovered ? "translate-x-0" : "-translate-x-40"
							} bg-primary h-[3px] transition-all duration-300 ease-in-out`}></div>
					</p>
				</div>
			</Link>
		</div>
	);
};

// export default CategoryLink;
export default dynamic (() => Promise.resolve(CategoryLink), {ssr: false});
