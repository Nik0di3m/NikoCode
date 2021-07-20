const MenuItems = ({ text }) => {
    return (
        <div className="hover:scale-110 hover:text-orange ml-5 cursor-pointer transition duration-200">
            {text}
        </div>
    )
}

export default MenuItems
