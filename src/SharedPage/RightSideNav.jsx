import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import qzone1 from '../assets/images/qZone1.png';
import qzone2 from '../assets/images/qZone2.png';
import qzone3 from '../assets/images/qZone3.png';

const RightSideNav = () => {
    return (
        <div className="border-2 border-solid border-gray-300 rounded-md p-2">
            <h2 className="text-xl font-bold text-[#403F3F]">Login With</h2>
            <div className="space-y-2">
            <button className="flex items-center gap-2 py-3 border-2 border-solid border-blue-400 rounded-md btn-outline w-full">
            <FcGoogle />
            <span className="text-blue-500 font-semibold">
            Login with Google
            </span>
            </button>
            <button className="flex items-center gap-2 py-3 border-2 border-solid border-black rounded-md btn-outline w-full">
            <AiFillGithub />
            <span className="text-black font-semibold">
            Login with Github
            </span>
            </button>
            </div>
            <div>
                <h2 className="text-xl font-bold text-[#403F3F]">Find Us On</h2>
                <div >
                    <a style={{textDecoration: 'none'}} className="flex items-center gap-2 border-[1px] border-solid border-gray-400 rounded-t-lg p-2" href="">
                        <BsFacebook/>
                        <span className="text-base font-medium text-[#706F6F]">Facebook</span>
                    </a>
                    <a style={{textDecoration: 'none'}} className="flex items-center gap-2 border-x-[1px] border-solid border-y-[1px] border-gray-400 p-2" href="">
                        <BsTwitter/>
                        <span className="text-base font-medium text-[#706F6F]">Twitter</span>
                    </a>
                    <a style={{textDecoration: 'none'}} className="flex items-center gap-2 border-x-[1px] border-y-[1px] border-b-[1px] border-solid border-gray-400 rounded-b-lg p-2" href="">
                        <AiOutlineInstagram/>
                        <span className="text-base font-medium text-[#706F6F]">Instagram</span>
                    </a>
                </div>
            </div>
            <div className="bg-[#F3F3F3] rounded-sm">
                <h2 className="text-xl font-bold text-[#403F3F] ml-3 pt-3">Q-Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;