import PopularSongs from "./popularsongs";
import Release from "./release";
import Banner from "./banner";
import alleyezonme from "../images/Alleyezonme.jpg";
import { IoMdPlay } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

export default function Body() {
    return (
        <div className="sm:pl-28 lg:pl-56">
            <Banner />
            <div className="flex items-center mt-7">
                <button className="bg-[#18b153] p-3 rounded-full text-center mr-9 hover:bg-[#21df6a]">
                    <div>
                        <span className="flex relative left-1">
                            <IoMdPlay size={37} color="black" className=""/>
                        </span>
                    </div>
                </button>
                <button className="border-[1.5px] border-[#686868] py-1.5 px-3 rounded-md font-semibold mr-9 hover:border-white">Follow</button>
                <button className="opacity-40 hover:opacity-100"><BsThreeDots size={30} /></button>
            </div>
            <div className="md:flex md:flex-col 2xl:flex-row mt-4">
                <PopularSongs />
                <div className="flex w-full 2xl:flex-col 2xl:w-[40%]">
                    <div className="w-1/2 2xl:w-auto">
                        <div className="text-2xl font-bold py-2">Liked Songs</div>
                        <div className="flex">
                            <img src={alleyezonme} className="rounded-full max-h-28"/>
                            <div className="my-auto mx-4">
                                <h4 className="font-bold truncate hover:underline hover:cursor-pointer">
                                    You've liked 43 songs
                                </h4>
                                <h5 className="text-sm text-[rgb(179,179,179)]">
                                    By Pusha T
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 2xl:w-auto">
                        <div className="text-2xl font-bold py-2">Artist pick</div>
                        <div className="flex">
                            <img src={alleyezonme} className="max-h-28"/>
                            <div className="my-auto mx-4">
                                <h4 className="font-bold truncate hover:underline hover:cursor-pointer">
                                    It's Almost Dry
                                </h4>
                                <h5 className="text-sm text-[rgb(179,179,179)]">
                                    Album
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="text-2xl font-bold py-2">Popular releases</div>
            <div className="flex">
                <Release />
                <Release />
                <Release />
                <Release />
            </div>
            <div className="text-2xl font-bold py-2">Albums</div>
            <div className="flex">
                <Release />
                <Release />
                <Release />
                <Release />
            </div>
            
        </div>
    );
}