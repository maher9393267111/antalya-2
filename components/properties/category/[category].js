import Link from "next/link";
import PropertiesCard from "../../../components/shared/PropertiesCard";
import { Properties } from "../../data/Propertiesdata";
import { useRouter } from "next/router";
import Header from "../../../components/shared/Header";

function CategoriesFilter() {
	const router = useRouter();
	let { category } = router.query;

	let filteredProperties;
	let image = "categories";
	let cutout = false;

	if (category === "Sale") {
		category = "For Sale";
		filteredProperties = Properties.filter(
			(property) => property.type === category.toUpperCase()
		);
	} else if (category === "Rent") {
		category = "For Rent";
		filteredProperties = Properties.filter(
			(property) => property.type === category.toUpperCase()
		);
	} else if (category === "manhattan") {
		category = "Manhattan, NY";
		image = "manhattan";
		cutout = true;
		filteredProperties =Properties.filter(
			(property) => property.location === category
		);
	} else if (category === "london") {
		category = "London, UK";
		image = "london";
		cutout = true;
		filteredProperties = Properties.filter(
			(property) => property.location === category
		);
	} else if (category === "miami") {
		category = "Miami, FL";
		image = "miami";
		cutout = true;
		filteredProperties = Properties.filter(
			(property) => property.location === category
		);
	} else {
		filteredProperties = Properties.filter(
			(property) => property.category === category
		);
	}

	if (filteredProperties.length === 0) {
		return (
			<>
				<Header
					summaryText={"Explore all properties"}
					title={category}
					image={"categories"}
				/>
				<div className="flex justify-center">
					<h1 className="text-4xl text-primary mt-20 mb-32">
						No properties found
					</h1>
				</div>
			</>
		);
	}

	return (
		<>
			<Header
				summaryText={"Explore all properties"}
				title={category}
				image={image}
				cutout={cutout}
			/>
			<section className="px-[5%] pt-[50px] py-[60px] md:pt-[80px] md:pb-[150px]">
				<div className="flex justify-center">
					<div className="section-content max-w-[1200px]">
						<div className="section-body">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
								{filteredProperties.map((property) => (
									<Link
										href={`/properties/details/${property.id}`}
										key={property.id}>
										<PropertiesCard property={property} />
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default CategoriesFilter;
