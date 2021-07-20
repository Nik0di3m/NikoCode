import { data } from "./data"
import TimeLineItems from "./TimeLineItems"

const MyJourney = () => {
    return (
        <div className="flex flex-col relative items-center">
            <div className="">
                <h2 className="text-3xl">My Journey</h2>
            </div>
            <div className="h-[90%] lg:h-[84%] bg-[#323232] w-[2px] absolute top-14 lg:top-[58px] lg:mt-4 timeline">
                {''}
            </div>
            <div className="w-[95%] lg:w-5/12 flex flex-col">
                {data.map((item, id) => (
                    <TimeLineItems data={item} key={id} />
                ))}
            </div>

        </div>
    )
}

export default MyJourney
