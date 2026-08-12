"use client";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./menu/NavMenu";
import React, { useState, useEffect, useRef } from "react";
import MobileSidebar from "./menu/MobileSidebar";
import dynamic from "next/dynamic";
import logo from "@/assets/img/logo/23.png";
import { FiMail, FiPhone } from "react-icons/fi";
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
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!searchOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

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
        {/* Main navigation header */}
        <div
          id="sticky-header"
          className="tg-header__area header-one-bar"
        >
          <div
            className="custom-container"
            style={{ paddingRight: 0, paddingLeft: 0, maxWidth: "100%" }}
          >
            <div className="row" style={{ marginRight: 0 }}>
              <div className="col-12" style={{ paddingRight: 0 }}>
                <div className="tgmenu__wrap" style={{ paddingRight: 0 }}>
                  <nav
                    className="tgmenu__nav header-one-nav"
                  >
                    <div className="logo header-one-logo">
                      <Link href="/">
                        <Image
                          src={logo}
                          width={220}
                          height={100}
                          className="header-one-logo__img"
                          priority
                          quality={75}
                          alt="Stella College logo"
                        />
                      </Link>
                    </div>

                    {/* CENTER: Navigation Menu - desktop only */}
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu header-one-nav-center d-none d-xl-flex">
                      <NavMenu />
                    </div>

                    {/* RIGHT: Contact + Search + Actions - desktop only */}
                    <div className="header-one-actions d-none d-lg-flex">
                      <a
                        href="mailto:info@stellacollege.edu.au"
                        className="header-one-actions__btn"
                        aria-label="Email info@stellacollege.edu.au"
                      >
                        <FiMail aria-hidden="true" />
                      </a>
                      <a
                        href="tel:1800069877"
                        className="header-one-actions__btn"
                        aria-label="Call 1800 069 877"
                      >
                        <FiPhone aria-hidden="true" />
                      </a>
                      <div
                        ref={searchRef}
                        className="header-one-search d-none d-md-block"
                      >
                        <button
                          type="button"
                          className="header-one-search__toggle"
                          onClick={() => setSearchOpen((prev) => !prev)}
                          aria-label="Search courses"
                          aria-expanded={searchOpen}
                        >
                          <i
                            className={
                              searchOpen
                                ? "tg-flaticon-close-1"
                                : "flaticon-search"
                            }
                            aria-hidden="true"
                          />
                        </button>
                        {searchOpen && (
                          <div className="header-one-search__panel">
                            <CustomSelect
                              value={selectedOption}
                              onChange={handleSelectChange}
                              autoFocus
                            />
                          </div>
                        )}
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
                    <div className="header-one-mobile-actions d-lg-none">
                      <a
                        href="mailto:info@stellacollege.edu.au"
                        className="header-one-actions__btn"
                        aria-label="Email info@stellacollege.edu.au"
                      >
                        <FiMail aria-hidden="true" />
                      </a>
                      <a
                        href="tel:1800069877"
                        className="header-one-actions__btn"
                        aria-label="Call 1800 069 877"
                      >
                        <FiPhone aria-hidden="true" />
                      </a>
                      <div
                        onClick={() => setIsActive((prev) => !prev)}
                        className="mobile-nav-toggler"
                      >
                        <i
                          className={
                            isActive
                              ? "tg-flaticon-close-1"
                              : "tg-flaticon-menu-1"
                          }
                        ></i>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header — shorter on mobile (no top bar) */}
      <div className="header-one-spacer">
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
