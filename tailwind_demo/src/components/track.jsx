export default function Track(props) {
    return (
        <div className="track flex items-center h-14 mr-6 hover:bg-[#383838]">
            <div className="track-num">{props.index}</div>
            <img className="h-14 mr-3 py-1" src={props.cover} alt={props.album}/>
            <div className="w-60">{props.name}</div>
            <div className="w-56">{props.listens}</div>
            <div className="w-24 text-right">{props.duration}</div>
        </div>
    );
}