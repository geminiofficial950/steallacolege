"use client";
import Link from "next/link";
import HeaderTopOne from "./menu/HeaderTopOne";
import Image from "next/image";
import NavMenu from "./menu/NavMenu";
import React, { useState, useEffect } from "react";
import MobileSidebar from "./menu/MobileSidebar";
import InjectableSvg from "@/hooks/InjectableSvg";
import dynamic from "next/dynamic";
import logo from "@/assets/img/logo/23.png";
import logo1 from "@/assets/img/logo/stella_logo.webp";
import { FaPhoneAlt } from "react-icons/fa";
import StudentSupportForm from "./StudentSupportForm";

const CustomSelect = dynamic(() => import("@/ui/CustomSelect"), { ssr: false });

const HeaderOne = () => {
  const [supportFormOpen, setSupportFormOpen] = useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [supportOpen, setSupportOpen] = useState(false);
  const handleSelectChange = (option: React.SetStateAction<null>) => {
    setSelectedOption(option);
  };
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    const handler = () => setSupportOpen(true);
    window.addEventListener("open-support-form", handler);
    return () => window.removeEventListener("open-support-form", handler);
  }, []);
  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          width: "100%",
        }}
      >
        {/* Top header with contact info - hidden on mobile */}
        <div className="d-none d-lg-block">
          <HeaderTopOne />
        </div>

        {/* Logo - fixed in top left */}
        <div
          className="floating-logo d-none d-lg-block"
          style={{
            position: "fixed",
            top: "20px",
            left: "25px",
            zIndex: 10000,
          }}
        >
          <Link href="/">
            <Image
              src={logo}
              width={220}
              height={100} // ✅ FIX (not 220)
              style={{ height: "auto" }} // 🔥 keeps ratio
              priority
              quality={75}
              alt="Stella College logo"
            />
          </Link>
        </div>

        {/* Main navigation header */}
        <div
          id="sticky-header"
          style={{ background: "#161439", padding: "20px" }}
          className="tg-header__area"
        >
          <div
            className="custom-container"
            style={{ paddingRight: 0, paddingLeft: 0, maxWidth: "100%" }}
          >
            <div className="row" style={{ marginRight: 0 }}>
              <div className="col-12" style={{ paddingRight: 0 }}>
                <div className="tgmenu__wrap" style={{ paddingRight: 0 }}>
                  <nav
                    className="tgmenu__nav"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      position: "relative",
                      paddingRight: 0,
                      marginRight: 0,
                    }}
                  >
                    {/* Logo for mobile - shows only on small screens */}
                    <div className="logo d-lg-none" style={{ flexShrink: 0 }}>
                      <Link href="/">
                        <Image
                          src={logo1}
                          width={120}
                          height={60} // ✅ FIX: use correct ratio (example)
                          style={{ height: "auto" }} // 🔥 prevents distortion
                          priority
                          quality={75}
                          alt="Stella College logo"
                        />
                      </Link>
                    </div>

                    {/* Empty space for logo on desktop (since logo is absolute) */}
                    <div
                      className="d-none d-lg-block"
                      style={{ width: "220px", flexShrink: 0 }}
                    ></div>

                    {/* CENTER: Navigation Menu - absolutely centered (desktop only) */}
                    <div
                      className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex"
                      style={{
                        position: "absolute",
                        left: "40%",
                        transform: "translateX(-50%)",
                        zIndex: 9999,
                      }}
                    >
                      <NavMenu />
                    </div>

                    {/* RIGHT: Search + Actions - desktop only */}
                    <div
                      className="d-none d-lg-flex"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginLeft: "auto",
                      }}
                    >
                      {/* Search Dropdown */}
                      <div
                        className="tgmenu__search d-none d-md-block"
                        style={{ margin: 0, padding: 0 }}
                      >
                        <CustomSelect
                          value={selectedOption}
                          onChange={handleSelectChange}
                        />
                      </div>

                      {/* Action buttons */}
                      <div
                        className="tgmenu__action"
                        style={{ margin: 0, padding: 0 }}
                      >
                        <ul
                          className="list-wrap"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            margin: 0,
                            padding: 0,
                            listStyle: "none",
                          }}
                        >
                          <li
                            className="header-btn login-btn"
                            style={{ margin: 0, padding: "0 0 0 8px" }}
                          >
                            <Link
                              href="https://stellalearn.com.au"
                              target="_blank"
                            >
                              Log in
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Mobile elements - show only on mobile */}
                    <div className=" d-lg-none">
                      <a href="tel:1800069877" style={{ color: "#d4a952" }}>
                        <FaPhoneAlt /> 1800 069 877
                      </a>
                    </div>

                    <div
                      onClick={() => setIsActive((prev) => !prev)}
                      className="mobile-nav-toggler d-lg-none"
                    >
                      <i
                        className={
                          isActive
                            ? "tg-flaticon-close-1"
                            : "tg-flaticon-menu-1"
                        }
                      ></i>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add padding to body to account for fixed header */}
      <div style={{ paddingTop: "100px" }}>
        <MobileSidebar isActive={isActive} setIsActive={setIsActive} />
      </div>
      <StudentSupportForm
        isOpen={supportOpen}
        onClose={() => setSupportOpen(false)}
      />
    </>
  );
};

export default HeaderOne;
