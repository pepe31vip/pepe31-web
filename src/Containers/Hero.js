import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Poppins } from "next/font/google";
import logo from "../../public/assets/1.png";
import { SocialIcon } from "react-social-icons";
import dextools from "../../public/assets/dextools.png";
import etherscan from "../../public/assets/etherscan.png";
import uniswap from "../../public/assets/uniswap.png";
import uncx from "../../public/assets/uncx.png";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "600", subsets: ["latin"] });

export default function Hero({ id }) {
  return (
    <div
      id={id}
      className="px-20  md:flex md:mb-0 mb-24 text-xl justify-between md:justify-start md:items-center w-screen h-screen  "
    >
      <div className="w-full h-1/2 md:h-full md:flex  items-center md:pl-24 text-black justify-center md:justify-between">
        <div className="flex flex-col">
        <Image className="shrink-0 mb-24" width={400} src={logo}></Image>
        <div className="flex flex-col w-full items-center text-center justify-center text-white">
          <div className={poppins500.className}>
          <div className="md:text-3xl text-xl py-4">LIQUIDITY 100% LOCKED ✅✅✅</div>
          <div className="md:text-3xl text-xl ">CONTRACT RENOUNCED ✅✅✅</div>
          <div className="md:text-3xl text-xl py-4">READY FOR MOON! 🚀</div>
          </div>
        </div></div>

        <div className={poppins.className}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
            className="flex flex-col mb-0 md:mb-48 text-white"
          >
            <div className={poppins500.className}>
              <div className="flex flex-col items-center text-center text-[#D0D2D0] space-y-6 justify-center">
                <div className="text-xl md:text-3xl  py-8 md:px-16">
                  Welcome to
                </div>
                <div className="text-[60px] md:text-[120px]">PEPE 3.1</div>
                <div className="pt-12 text-[26px]">
                  Missed $PEPE, $PEPE2.0 and even $PEPE3? Here is your LAST
                  chance
                </div>
                <div className={poppins500.className}>
                  <div className="flex space-x-8 items-center justify-center">
                    <div className="px-4 text-[#f3fbfa] bg-[#D2042D] rounded-xl flex items-center py-4 my-4 justify-center hover:bg-[#FF0000] ">
                      <Link
                        className="text-sm sm:text-base md:text-3xl"
                        href="https://app.uniswap.org/#/swap?outputCurrency=0xcd7a6C2838c2054aE493b8c028B3F2538E28CC70"
                      >
                        🦄 BUY $PEPE 3.1
                      </Link>
                    </div>
                  </div>{" "}
                  <div className="flex items-center justify-center space-x-4">
                    <SocialIcon
                      network="twitter"
                      bgColor="white"
                      url="https://twitter.com/pepe31coineth"
                    ></SocialIcon>
                    <SocialIcon
                      network="telegram"
                      bgColor="white"
                      url="https://t.me/pepe31portal"
                    ></SocialIcon>
                    <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0xe4aeff512a7e55bacb02406294b9d217d9a663ea">
                      <Image src={dextools} width={70}></Image>
                    </Link>

                    <Link href="https://etherscan.io/token/0xcd7a6c2838c2054ae493b8c028b3f2538e28cc70">
                      <Image src={etherscan} width={70}></Image>
                    </Link>
                    <Link href="https://app.uniswap.org/#/swap?outputCurrency=0xcd7a6C2838c2054aE493b8c028B3F2538E28CC70">
                      <Image src={uniswap} width={70}></Image>
                    </Link>
                    <Link href="https://app.uncx.network/amm/uni-v2/pair/0xe4aeff512a7e55bacb02406294b9d217d9a663ea">
                      <Image src={uncx} width={50}></Image>
                    </Link>
                  </div>
                </div>{" "}
                <div className="text-white break-words md:text-base text-sm  ">
                  Contract Address: 0xcd7a6C2838c2054aE493b8c028B3F2538E28CC70
                </div>
                <div className="w-full h-[1px] bg-gray-700"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
