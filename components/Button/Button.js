import { PaperAirplaneIcon } from "@heroicons/react/solid"

const Button = ({ text, icon, style }) => {
    return (
        <div className={`bg-orange flex justify-around items-center p-3 rounded-xl text-light hover:scale-110 cursor-pointer ${style}`}>
            <h3 className="text-lg">{text}</h3>{icon}
        </div>
    )
}

export default Button
