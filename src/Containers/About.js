import Image from "next/image";
import red from "../../public/assets/redpepe2.png";

import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "600", subsets: ["latin"] });

export default function About({id}) {
  return (
    <div id={id} className=" w-full md:flex p-12 bg-[#D2042D]">
      <div className={poppins500.className}>
        <div className="w-full md:w-2/3 h-full items-center">
          <div className="flex flex-col text-5xl text-white">ABOUT</div>
          <div className="flex flex-col text-xl text-white">
            <br></br>Introducing Pepe 3.1
          </div>
          <div className="flex flex-col text-xl text-white">
            <br></br>$PEPE knows he made mistakes in the past, blacklisting some
            investors, launching on a weekend when you were spending time with
            your family and friends . He wants to make things right and redo his
            billion dollar run, he’s a new version of himself, he is now PEPE
            3.1. #PEPE31
          </div>
        </div>
      </div>
      <Image className="mr-24" src={red}></Image>
    </div>
  );
}
