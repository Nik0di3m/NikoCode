import Link from "next/link";
const MenuItems = ({ text, link }) => {
  return (
    <Link href={`#${link}`}>
      <div className="hover:scale-110 hover:text-orange ml-5 cursor-pointer transition duration-200">
        {text}
      </div>
    </Link>
  );
};

export default MenuItems;
