import { FaCamera, FaFirefoxBrowser, FaUserFriends } from "react-icons/fa";
const Feature = (props) => {
  return (
    <div>
      <div className="max-w-[624px]">
        <div className="text-[#1676F8] text-[14px]">Special Features</div>
        <div className="mt-[12px] font-bold text-[32px]">
          Our algorithm guarantees players have played before leaving a review.
          Good or Bad!
        </div>
      </div>
      <div className="mt-[48px] sm:flex gap-8 justify-between">
        <div className="p-[20px] sm:w-1/3">
          <div className="my-[12px] text-[#1676F8]">
            <FaCamera />
          </div>
          <div className="mt-[32px]">
            <div className="font-semibold text-[20px]">Instant payments</div>
            <div className="mt-[20px] text-[#6B7280] font-medium text-[16px]">
              Tortor interdum condimentum nunc molestie quam lectus euismod
              pulvinar risus. Cursus in odio aenean.
            </div>
          </div>
        </div>
        <div className="p-[20px] sm:w-1/3">
          <div className="my-[12px] text-[#1676F8]">
            <FaFirefoxBrowser />
          </div>
          <div className="mt-[32px]">
            <div className="font-semibold text-[20px]">Higher winnings</div>
            <div className="mt-[20px] text-[#6B7280] font-medium text-[16px]">
              Tortor interdum condimentum nunc molestie quam lectus euismod
              pulvinar risus. Cursus in odio aenean.
            </div>
          </div>
        </div>
        <div className="p-[20px] sm:w-1/3">
          <div className="my-[12px] text-[#1676F8]">
            <FaUserFriends />
          </div>
          <div className="mt-[32px]">
            <div className="font-semibold text-[20px]">Full Transparency</div>
            <div className="mt-[20px] text-[#6B7280] font-medium text-[16px]">
              Tortor interdum condimentum nunc molestie quam lectus euismod
              pulvinar risus. Cursus in odio aenean.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
