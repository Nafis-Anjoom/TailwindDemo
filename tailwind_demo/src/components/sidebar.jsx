import avatar from '../images/avatar.png';

export default function Sidebar() {
    return (
        <div className="fixed px-7 top-0 left-0 h-screen m-0 flex flex-col bg-black text-white">
            <div>
                <img className="max-h-14 max-w-14" src={avatar} alt="avatar"/>
            </div>
            <div>
                <div className="my-1 font-medium">Home</div>
                <div className="my-1 font-medium">Browse</div>
                <div className="my-1 font-medium">Radio</div>
            </div>
            <div className="my-10">
                <div className="my-1 font-medium">My songs</div>
                <div className="my-1 font-medium">Recently played</div>
                <div className="my-1 font-medium">Recommended</div>
                <div className="my-1 font-medium">Artists</div>
                <div className="my-1 font-medium">Albums</div>
                <div className="my-1 font-medium">Artists</div>
            </div>

        </div>
    );
}