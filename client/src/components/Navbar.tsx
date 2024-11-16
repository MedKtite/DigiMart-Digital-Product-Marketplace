import { BiSolidDashboard } from "react-icons/bi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";



export default function Navbar() {
  return (
    <div className="bg-[#001c30] flex items-center px-24 justify-between">
        {/* Categories */}
        <button className="flex items-center gap-4 bg-secondary-yellow py-4 px-6">
            <BiSolidDashboard className="text-xl text-primary-Black" />
            <span className="text-sm font-roboto font-bold text-primary-Black ">All Category</span>
        </button>
        {/* Navlink */}

        <nav>
            <ul className="flex gap-6 items-center justify-between">
                <li className="bg-secondary-yellow px-3 py-1 rounded-2xl ">
                    <a href="#" className="text-base text-primary-Black font-roboto font-bold">Home</a>
                </li>
                <li>
                    <a href="#" className="text-base text-white font-roboto font-semibold">About</a>
                </li>
                <li>
                    <a href="#" className="text-base text-white font-roboto font-semibold">Shop</a>
                </li>
                <li>
                    <a href="#" className="text-base text-white font-roboto font-semibold">Blog</a>
                </li>
                <li>
                    <a href="#" className="text-base text-white font-roboto font-semibold">Contact</a>
                </li>
            </ul>
        </nav>

        {/* user interactions */}
        <div className="flex items-center gap-6 justify-between">
            {/* Favorite */}
            <div className="relative">
                <div className="absolute -top-2 -right-2 bg-secondary-yellow text-primary-Black text-xs rounded-full px-1 flex items-center justify-center">
                        3
                </div>
                <FaRegHeart className="text-xl text-white" />
            </div>
            {/* cart */}
            <div className="relative">
                <div className="absolute -top-1 -right-1 bg-secondary-yellow text-primary-Black text-xs rounded-full px-1 flex items-center justify-center">
                        5
                </div>
                <CiShoppingBasket className="text-2xl text-white" />
            </div>
            {/* Account */}
            <div className="relative">
                <FaRegUser className="text-xl text-white" />
            </div>
        </div>
    </div>
  )
}
