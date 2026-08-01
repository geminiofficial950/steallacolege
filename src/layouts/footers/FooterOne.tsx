"use client";
import Social from "@/components/common/Social";
import FooterCommon from "./FooterCommon";
import Image from "next/image";
import Link from "next/link";

import country1 from "@/assets/img/country/image.png";
import country2 from "@/assets/img/country/image1.png";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

interface StyleType {
  style?: boolean;
  style_2?: boolean;
}

const officeLocations = [
  {
    state: "Victoria",
    locations: [
      "609/365 Little Collins Street, Melbourne VIC 3000",
      "36 Western Road, Cohuna VIC 3568",
    ],
  },
  {
    state: "Western Australia",
    locations: [
      "22 Ormsby Terrace, Mandurah WA 6210",
      "19–21 Kent Street, Busselton WA",
      "Lake Grace CRC, Corner Bishop St & School Place, Lake Grace WA 6353",
      "Suite 9, 110 Hay Street, Subiaco WA 6008",
      "UCMAS Building, Shop 2, 365 High Road, Riverton WA 6148",
    ],
  },
];

const FooterOne = ({ style, style_2 }: StyleType) => {
  return (
    <footer
      className={`footer__area ${
        style_2 ? "footer__area-five" : style ? "footer__area-two" : ""
      }`}
    >
      <div className={`footer__top ${style_2 ? "footer__top-three" : ""}`}>
        <div className="container">
          <div className="row align-items-start">
            <FooterCommon />
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title">Connect with us</h4>

                <ul className="list-wrap footer__contact-list">
                  <li>
                    <FaPhoneAlt />
                    <a href="tel:1800069877">1800 069 877</a>
                  </li>
                  <li>
                    <FaPhoneAlt />
                    <a href="tel:0871001320">(08) 7100 1320</a>
                  </li>
                  <li>
                    <FaPhoneAlt />
                    <a href="tel:61411620815">+61 411 620 815</a>
                  </li>
                  <li>
                    <MdOutlineMarkEmailUnread />
                    <a href="mailto:info@stellacollege.edu.au">
                      info@stellacollege.edu.au
                    </a>
                  </li>
                </ul>

                <ul className="list-wrap footer__social mt-2">
                  <Social />
                </ul>
              </div>
            </div>
          </div>

          <div className="footer__locations-bar">
            <div className="footer__locations-bar-head">
              <FaMapMarkerAlt />
              <span>Our Locations</span>
            </div>
            <div className="row g-4">
              {officeLocations.map(({ state, locations }) => (
                <div className="col-lg-6" key={state}>
                  <div className="footer__locations-group">
                    <span className="footer__locations-state">{state}</span>
                    <ul className="footer__locations-list">
                      {locations.map((address) => (
                        <li key={address}>
                          <Link
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              address,
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${address} on Google Maps`}
                          >
                            {address}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {style_2 && (
          <div
            className="footer__shape"
            style={{
              backgroundImage: `url(/assets/img/others/h8_footer_shape.svg)`,
            }}
          ></div>
        )}
      </div>

      <div className={`footer__bottom ${style_2 ? "footer__bottom-four" : ""}`}>
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-9">
              <div className="copy-right-text">
                <div className="country-section">
                  <div className="flags-container">
                    <Image
                      src={country1}
                      alt="Aboriginal Flag"
                      width={100}
                      height={100}
                      className="flag-img"
                    />
                    <Image
                      src={country2}
                      alt="Torres Strait Islander Flag"
                      width={100}
                      height={100}
                      className="flag-img"
                    />
                  </div>
                  <p className="country-text">
                    Stella College acknowledges Aboriginal Traditional Owners of
                    Country throughout Victoria and pays respect to their
                    cultures and Elders past and present.
                  </p>
                </div>
                <p>
                  Training practical solutions consultancy Pty Ltd t/a Stella
                  College
                </p>
                <p>© 2025 stellacollege.edu.au All rights reserved.</p>
                <p className="footer__legal-note">
                  All product names, logos, and brands are property of their
                  respective owners. All company, product and service names used
                  in this website are for identification purposes only. Use of
                  these names, logos, and brands does not imply endorsement.
                  Google and the Google logo are trademarks of Google LLC
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer__bottom-menu">
                <ul className="list-wrap text-white">
                  <li>
                    <Link href="/terms-of-use">Terms of Use</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
