import Image from "next/image";
import Bitcoin from "public/image/CryptoLogos/Bitcoin.png";
import BNB from "public/image/CryptoLogos/BNB.png";
import ETH from "public/image/CryptoLogos/ETH.png";
import Tether from "public/image/CryptoLogos/Tether.png";
import USD from "public/image/CryptoLogos/USD.png";
import XRP from "public/image/CryptoLogos/XRP.png";
import Bitcoin1 from "public/image/CryptoGames/Bitcoin.png";
import BNB1 from "public/image/CryptoGames/BNB.png";
import ETH1 from "public/image/CryptoGames/ETH.png";
import Tether1 from "public/image/CryptoGames/Tether.png";
import USD1 from "public/image/CryptoGames/USD.png";
import XRP1 from "public/image/CryptoGames/XRP.png";

import {
  SummaryCard,
  ReviewTitle,
  ReviewContent,
  CryptoCard,
  ReviewButton,
} from "./Crypto.module";

const Crypto = (props) => {
  return (
    <div className="flex w-full gap-8">
      <div className="w-[25%]">
        <SummaryCard>
          <div className="pb-14">
            <ReviewTitle>Established</ReviewTitle>
            <ReviewContent>2003</ReviewContent>
          </div>
          <div className="pb-14">
            <ReviewTitle>Casino Rewards</ReviewTitle>
            <ReviewContent>Over 12k</ReviewContent>
          </div>
          <div className="pb-14">
            <ReviewTitle>Withdrawal Limits</ReviewTitle>
            <div className="flex gap-[46px]">
              <div className="flex flex-col">
                <ReviewContent>Per month</ReviewContent>
                <ReviewContent>$$$</ReviewContent>
              </div>
              <div className="flex flex-col">
                <ReviewContent>Per week</ReviewContent>
                <ReviewContent>$$$</ReviewContent>
              </div>
            </div>
          </div>
          <div className="pb-14">
            <ReviewTitle>Licensing Authorities</ReviewTitle>
            <ReviewContent>United Kingdom (UKGC)</ReviewContent>
          </div>
          <div className="pb-14">
            <ReviewTitle>Avaialble Languages</ReviewTitle>
            <ReviewContent>English (Flag)</ReviewContent>
          </div>
        </SummaryCard>
      </div>
      <div className="w-[75%]">
        <CryptoCard>
          <ReviewTitle>Accepted Cryptos</ReviewTitle>
          <div className="flex w-full gap-10 mt-6 mb-10">
            <div className="w-1/6">
              <Image
                src={Bitcoin}
                alt="Bitcoin logo"
                layout="responsive"
              ></Image>
            </div>
            <div className="w-1/6">
              <Image src={ETH} alt="ETH logo" layout="responsive"></Image>
            </div>
            <div className="w-1/6">
              <Image src={Tether} alt="Tether logo" layout="responsive"></Image>
            </div>
            <div className="w-1/6">
              <Image src={USD} alt="USD logo" layout="responsive"></Image>
            </div>
            <div className="w-1/6">
              <Image src={BNB} alt="BNB logo" layout="responsive"></Image>
            </div>
            <div className="w-1/6">
              <Image src={XRP} alt="XRP logo" layout="responsive"></Image>
            </div>
          </div>
          <ReviewTitle>Payable Games</ReviewTitle>
          <div className="flex w-full gap-10 mt-6">
            <div className="w-1/6">
              <Image
                src={Bitcoin1}
                alt="Bitcoin logo"
                layout="responsive"
              ></Image>
            </div>
            <div className="w-1/6">
              <Image src={ETH1} alt="ETH logo" layout="responsive"></Image>
            </div>
            <div className="w-1/6">
              <Image
                src={Tether1}
                alt="Tether logo"
                layout="responsive"
              ></Image>
            </div>
            <div className="w-1/6">
              <Image src={USD1} alt="USD logo" layout="responsive"></Image>
            </div>
            <div className="w-1/6">
              <Image src={BNB1} alt="BNB logo" layout="responsive"></Image>
            </div>
            <div className="w-1/6">
              <Image src={XRP1} alt="XRP logo" layout="responsive"></Image>
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <ReviewButton>Leave a review today</ReviewButton>
          </div>
        </CryptoCard>
      </div>
    </div>
  );
};

export default Crypto;
