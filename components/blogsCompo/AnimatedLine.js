import Link from 'next/link'

const AnimatedLine = ({to}) => {
	return (
    <Link href={`/blogs/${to}`}>
    {/* Hold animated link */}
    
		<div className={`min-w-min mt-1 relative bg-primarylight/40 h-[3px] overflow-hidden`}>
			<div className={`min-w-min -translate-x-[165px] bg-primary h-[3px] group-hover:translate-x-0 transition-all duration-300 ease-in-out`}></div>
		</div>
    </Link>


	);
};

export default AnimatedLine;
