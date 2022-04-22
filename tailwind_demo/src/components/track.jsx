import alleyezonme from "../images/Alleyezonme.jpg";

export default function Track() {
    return (
        <div className="flex items-center h-14 border-b-2 border-gray-800">
            <img className="h-12 w-12 mr-3 py-1" src={alleyezonme} alt=""/>
            
            <div className="text-white flex-grow text-sm font-semibold truncate w-60">
                When Thugs Cry
            </div>
            <div className="text-white flex-grow text-sm font-semibold truncate w-56">
                Until The End Of Time
            </div>
            <div className="text-white flex-grow text-sm font-semibold truncate w-24">
                4:22
            </div>
            <div className="text-white flex-grow text-sm font-semibold truncate w-24">
                1.1M
            </div>
        </div>
    );
}