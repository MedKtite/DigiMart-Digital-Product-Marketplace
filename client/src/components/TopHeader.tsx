import { MdSettingsPhone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function TopHeader() {
  return (
    <div className="bg-primary-light-gray flex items-center px-8 py-2 justify-between">
      <p className="flex items-center gap-2">
        <MdSettingsPhone className="text-xl text-primary" />
        <span className="text-sm text-primary-Black font-roboto font-medium">+212 631 756 678</span>
      </p>
      <p className="text-sm font-roboto font-medium text-primary-Black">
        30% OFF ALL ELECTRONIC PRODUCTS! SPECIAL THIS MONTH. CODE : JKR123
      </p>
      <div className="flex gap-6 justify-between">
        {/* language change */}
        <button className="flex items-center gap-2">
          <p className="text-sm text-primary-Black font-roboto font-medium">English</p>
          <IoIosArrowDown />
        </button>
        {/* currency change */}
        <button className="flex items-center gap-2">
          <p className="text-sm text-primary-Black font-roboto font-medium">USD</p>
          <IoIosArrowDown />
        </button>
        {/* Setting */}
        <button className="flex items-center gap-2">
          <p className="text-sm text-primary-Black font-roboto font-medium">Setting</p>
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  )
}