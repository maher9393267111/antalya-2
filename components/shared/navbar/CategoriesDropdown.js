import Link from "next/link";
import Underline from "./Underline";
import CategoryLink from "./CategoryLink";
import CategoryImage from "./CategoryImage";
import dynamic from 'next/dynamic'
import { useState } from "react";

const CategoriesDropdown = () => {
	return (
		// switch hidden
		<div className="hidden group-hover:flex fixed top-14 pt-20 left-0 right-0 h-[400px] justify-between  bg-white w-full general-margin">
			
			{/* Order by category column */}
			<div className="flex flex-col space-y-4 ml-10">
				<h5 className="text-primary">by Category</h5>
				<Link className="nav-link" href="/properties/category/House">House</Link>
				<Link className="nav-link" href="/properties/category/Loft">Loft</Link>
				<Link className="nav-link" href="/properties/category/Apartment">Apartment</Link>
				<Link className="nav-link" href="/properties/category/Office">Office</Link>
			</div>


			{/* Order by type column*/}
			<div className="flex flex-col space-y-4">
				<h5 className="text-primary">by Type</h5>
				<Link className="nav-link" href="/properties/category/Sale">Sale</Link>
				<Link className="nav-link" href="/properties/category/Rent">Rent</Link>
			</div>

			{/* Order by location column */}
			<div className="flex flex-col space-y-5 mr-20 pb-4">
				<h5 className="text-primary">by Location</h5>
				<CategoryImage imageUrl={"Manhattan"} to={"manhattan"} text={"Manhattan, NY"}/>
				<CategoryImage imageUrl={"London"} to={"london"} text={"London, UK"}/>
				<CategoryImage imageUrl={"Miami"} to={"miami"} text={"Miami, FL"}/>
			</div>
			
			{/* Getting started column */}
			<div className="flex flex-col space-y-4 mr-20 ">
				<h5 className="text-primary">Get started</h5>

				<div className="w-[45px]">
					<CategoryLink name={"Legal"} to={"/404"} width={50} />
				</div>
				<div className="w-[100px]">
					<CategoryLink name={"Style Guide"} to={"/404"} width={50} />
				</div>
				<div className="w-[140px]">
					<CategoryLink
						name={"Image Licensing"}
						to={"/404"}
						width={50}
					/>
				</div>
				<div className="w-[100px]">
					<CategoryLink name={"Changelog"} to={"/404"} width={50} />
				</div>
			</div>
		</div>
	);
};

export default dynamic (() => Promise.resolve(CategoriesDropdown), {ssr: false});
// export default CategoriesDropdown;