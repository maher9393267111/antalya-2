const HeaderSummary = (props) => {
    return (
        <div className={`inline-block border-[2.5px] rounded-3xl mb-6 ${props.containerBorder}`}>
            <div className="flex justify-center items-center gap-[10px] py-[5px] pl-[11px] pr-[15px]">
                <div className={`${props.dotBgColor ? `${props.dotBgColor}` : 'bg-white'} w-[10px] h-[10px] rounded-[50%]`}></div>

                <h4 className={`${props.textColor ? `${props.textColor}` : 'text-white'} text-[16px] font-semibold`}>
                    {props.summaryText}
                </h4>
            </div>
        </div>
    )
}

export default HeaderSummary;
