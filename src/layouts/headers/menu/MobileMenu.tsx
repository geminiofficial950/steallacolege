"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menu_data from "@/data/home-data/MenuData";
import Image from "next/image";
import { useState } from "react";
import StudentSupportForm from "@/layouts/headers/StudentSupportForm";

import icon_1 from "@/assets/img/others/mega_menu_img.jpg";

const MobileMenu = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [navTitle, setNavTitle] = useState("");
  const [subNavTitle, setSubNavTitle] = useState("");
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  // Function to check if any of the links in an array is active
  const isAnyChildActive = (hrefs: string[] = []) =>
    hrefs.some((href) => pathname === href);

  //openMobileMenu
  const openMobileMenu = (menu: any) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  //openMobileSubMenu
  const openMobileSubMenu = (sub_m: any) => {
    if (subNavTitle === sub_m) {
      setSubNavTitle("");
    } else {
      setSubNavTitle(sub_m);
    }
  };

  // Menus without "+" icon and no toggle
  const noDropdownMenus = ["Home", "About Us", "Courses"];

  return (
    <>
      <ul className="navigation">
        {menu_data.map((menu) => {
        const subMenuLinks =
          menu.sub_menus?.map((sub_m) => sub_m.link).filter(Boolean) || [];
        const megaMenuLinks =
          menu.sub_menus
            ?.flatMap((sub_m) =>
              sub_m.mega_menus?.map((mega_m) => mega_m.link)
            )
            .filter(Boolean) || [];
        const homeSubMenuLinks =
          menu.home_sub_menu
            ?.flatMap((h_menu) =>
              h_menu.menu_details.map((h_menu) => h_menu.link)
            )
            .filter(Boolean) || [];

        const allLinks = [
          ...subMenuLinks,
          ...megaMenuLinks,
          ...homeSubMenuLinks,
        ].filter(Boolean) as string[];

        const isRestrictedMenu = noDropdownMenus.includes(menu.title);

        return (
          <li
            key={menu.id}
            className={`menu-item-has-children ${
              isAnyChildActive(allLinks) ? "active" : ""
            }`}
          >
            <Link href={menu.link}>{menu.title}</Link>

            {/* Only show submenu if not restricted */}
            {!isRestrictedMenu && (
              <ul
                className={`sub-menu ${menu.menu_class}`}
                style={{
                  display: navTitle === menu.title ? "block" : "none",
                }}
              >
                {menu.home_sub_menu ? (
                  <>
                    {menu.home_sub_menu.map((h_menu_details, i) => (
                      <li key={i}>
                        <ul className="list-wrap mega-sub-menu">
                          {h_menu_details.menu_details.map(
                            (h_menu: any, index: any) => {
                              const isHomeSubMenuActive = isActive(h_menu.link);
                              return (
                                <li
                                  key={index}
                                  className={isHomeSubMenuActive ? "active" : ""}
                                >
                                  <Link href={h_menu.link}>
                                    {h_menu.title}{" "}
                                    <span className={h_menu.badge_class}>
                                      {h_menu.badge}
                                    </span>
                                  </Link>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </li>
                    ))}

                    <li>
                      <div className="mega-menu-img">
                        <Link href="/courses">
                          <Image src={icon_1} alt="img" />
                        </Link>
                      </div>
                    </li>
                  </>
                ) : (
                  menu.sub_menus?.map((sub_m: any, index: any) => {
                    const isSubMenuActive = isActive(sub_m.link);
                    const isAnyMegaChildActive = isAnyChildActive(
                      sub_m.mega_menus
                        ?.map((mega_m: any) => mega_m.link)
                        .filter(Boolean) as string[]
                    );
                    const shouldBlinkBadge =
                      sub_m.badge_class === "blink-badge" ||
                      sub_m.badge?.toLowerCase() === "new";

                    return (
                      <li
                        key={index}
                        className={`${
                          sub_m.dropdown ? "menu-item-has-children" : ""
                        } ${
                          isSubMenuActive || isAnyMegaChildActive ? "active" : ""
                        }`}
                      >
                        {/* If this submenu should open a popup, prevent navigation and open modal */}
                        {sub_m.openPopup ? (
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsSupportOpen(true);
                            }}
                          >
                            <div style={{ display: "flex", flexDirection: "column" }}>
                              {sub_m.badge && (
                                <span
                                  className={`${sub_m.badge_class || ""} ${shouldBlinkBadge ? "blink-badge" : ""}`.trim()}
                                >
                                  {sub_m.badge}
                                </span>
                              )}
                              <span>{sub_m.title}</span>
                            </div>
                          </a>
                        ) : (
                          <Link href={sub_m.link}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                              {sub_m.badge && (
                                <span
                                  className={`${sub_m.badge_class || ""} ${shouldBlinkBadge ? "blink-badge" : ""}`.trim()}
                                >
                                  {sub_m.badge}
                                </span>
                              )}
                              <span>{sub_m.title}</span>
                            </div>
                          </Link>
                        )}

                        {sub_m.mega_menus && (
                          <ul
                            className="sub-menu"
                            style={{
                              display:
                                subNavTitle === sub_m.title ? "block" : "none",
                            }}
                          >
                            {sub_m.mega_menus?.map((mega_m: any, i: any) => (
                              <li
                                key={i}
                                className={isActive(mega_m.link) ? "active" : ""}
                              >
                                <Link href={mega_m.link}>{mega_m.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* "+" icon only for sub_m with mega_menus */}
                        {sub_m.mega_menus && (
                          <div
                            className={`dropdown-btn ${
                              subNavTitle === sub_m.title ? "open" : ""
                            }`}
                            onClick={() => openMobileSubMenu(sub_m.title)}
                          >
                            <span className="plus-line"></span>
                          </div>
                        )}
                      </li>
                    );
                  })
                )}
              </ul>
            )}

            {/* "+" icon only for menus NOT in [Home, About, Courses] */}
            {!isRestrictedMenu && (
              <div
                className={`dropdown-btn ${
                  navTitle === menu.title ? "open" : ""
                }`}
                onClick={() => openMobileMenu(menu.title)}
              >
                <span className="plus-line"></span>
              </div>
            )}
          </li>
        );
        })}
      </ul>

      <StudentSupportForm
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />
    </>
  );
};

export default MobileMenu;
