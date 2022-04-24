import { GoVerified } from "react-icons/go";
import joey from "../images/joey.jpg";

export default function Banner() {
    return(
        <div className="flex bg-cover bg-center h-80 align-baseline bg-[#51606A]">
            <div className="flex pl-8 pb-8 self-end">
                <div className="items-center sm:h-48 sm:w-48 xl:h-56 xl:w-56">
                    <img src={joey} className="object-cover rounded-full h-full w-full"/>
                </div>
                <div className="self-end ml-3">
                    <div className="flex items-center"><GoVerified size={18} /><span className="px-2.5">Verified Artist</span></div>
                    <div className="sm:text-6xl md:text-7xl lg:text-8xl font-extrabold shrink">Joey Bada$$</div>
                    <div className="my-2">7,547,489 monthly listeners</div>
                </div>
            </div>
        </div>
    );
}