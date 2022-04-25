export default function Track(props) {
    return (
        <div className="track flex items-center h-14 mr-6 hover:bg-[#383838]">
            <div className="flex-none grow-0 py-1 px-4">{props.index}</div>
            <div className="h-14 w-14 mr-3 py-1">
                <img className="h-full w-full" src={props.cover} alt={props.album}/>
            </div>
            <div className="flex-grow truncate py-1 px-4 w-60">{props.name}</div>
            <div className="flex-grow truncate py-1 px-4 w-56 hidden sm:inline-block">{props.listens}</div>
            <div className="flex-grow truncate py-1 px-4 w-24 text-right">{props.duration}</div>
        </div>
    );
}