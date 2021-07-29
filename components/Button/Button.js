import { PaperAirplaneIcon } from "@heroicons/react/solid"
import Link from "next/link"
const Button = ({ text, icon, style, color, link, target }) => {
    return (
        <Link href={link || "/"} >
            <a target={target} rel='noreferrer'>
                <div className={`flex justify-around items-center p-3 rounded-xl hover:scale-110 cursor-pointer transition duration-200 ${style} ${color}`}>
                    <h3 className="text-lg">{text}</h3>{icon}
                </div>
            </a>
        </Link>

    )
}

export default Button
