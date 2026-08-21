"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/logo/23.png";

const FooterCommon = () => {
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="footer__widget">
          <div className="logo mb-25">
            <Link href="/">
              <Image
                src={logo}
                width={180}
                height={180}
                priority
                quality={75}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="footer__content">
            <p>
              Stella College is an Australian EdTech institution providing world
              class, industry relevant education focused on the skills that
              truly matter for today’s learners and tomorrow’s leaders.
            </p>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div className="footer__widget">
          <h4 className="footer__widget-title">Useful Links</h4>
          <div className="footer__link">
            <ul className="list-wrap">
              <li>
                <Link href="/about-us">Our values</Link>
              </li>
              <li>
                <Link href="/forms">Forms</Link>
              </li>
              <li>
                <Link
                  href="https://stellalearn.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portal login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div className="footer__widget">
          <h4 className="footer__widget-title">Our Company</h4>
          <div className="footer__link">
            <ul className="list-wrap">
              <li>
                <Link href="/about-us">About Stella College</Link>
              </li>
              <li>
                <Link href="/partner">Partners & Affiliates</Link>
              </li>
              <li>
                <Link href="/career">Careers at Stella</Link>
              </li>
              <li>
                <Link href="/blog">Blog & Newsroom</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCommon;
