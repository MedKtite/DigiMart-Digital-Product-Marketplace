import Slider from "../components/Slider";
import Promo1 from "../assets/Promo/promo1.png";
import Promo2 from "../assets/Promo/promo2.png";

export default function Home() {
  return (
    <div>
        {/* Hero */}
        <div className="flex gap-12 items-center justify-center bg-primary-light-gray py-12 px-8">
            {/* Slider */}
            <div >
                <Slider />
            </div>
            {/* Promo */}
            <div className="flex items-center flex-col gap-2">
                <img src={Promo1} alt="Promo 1" className="rounded-lg" />
                <img src={Promo2} alt="Promo 1" className="rounded-lg" />
            </div>
        </div>

        {/*  Categories */}
        <div>
            
        </div>
    </div>
  )
}
