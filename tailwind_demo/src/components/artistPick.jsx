export default function ArtistPick(props) {
    return <div className="w-1/2 2xl:w-auto">
        <div className="text-2xl font-bold py-2">Artist pick</div>
        <div className="flex">
            <img src={props.cover} className="max-h-28" />
            <div className="my-auto mx-4">
                <h4 className="font-bold truncate hover:underline hover:cursor-pointer">
                    {props.name}
                </h4>
                <h5 className="text-sm text-[rgb(179,179,179)]">
                    {props.type}
                </h5>
            </div>
        </div>
    </div>;
}
