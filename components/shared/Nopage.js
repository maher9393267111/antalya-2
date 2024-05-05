import Link from "next/link";
import Image from "next/image";

function Nopage() {
	return (
		<div>
			<div className="general-margin flex flex-col space-y-5 items-center justify-center text-center h-[100vh] w-full">
				<div className="w-44 h-20 mb-20">
				<Image src="/icons/logo.png" width={400} height={400} alt="logo"/>
				</div>
				<p className="p-lg">Oops, it looks like you have taken a wrong turn.</p>
				<p className="p-lg">Let us get you back on track.</p>
				<Link href={"/"} className="btn-secondary">
					Back to Homepage
				</Link>
			</div>
		</div>
	);
}

export default Nopage;
