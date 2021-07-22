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
                <ServicesCard text="Frontend Developer" image="/images/react.svg" alt="React logo" />
                <ServicesCard text="Backend Developer" image="/images/firebase.svg" alt="Firebase logo" />
                <ServicesCard text="UI/UX Designer" image="/images/materialui.svg" alt="Material ui logo" />
            </div>
        </section>
    )
}

export default Services
