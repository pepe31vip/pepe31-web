
import Image from "next/image";
import dance2 from "../../public/assets/dance2.gif";

import { Poppins } from "next/font/google";
import logo from "../../public/assets/1.png";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "700", subsets: ["latin"] });

export default function Community(){
    return(
        <div className="w-full h-full bg-[#D2042D] text-center px-4 justify-center items-center flex flex-col py-24">
            <Image src={dance2} width={300} ></Image>
            <div className={poppins500.className}>
            <div className="text-5xl pt-12">Join the Pepe 3.1 revolution and meme your way to the future of finance!</div>
            <div className="w-full h-[2px] mt-4 bg-black"></div>

            </div>
        </div>
    )
}