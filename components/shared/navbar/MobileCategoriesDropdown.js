import Link from "next/link"
import CategoryImage from "./CategoryImage"
import CategoryLink from "./CategoryLink"
import dynamic from "next/dynamic"

function MobileCategoriesDropdown({toggle}) {
  return (
    <div className="flex flex-col sm:flex-row  pt-5 h-[100%] sm:h-[400px] w-[75vw] justify-between bg-white">
			
			{/* Order by category column */}
			<div className="flex flex-col space-y-4 mb-5 -mr-14">
				<h5 className="text-primary text-xl">by Category</h5>
				<Link className="pl-3 nav-link text-xl" href="/properties/category/House" onClick={toggle}>House</Link>
				<Link className="pl-3 nav-link text-xl" href="/properties/category/Loft" onClick={toggle}>Loft</Link>
				<Link className="pl-3 nav-link text-xl" href="/properties/category/Apartment" onClick={toggle}>Apartment</Link>
				<Link className="pl-3 nav-link text-xl" href="/properties/category/Office" onClick={toggle}>Office</Link>
			</div>


			{/* Order by type column*/}
			<div className="flex flex-col space-y-4 mb-5 -mr-14">
				<h5 className="text-primary text-xl">by Type</h5>
				<Link className="pl-3 nav-link text-xl" href="/properties/category/Sale" onClick={toggle}>Sale</Link>
				<Link className="pl-3 nav-link text-xl" href="/properties/category/Rent" onClick={toggle}>Rent</Link>
			</div>

			{/* Order by location column */}
			<div className="flex flex-col space-y-3 mb-5">
				<h5 className="text-primary  text-xl">by Location</h5>
				<CategoryImage imageUrl={"Manhattan"} to={"manhattan"} text={"Manhattan, NY"} toggleNav={toggle}/>
				<CategoryImage imageUrl={"London"} to={"london"} text={"London, UK"} toggleNav={toggle}/>
				<CategoryImage imageUrl={"Miami"} to={"miami"} text={"Miami, FL"} toggleNav={toggle}/>
			</div>
			
			{/* Getting started column */}
			<div className="flex flex-col space-y-4 mb-5">
				<h5 className="text-primary text-xl">Get started</h5>

				<div className="w-[45px] text-xl">
					<CategoryLink name={"Legal"} to={"/404"} width={50}  toggleNav={toggle}/>
				</div>
				<div className="w-[100px] text-xl">
					<CategoryLink name={"Style Guide"} to={"/404"} width={50}  toggleNav={toggle}/>
				</div>
				<div className="w-[140px] text-xl">
					<CategoryLink
						name={"Image Licensing"}
						to={"/404"}
						width={50} toggleNav={toggle}
					/>
				</div>
				<div className="w-[100px]">
					<CategoryLink name={"Changelog"} to={"/404"} width={50}  toggleNav={toggle}/>
				</div>
			</div>
		</div>
  )
}

// export default MobileCategoriesDropdown;
export default dynamic (() => Promise.resolve(MobileCategoriesDropdown), {ssr: false});
