import { PaperAirplaneIcon } from "@heroicons/react/solid"

const Button = ({ text, icon, style, color }) => {
    return (
        <div className={`flex justify-around items-center p-3 rounded-xl hover:scale-110 cursor-pointer transition duration-200 ${style} ${color}`}>
            <h3 className="text-lg">{text}</h3>{icon}
        </div>
    )
}

export default Button
