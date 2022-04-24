import { RiHome2Line, RiSearch2Line, RiHeart3Line } from "react-icons/ri";
import { BiLibrary } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { IoIosRadio } from "react-icons/io";
import { IconContext } from 'react-icons';

export default function Sidebar() {
    return (
        <div className="sidebar fixed top-0 left-0 h-screen m-0 flex flex-col bg-black text-white lg:w-fit">
            <div className="mt-4 lg:inline-block">
                    <IconContext.Provider value={{size: 32}}>
                        <div>
                            <RiHome2Line />
                            <span>Home</span>
                        </div>
                        <div>
                            <BiLibrary />
                            <span>Your library</span>
                        </div>
                        <div>
                            <RiSearch2Line />
                            <span>Search</span>
                        </div>
                        <div>
                            <CgAddR />
                            <span>Create playlist</span>
                        </div>
                        <div>
                            <RiHeart3Line />
                            <span>Liked songs</span>
                        </div>
                        <div>
                            <IoIosRadio />
                            <span>Saved episodes</span>
                        </div>
                    </IconContext.Provider>
                    
                
            </div>
        </div>
    );
}