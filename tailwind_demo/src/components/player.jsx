import alleyezonme from "../images/Alleyezonme.jpg"; 
import { ImPrevious2, ImPause2, ImNext2, ImShuffle } from 'react-icons/im';
import { BsArrowRepeat } from 'react-icons/bs';
export default function Player() {
    return (
        <div className="fixed w-[78%] bg-[#282828] h-20 rounded-2xl items-center justify-between px-5 py-2.5 overflow-x-scroll md:overflow-x-hidden scrollbar-hide">
            <div className="flex items-center">
                <img
                    src={alleyezonme}
                    alt=""
                    className="h-14 mr-3"
                />
                <div>
                    <h4 className="text-white text-sm max-w-[150px] md:max-w-[250px] truncate">
                    All Eyes On Me
                    </h4>
                    <h5 className="text-xs text-[rgb(179,179,179)]">
                    Tupac
                    </h5>
                </div>
            </div>
            <div className="flex flex-col space-y-2 items-center md:absolute inset-x-auto w-full">
                <div className="flex items-center text-white text-xl space-x-4">
                    <ImShuffle />
                    <ImPrevious2 />
                    <ImPause2 />
                    <ImNext2 />
                    <BsArrowRepeat />
                </div>
            </div>
        </div>
    );
}