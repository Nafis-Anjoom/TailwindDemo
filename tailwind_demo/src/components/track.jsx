import alleyezonme from "../images/Alleyezonme.jpg";

export default function Track() {
    return (
        <div className="track flex items-center h-14 mr-6 hover:bg-[#383838]">
            <div className="track-num">1</div>
            <img className="h-14 mr-3 py-1" src={alleyezonme} alt=""/>
            <div className="w-60">When Thugs Cry</div>
            <div className="w-56">Until The End Of Time</div>
            <div className="w-24 text-right">4:22</div>
        </div>
    );
}