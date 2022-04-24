export default function Release(props) {
    return (
        <div className="bg-[#232323] p-4 pb-8 w-fit h-fit m-2 hover:bg-[#383838] rounded-md">
            <div className="h-48 w-48">
                <img src={props.cover} alt="" className="h-full w-full"/>
            </div>
            <div>
                <h4 className="max-w-[150px] md:max-w-[250px] truncate">
                    {props.name}
                </h4>
                <h5 className="text-sm text-[rgb(179,179,179)]">
                    <span>{props.releaseYear}</span>
                    <span className="before:content-['•'] before:mx-[4px]">{props.type}</span>
                </h5>
            </div>
        </div>
    );
}