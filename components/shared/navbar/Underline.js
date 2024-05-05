const Underline = ({ width }) => {
	return (
		<div
			className={`w-[${width}px] mt-1 relative bg-primarylight/40 h-[3px] overflow-hidden`}>
			<div
				className={`w-[${width}px] -translate-x-[165px] bg-primary h-[3px] group-hover:translate-x-0 transition-all duration-300 ease-in-out`}></div>
		</div>
	);
};

export default Underline;
