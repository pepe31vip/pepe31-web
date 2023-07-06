import Image from "next/image";
import dance2 from "../../public/assets/dance2.gif";

import { Poppins } from "next/font/google";
import logo from "../../public/assets/1.png";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import dextools from "../../public/assets/dextools.png";
import etherscan from "../../public/assets/etherscan.png";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "700", subsets: ["latin"] });

export default function Community({ id }) {
  return (
    <div
      id={id}
      className="w-full h-full bg-[#D2042D] text-center px-4 justify-center items-center flex flex-col py-24"
    >
      <Image src={dance2} width={300}></Image>
      <div className={poppins500.className}>
        <div className="text-5xl pt-12">
          Join the Pepe 3.1 revolution and meme your way to the future of
          finance!
        </div>
        <div className="w-full h-[2px] mt-4 bg-black"></div>
        <div className="space-x-8 py-8 flex w-full justify-center">
          <SocialIcon
            network="twitter"
            bgColor="black"
            url="https://twitter.com/pepe31coineth"
            style={{ width: 64, height: 64 }}
          />
          <SocialIcon
            network="telegram"
            bgColor="black"
            url="https://t.me/pepe31portal"
            style={{ width: 64, height: 64 }}
          />

          <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0xe4aeff512a7e55bacb02406294b9d217d9a663ea">
            <Image src={dextools} width={70}></Image>
          </Link>
          <Link href="https://etherscan.io/token/0xcd7a6c2838c2054ae493b8c028b3f2538e28cc70">
            <Image src={etherscan} width={70}></Image>
          </Link>
        </div>
        <div>
          <span className="text-black uppercase">contact us ! : </span>{" "}
          team@pepe31.vip
        </div>
      </div>
    </div>
  );
}
