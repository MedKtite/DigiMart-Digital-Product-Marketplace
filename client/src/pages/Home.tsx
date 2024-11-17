import Slider from "../components/Slider";
import Promo1 from "../assets/Promo/promo1.png";
import Promo2 from "../assets/Promo/promo2.png";
import image3 from "../assets/Categories/image3.png";
import image5 from "../assets/Categories/image5.png";
import image4 from "../assets/Categories/image4.png";
import image6 from "../assets/Categories/image6.png";
import image7 from "../assets/Categories/image7.png";
import image8 from "../assets/Categories/image8.png";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero */}
      <div className="flex gap-12 items-center justify-center bg-primary-light-gray py-12 px-8">
        {/* Slider */}
        <div>
          <Slider />
        </div>
        {/* Promo */}
        <div className="flex items-center flex-col gap-2">
          <img src={Promo1} alt="Promo 1" className="rounded-lg" />
          <img src={Promo2} alt="Promo 2" className="rounded-lg" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-primary-light-gray py-8 flex justify-center text-center gap-14 px-8">
        {/* Gaming */}
        <div className= " flex gap-3 flex-col bg-white  rounded-lg px-6 py-4 text-center items-center">
          <img className="w-[94px] h-[70px]" src={image3} alt=" gaming" />
          <p className="text-sm font-roboto font-bold text-primary-Black">Gaming</p>
        </div>
        {/* Smartphone */}
        <div className= " flex gap-3 flex-col bg-white rounded-lg px-6 py-4 text-center items-center">
          <img className="w-[94px] h-[70px]" src={image5} alt=" smartphone" />
          <p className="text-sm font-roboto font-bold text-primary-Black">Smartphone</p>
        </div>
        {/* Laptop */}
        <div className= " flex gap-3 flex-col bg-white rounded-lg px-6 py-4 text-center items-center">
          <img className="w-[94px] h-[70px]" src={image4} alt=" laptop" />
          <p className="text-sm font-roboto font-bold text-primary-Black">Laptop</p>
        </div>
        {/* TV */}
        <div className= " flex gap-3 flex-col bg-white rounded-lg px-6 py-4 text-center items-center">
          <img className="w-[94px] h-[70px]" src={image6} alt=" tv" />
          <p className="text-sm font-roboto font-bold text-primary-Black">TV</p>
        </div>
        {/* Camera */}
        <div className= " flex gap-3 flex-col bg-white rounded-lg px-6 py-4 text-center items-center">
          <img className="w-[94px] h-[70px]" src={image7} alt=" camera" />
          <p className="text-sm font-roboto font-bold text-primary-Black">Camera</p>
        </div>
        {/* More */}
        <div className= " flex gap-3 flex-col bg-white rounded-lg px-6 py-4 text-center items-center">
          <img className="w-[94px] h-[70px]" src={image8} alt=" more" />
          <p className="text-sm font-roboto font-bold text-primary-Black">More</p>
        </div>
      </div>

      {/* Flash Sale Deals */}
      <div >
        <div className="bg-gradient-to-br from-[#FF7C02] to-[#F4CE14] p-4">
          
        </div>
      </div>

    </div>
  )
}