import { RiHome2Line, RiSearch2Line, RiHeart3Line } from "react-icons/ri";
import { BiLibrary } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { IoIosRadio } from "react-icons/io";
import { IconContext } from 'react-icons';

export default function Sidebar() {
    return (
        <div className="hidden sidebar fixed top-0 left-0 h-screen m-0 sm:flex flex-col bg-black text-white lg:w-fit">
            <div className="mt-4">
                    <IconContext.Provider value={{size: 32}}>
                        <div className="flex items-center py-2 px-7 hover:bg-[#383838] hover:cursor-pointer">
                            <RiHome2Line />
                            <span className="hidden lg:inline pl-2">Home</span>
                        </div>
                        <div className="flex items-center py-2 px-7 hover:bg-[#383838] hover:cursor-pointer">
                            <BiLibrary />
                            <span className="hidden lg:inline pl-2">Your library</span>
                        </div>
                        <div className="flex items-center py-2 px-7 hover:bg-[#383838] hover:cursor-pointer">
                            <RiSearch2Line />
                            <span className="hidden lg:inline pl-2">Search</span>
                        </div>
                        <div className="flex items-center py-2 px-7 hover:bg-[#383838] hover:cursor-pointer">
                            <CgAddR />
                            <span className="hidden lg:inline pl-2">Create playlist</span>
                        </div>
                        <div className="flex items-center py-2 px-7 hover:bg-[#383838] hover:cursor-pointer">
                            <RiHeart3Line />
                            <span className="hidden lg:inline pl-2">Liked songs</span>
                        </div>
                        <div className="flex items-center py-2 px-7 hover:bg-[#383838] hover:cursor-pointer">
                            <IoIosRadio />
                            <span className="hidden lg:inline pl-2">Saved episodes</span>
                        </div>
                    </IconContext.Provider>
                    
                
            </div>
        </div>
    );
}