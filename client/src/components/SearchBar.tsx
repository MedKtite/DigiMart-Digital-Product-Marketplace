import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-6 py-3 justify-center px-20 bg-white">
      <div className="text-[#001c30] text-[21.16px] font-bold font-roboto-slab">ECOMMERCE</div>
      <input type="text" placeholder="Search.." className="bg-primary-light-gray w-[720px] py-2 rounded-lg px-4 focus:ring-2 focus:ring-[#001c30] focus:outline-none focus:border-transparent" />
      <button className="flex gap-2 items-center bg-[#001c30] px-4 py-2 rounded-3xl text-white text-base font-roboto">
        <IoSearchSharp className="text-xl text-white" />
        Search
      </button>
    </div>
  )
}