import Track from "./track";

export default function PopularSongs() {
    return (
        <div className="sm:w-full 2xl:w-[75%]">
            <div className="text-white text-xl font-bold py-2">Popular songs</div>
            <div className="overflow-y-auto">
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
            </div>
        </div>
    );
}