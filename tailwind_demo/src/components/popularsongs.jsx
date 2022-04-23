import Track from "./track";

export default function PopularSongs() {
    return (
        <div className="sm:w-full 2xl:w-[80%]">
            <div className="text-white text-2xl font-bold py-2">Popular songs</div>
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