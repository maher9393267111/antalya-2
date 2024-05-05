import { useState } from "react";
import { packagesData } from "../data/Packagesdata";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/shared/Variant";

function PackageCards() {
	const [loadingStates, setLoadingStates] = useState(
		Array(packagesData.length).fill(false)
	);

	const handleAddToCart = (index) => {
		const updatedLoadingStates = [false];
		updatedLoadingStates[index] = true;
		setLoadingStates(updatedLoadingStates);

		// Simulate an API call or any asynchronous operation
		setTimeout(() => {
			updatedLoadingStates[index] = false;
			setLoadingStates(false);
		}, 1000);
	};

	return (
		<div className="flex flex-col lg:flex-row justify-center items-center mt-20">
			{packagesData.map((packageItem, index) => (
				<motion.div
					variants={fadeIn("up", 0.5, 0.4)}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
					key={index}
					className="border p-4 md:p-10 m-3 md:m-5 rounded-md shadow-md h-[100%] w-[90%] min-w-md max-w-lg">
					<h2 className="text-xl text-primary font-bold mb-3">
						{packageItem.type}
					</h2>
					<p className="text-3xl text-primary font-bold mb-2">
						{packageItem.price}
					</p>
					<p className="p mb-6">{packageItem.description}</p>
					<p className="p mb-2 font-bold">Service included?</p>
					<p className="p mb-1">{packageItem.featured}</p>
					<p className="p mb-1">{packageItem.events}</p>
					<p className="p mb-8">{packageItem.support}</p>
					<button
						className="btn-secondary w-full"
						onClick={() => handleAddToCart(index)}>
						{loadingStates[index] ? "Adding to Cart..." : "Add to Cart"}
					</button>
				</motion.div>
			))}
		</div>
	);
}

export default PackageCards;
