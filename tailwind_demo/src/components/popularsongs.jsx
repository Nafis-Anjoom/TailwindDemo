import Track from "./track";
import loveCover from "../images/loveCover.jpg";
import allAmerikkkanCover from "../images/allAmerikkkanCover.jpg";
import ninteenCover from "../images/1999Cover.jpg";
import headHighCover from "../images/headHighCover.jpg";


export default function PopularSongs() {
    const tracks = [
        {
            "name": "Love Is Only a Feeling",
            "album": "Love Is Only a Feeling",
            "listens": "193,652,988",
            "duration": "2:32",
            "cover": loveCover
        },
        {
            "name": "DEVASTATED",
            "album": "ALL-AMERIKKKAN BADA$$",
            "listens": "288,401,451",
            "duration": "3:27",
            "cover": allAmerikkkanCover
        }, 
        {
            "name": "TEMPTATION",
            "album": "ALL-AMERIKKKAN BADA$$",
            "listens": "149,801,190",
            "duration": "4:04",
            "cover": allAmerikkkanCover
        }, 
        {
            "name": "Survival Tactics",
            "album": "1999",
            "listens": "51,401,451",
            "duration": "3:22",
            "cover": ninteenCover
        },
        {
            "name": "Head High",
            "album": "Head High",
            "listens": "5,485,942",
            "duration": "3:00",
            "cover": headHighCover
        }
    ];
    
    return (
        <div className="sm:w-full 2xl:w-[80%]">
            <div className="text-white text-2xl font-bold py-2">Popular songs</div>
            <div className="overflow-y-auto">
                {tracks.map((track, index) => {
                    return <Track {...track} index={index + 1} />
                })}
            </div>
        </div>
    );
}