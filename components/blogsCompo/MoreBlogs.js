import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blogdata } from "../data/Blogdata";
import HeaderSummary from "../shared/HeaderSummary";
import CategoryLink from "../shared/navbar/CategoryLink";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const MoreBlogs = () => {
	return (
		<div>
			<div className="flex flex-col sm:grid-cols-2 sm:grid lg:flex lg:flex-row gap-6 pt-16">
				{Blogdata.map((blogs) => (
					<motion.div
						key={blogs.id}
						variants={fadeIn("up", 0.5, 0.2)}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0 }}
						className="pt-10">
						<Link href={`/blog/${blogs.id}`}>
							<Image
								src={blogs.image}
								width={1500}
								height={1000}
								alt="imag"
								className="rounded-lg"
							/>
						</Link>
						<div className="pt-8">
							<HeaderSummary
								containerBorder={`border-primary`}
								textColor={`text-primary`}
								dotBgColor={`bg-primary`}
								summaryText={blogs.date}
							/>
						</div>

						<div>
							<h3 className="text-black">{blogs.title} </h3>
						</div>
						<div className="pt-10 w-[90px]">
							<CategoryLink
								to={`/blog/${blogs.id}`}
								name={"Read More"}
								styles={"text-primary text-[1.1rem] -mb-1"}
							/>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default MoreBlogs;
