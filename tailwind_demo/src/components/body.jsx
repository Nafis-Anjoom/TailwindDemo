import PopularSongs from "./popularsongs";
import Release from "./release";
import Banner from "./banner";

export default function Body() {
    return (
        <div className="bg-[#d40000] lg:pl-44">
            <Banner />
            <div className="md:flex">
                <PopularSongs />
            </div>
            <div className="text-white text-xl font-bold py-2">Popular releases</div>
            <div className="flex">
                <Release />
                <Release />
                <Release />
                <Release />
            </div>
            
        </div>
    );
}