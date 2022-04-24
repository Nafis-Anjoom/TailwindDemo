import alleyezonme from "../images/Alleyezonme.jpg";

export default function Release() {
    return (
        <div className="bg-[#232323] p-4 w-fit h-fit m-2 hover:bg-[#383838]">
            <div>
                <img src={alleyezonme} alt="" className="max-h-48"/>
            </div>
            <div>
                <h4 className="max-w-[150px] md:max-w-[250px] truncate">
                    All Eyes On Me
                </h4>
                <h5 className="text-sm text-[rgb(179,179,179)]">
                    Tupac
                </h5>
            </div>
        </div>
    );
}