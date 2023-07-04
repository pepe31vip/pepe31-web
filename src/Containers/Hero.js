import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Poppins } from "next/font/google";
import logo from "../../public/assets/1.png";
import { SocialIcon } from "react-social-icons";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "600", subsets: ["latin"] });

export default function Hero({ id }) {
  return (
    <div
      id={id}
      className="px-20  md:flex md:mb-0 mb-24 text-xl justify-between md:justify-start md:items-center w-screen h-screen  "
    >
      <div className="w-full h-1/2 md:h-full md:flex  items-center md:pl-24 text-black justify-center md:justify-between">
        <Image className="shrink-0 mb-24" width={400} src={logo}></Image>
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
                <div className="text-[80px] md:text-[120px]">PEPE 3.1</div>
                <div className="pt-12 text-[26px]">
                  Missed $PEPE, $PEPE2.0 and even $PEPE3? Here is your LAST chance
                </div>
                <div className={poppins500.className}>
                  <div className="flex space-x-4 items-center">
                  <div className="px-4 text-[#f3fbfa] bg-[#D2042D] rounded-xl flex items-center py-4 justify-center hover:bg-[#FF0000] ">
                    <Link href="https://app.uniswap.org/#/swap?outputCurrency=0xcd7a6C2838c2054aE493b8c028B3F2538E28CC70">BUY $PEPE 3.1</Link>
                  </div>
                  <SocialIcon network="twitter" bgColor="white" url="https://twitter.com/pepe31coineth"></SocialIcon>
                  <SocialIcon network="telegram" bgColor="white" url="https://t.me/pepe31portal"></SocialIcon>
                
                  </div>
                </div>  <div><span className="text-[#D2042D]">Contract Address:</span> 0xcd7a6C2838c2054aE493b8c028B3F2538E28CC70 </div>
                <div className="w-full h-[1px] bg-gray-700"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
