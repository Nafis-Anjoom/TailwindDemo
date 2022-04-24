import tupac from "../images/tupac.jpg";
import { GoVerified } from "react-icons/go";

export default function Banner() {
    return(
        <div className="flex bg-cover bg-center h-80 align-baseline" style={{backgroundImage: `url(${tupac})`}}>
            <div className="pl-8 pb-8 self-end">
                <div className="flex items-center"><GoVerified /><span className="px-3">Verified Artist</span></div>
                <div className="text-8xl font-extrabold">Pusha T</div>
                <div className="my-2">4,135,714 monthly listeners</div>
            </div>
        </div>
    );
}