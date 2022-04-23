import PopularSongs from "./popularsongs";
import Release from "./release";
import Banner from "./banner";
import alleyezonme from "../images/Alleyezonme.jpg";

export default function Body() {
    return (
        <div className="lg:pl-48">
            <Banner />
            <div className="md:flex md:flex-col 2xl:flex-row mt-4">
                <PopularSongs />
                <div className="flex w-full 2xl:flex-col 2xl:w-[40%]">
                    <div className="w-1/2 2xl:w-auto">
                        <div className="text-2xl font-bold py-2">Liked Songs</div>
                        <div className="flex">
                            <img src={alleyezonme} className="rounded-full max-h-28"/>
                            <div className="my-auto mx-4">
                                <h4 className="max-w-[150px] md:max-w-[250px] truncate">
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
                                <h4 className="max-w-[150px] md:max-w-[250px] truncate">
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