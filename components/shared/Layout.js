import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

const Layout = ({ children }) => {
	return (
		<div className="bg-white">
			<Navbar />
			<div>{children}</div>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Layout;
