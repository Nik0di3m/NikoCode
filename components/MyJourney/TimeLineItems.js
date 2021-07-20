
const TimeLineItems = ({ data }) => {
    return (
        <div className="flex relative even:justify-end even:text-right timeline-dot mt-2">
            {/* wrapper */}
            <div className="flex flex-col test lg:w-11/12">
                {/* item wrapper */}
                <div className='w-full'>
                    <span className="text-xl font-semibold">
                        {data.data}
                    </span>
                </div>
                <div className="w-[80%] text-sm lg:w-11/12 lg:text-base lg:mt-2 dark:text-secondary">
                    {data.text}
                </div>
            </div>
            <div className="bg-orange w-4 h-4 lg:h-6 lg:w-6 rounded-full absolute dot ">

            </div>
        </div>
    )
}

export default TimeLineItems
