import { BiGlobe, BiLogoFacebook, BiLogoTelegram, BiLogoYoutube, BiPhone, BiShowAlt } from "react-icons/bi";
import { FaTerminal, FaMapMarker } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { List } from "flowbite-react";
import { BsChat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function AboutUs() {
    return (
        <section className="container mt-24 mx-auto flex flex-col w-3/4 items-center py-4"> 
            <div className="bg-white rounded-lg shadow-md p-3 w-full mb-5">
                <h1 className="flex items-center text-lg font-memibold tracking-wide mb-4">
                    <FaTerminal className="mr-2" />WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?
                </h1>
                <p>
                CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company. CSTAD will continue to provide high-quality training with the latest methodology, and roadmap as well as the best choice for those who want to be an IT expert in Cambodia.
                </p>
                <div className="grid place-content-center py-4">
                    <img src="https://istad.co/resources/img/logo_md.png" className="w-80"/>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-3 w-full mb-5">
                <h1 className="flex items-center text-lg font-bold tracking-wide mb-4">
                    <BiShowAlt className="mr-2" />VISION
                </h1>
                <p>
                    Advanced IT Institute in Cambodia
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-3 w-full mb-5">
                <h1 className="flex items-center text-lg font-bold tracking-wide mb-4">
                    <GoGoal className="mr-2" />MISSION
                </h1>
                <List>
                    <List.Item>Provide the latest methodology with high quality training and mentoring</List.Item>
                    <List.Item>Build up the capacity and career of IT experts Cambodia</List.Item>
                    <List.Item>Consult and connect CSTAD trainees to top IT careers</List.Item>
                </List>
            </div>

            <div className="bg-white rounded-lg shadow-md p-3 w-full mb-5">
                <h1 className="flex items-center text-lg font-bold tracking-wide mb-4">
                    <BsChat className="mr-2" />SLOGAN
                </h1>
                <p>
                    Start your IT Career with CSTAD
                </p>
            </div>  

            <h1 className="uppercase text-2xl w-full font-bold text-center text-[#253c95] tracking-wider mt-8 mb-5">IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.</h1>
            
            <div className="bg-white rounded-lg shadow-md p-3 w-full mb-5">
                <p className="flex items-center gap-2"><FaMapMarker/>No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh, Cambodia</p>
                <p className="flex items-center gap-2"><BiPhone/>(+855) 95 990 910 | (+855) 93 990 910</p>
                <p className="flex items-center gap-2"><BiLogoTelegram/>Telegram Channel</p>
                <p className="flex items-center gap-2"><BiLogoFacebook/>Facebook</p>
                <p className="flex items-center gap-2"><MdEmail/>info.istad@gmail.com</p>
                <p className="flex items-center gap-2"><BiGlobe/>www.istad.co</p>
                <p className="flex items-center gap-2"><BiLogoYoutube/>YouTube</p>
            </div>
        </section>
    );
}
