import PopularSongs from "./popularsongs";
import Release from "./release";
import Banner from "./banner";
import { IoMdPlay } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

import joey from "../images/joey.jpg";
import loveCover from "../images/loveCover.jpg";
import allAmerikkkanCover from "../images/allAmerikkkanCover.jpg";
import ninteenCover from "../images/1999Cover.jpg";
import headHighCover from "../images/headHighCover.jpg";
import escapeFromNyCover from "../images/escapeFromNyCover.jpg";
import b4daCover from "../images/b4daCover.jpg";
import summerKnightsCover from "../images/summerKnightsCover.jpg";
import LikedSongs from "./likedSongs";
import ArtistPick from "./artistPick";


export default function Body() {
    const popularReleases = [
        {
            "name": "Head High",
            "releaseYear": "Latest Release",
            "type": "Single",
            "cover": headHighCover
        },
        {
            "name": "Love Is Only a Feeling",
            "releaseYear": "2017",
            "type": "Single",
            "cover": loveCover
        },
        {
            "name": "ALL-AMERIKKKAN BADA$$",
            "releaseYear": "2017",
            "type": "Album",
            "cover": allAmerikkkanCover
        },
        {
            "name": "1999",
            "releaseYear": "2012",
            "type": "Album",
            "cover": ninteenCover
        }
    ];

    const albums = [
        {
            "name": "Escape From New York",
            "releaseYear": "2019",
            "cover": escapeFromNyCover
        },
        {
            "name": "ALL-AMERIKKKAN BADA$$",
            "releaseYear": "2017",
            "cover": allAmerikkkanCover
        },
        {
            "name": "B4.DA.$$",
            "releaseYear": "2015",
            "cover": b4daCover
        },
        {
            "name": "Summer Knights",
            "releaseYear": "2013",
            "cover": summerKnightsCover
        }
    ];

    return (
        <>
            <div className="sm:pl-20 lg:pl-52">
                <Banner />
            </div>
            <div className="pl-5 pb-10 sm:pl-28 lg:pl-56">
                <div className="flex items-center mt-7 space-x-9">
                    <button className="bg-[#18b153] p-3 rounded-full text-center hover:bg-[#21df6a]">
                        <div>
                            <span className="flex relative left-1">
                                <IoMdPlay size={37} color="black" className=""/>
                            </span>
                        </div>
                    </button>
                    <button className="border-[1.5px] border-[#686868] py-1.5 px-3 rounded-md font-semibold hover:border-white">Follow</button>
                    <button className="opacity-40 hover:opacity-100"><BsThreeDots size={30} /></button>
                </div>
                <div className="flex flex-col 2xl:flex-row mt-4">
                    <PopularSongs />
                    <div className="flex flex-col md:flex-row 2xl:flex-col 2xl:w-[40%] w-full">
                        <LikedSongs cover={joey} artist="Joey Bada$$" likeCount={52}/>
                        <ArtistPick cover={headHighCover} name="Head High" type="Single" />
                    </div>
                    
                </div>
                <div className="space-y-5">
                    <div className="space-y-3">
                        <div className="text-2xl font-bold py-2">Popular releases</div>
                        <div className="flex overflow-y-auto space-x-3">
                            {popularReleases.map((release) => <Release {...release} />)}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="text-2xl font-bold py-2">Albums</div>
                        <div className="flex overflow-y-auto space-x-3">
                            {albums.map((album) => <Release {...album} type="Album" />)}
                        </div> 
                    </div>
                </div>  
            </div>
        </>
    );
}



