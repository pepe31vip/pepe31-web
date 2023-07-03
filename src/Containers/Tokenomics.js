import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Poppins } from "next/font/google";
import dance from "../../public/assets/dance.gif";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "600", subsets: ["latin"] });

export default function Tokenomics({ id }) {
  return (
    <>
      <div className={poppins500.className}>
        <div className="flex flex-col py-12">
          <div className="text-[#D2042D] text-3xl md:text-6xl pb-4 pt-12">TOKENOMICS</div>
          <div className="w-full h-[1px] bg-gray-700"></div>
        </div>
      </div>
      <div
        id={id}
        className="px-20  md:flex md:mb-0 mb-24 text-xl justify-between md:justify-start md:items-center w-full h-full  "
      >
        <div className="w-full h-1/2 md:h-full md:flex  items-center md:pl-24 text-black justify-around ">
          <Image className="shrink-0 mb-24" width={450} src={dance}></Image>
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
              className="flex flex-col mb-0 md:mb-48 w-full text-white"
            >
              <div className="flex flex-col w-full text-start text-[#D0D2D0] space-y-3 ">
                <div className={poppins500.className}>
                  <div className="text-xl md:text-3xl ">Contract Address</div>
                </div>
                <div className={poppins.className}>
                  <div className="text-base break-words	">
                    0x000000000000000000000000000000000
                  </div>
                </div>
                <div className={poppins500.className}>
                  <div className="text-xl md:text-3xl ">Total Supply</div>
                </div>
                <div className={poppins.className}>
                  <div className="text-base">420,690,000,000,000</div>
                </div>
                <div className={poppins500.className}>
                  <div className="text-xl md:text-3xl ">Taxes</div>
                </div>
                <div className={poppins.className}>
                  <div className="text-base">1%</div>
                </div>
                <div className={poppins500.className}>
                  <div className="text-xl md:text-3xl ">Security</div>
                </div>
                <div className={poppins.className}>
                  <div className="text-base">Ownership Renounced</div>
                </div>

                <div className="w-full h-[1px] bg-gray-700"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
