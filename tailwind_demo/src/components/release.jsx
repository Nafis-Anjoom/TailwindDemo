import alleyezonme from "../images/Alleyezonme.jpg";

export default function Release() {
    return (
        <div className="p-4 bg-slate-300 w-fit h-fit m-2">
            <div>
                <img src={alleyezonme} alt="" className="max-h-48"/>
            </div>
            <div>
                <h4 className="text-white text-sm max-w-[150px] md:max-w-[250px] truncate">
                    All Eyes On Me
                </h4>
                <h5 className="text-xs text-[rgb(179,179,179)]">
                    Tupac
                </h5>
            </div>
        </div>
    );
}