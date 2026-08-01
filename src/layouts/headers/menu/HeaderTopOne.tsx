import Image from "next/image"
import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa";
import icon_1 from "@/assets/img/icons/map_marker.svg"
import icon_2 from "@/assets/img/icons/envelope.svg"
import icon_3 from "@/assets/img/icons/phone.svg"
import InjectableSvg from "@/hooks/InjectableSvg";

interface StyleType {
   style?: boolean;
}

const HeaderTopOne = ({ style }: StyleType) => {
   return (
      <div className="tg-header__top">
         <div className={`container ${style ? "" : "custom-container"}`}>
            <div className="row">
               <div className="col-lg-6">
                  <ul className="tg-header__top-info list-wrap">
                     {/* Left side - can be empty or add other content */}
                  </ul>
               </div>
               <div className="col-lg-6">
                  <div className="tg-header__top-right flex items-center justify-end space-x-6 whitespace-nowrap w-full min-w-max">
                     {/* Email */}
                     <div className="tg-header__contact flex">
                        <Image src={icon_2} alt="Icon" style={{ marginRight: "8px" ,height: "11px",marginTop: '4px' }} />
                        <Link
                           href="mailto:info@stellacollege.edu.au"
                           style={{ color: "white", textDecoration: "none", fontSize: "14px", marginTop: '4px' }}
                        >
                           info@stellacollege.edu.au
                        </Link>
                     </div>
                     {/* Phone */}
                     <div className="tg-header__phone">
                        {/* <Image src={icon_3} alt="Icon" /> */}
                        <FaPhoneAlt style={{ height: "11px", marginRight: "3px",marginTop: '4px' }} />
                        <Link href="tel:1800069877" style={{ fontSize: "14px", marginTop: '4px' }}>1800 069 877</Link>
                     </div>
                     {/* Social Media */}
                     <ul className="tg-header__top-social list-wrap">
                        <li style={{ color: 'white',fontSize: "12px" }}>Follow Us On :</li>

                        <li>
                           <Link
                              href="https://www.facebook.com/profile.php?id=61583405805847"
                              aria-label="Visit our Facebook page"
                              className="d-flex justify-content-center align-items-center p-2 me-2 rounded"
                           >
                           <i className="fab fa-facebook-f" style={{ fontSize: "12px" }}></i>
                           </Link>
                        </li>

                        <li>
                           <Link
                              href="https://www.linkedin.com/company/training-practical-solutions-consultancy/"
                              aria-label="Visit our LinkedIn page"
                              className="d-flex justify-content-center align-items-center p-2 me-2 rounded"
                           >
                              <i className="fab fa-linkedin-in" style={{ fontSize: "12px" }}></i>
                           </Link>
                        </li>

                        <li>
  <Link
    href="https://www.instagram.com/stella.college/?igsh=a2lhbjYyNmk2amlo&utm_source=qr#"
    target="_blank"
    aria-label="Visit our Instagram page"
    className="d-flex justify-content-center align-items-center me-2 rounded"
    style={{ width: "28px", height: "18px" }}
  >
    <div style={{ width: "14px", height: "26px" }}>
  <InjectableSvg
    src="/assets/img/icons/instagram.svg"
    alt="Instagram Icon"
    className="injectable"
  />
</div>
  </Link>
</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopOne