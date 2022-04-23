import avatar from '../images/avatar.png';

export default function Sidebar() {
    return (
        <div className="sidebar fixed px-7 top-0 left-0 h-screen m-0 flex flex-col bg-black text-white">
            <div>
                <img className="max-h-14 max-w-14" src={avatar} alt="avatar"/>
            </div>
            <div>
                <div>Browse</div>
                <div>Radio</div>
                <div>Home</div>
            </div>
            <div className="my-10">
                <div>My songs</div>
                <div>Recently played</div>
                <div>Recommended</div>
                <div>Artists</div>
                <div>Albums</div>
                <div>Artists</div>
            </div>
        </div>
    );
}