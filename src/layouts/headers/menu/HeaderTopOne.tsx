import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import icon_2 from "@/assets/img/icons/envelope.svg";

interface StyleType {
  style?: boolean;
}

const HeaderTopOne = ({ style }: StyleType) => {
  return (
    <div className="tg-header__top">
      <div className={`container ${style ? "" : "custom-container"}`}>
        <div className="row">
          <div className="col-12">
            <div className="tg-header__top-right header-top-one-actions">
              <a
                href="mailto:info@stellacollege.edu.au"
                className="header-top-one-actions__icon"
                aria-label="Email info@stellacollege.edu.au"
              >
                <Image src={icon_2} alt="" width={14} height={11} />
              </a>
              <a
                href="tel:1800069877"
                className="header-top-one-actions__icon"
                aria-label="Call 1800 069 877"
              >
                <FaPhoneAlt aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopOne;
