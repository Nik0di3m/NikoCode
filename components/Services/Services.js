import ServicesCard from "./ServicesCard"

const Services = () => {
    return (
        <section className="flex flex-col items-center mt-12">
            {/* main */}
            <h2 className="text-3xl">
                Services
            </h2>
            <h3 className="text-lg font-light">
                What i ofer
            </h3>
            <div className="flex w-full justify-around mt-6 flex-wrap">
                {/* container 3 card around */}
                <ServicesCard text="Frontend Developer" image="/images/react.svg" />
                <ServicesCard text="Backend Developer" image="/images/firebase.svg" />
                <ServicesCard text="UI/UX Designer" image="/images/materialui.svg" />
            </div>
        </section>
    )
}

export default Services
