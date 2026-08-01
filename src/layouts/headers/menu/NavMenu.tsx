"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menu_data from "@/data/home-data/MenuData";
import Image from "next/image";
import { ChevronDown } from "lucide-react"; // or use your own icon

import icon_1 from "@/assets/img/others/mega_menu_img.jpg";

const NavMenu = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const isAnyChildActive = (hrefs: string[] = []) =>
    hrefs.some((href) => pathname === href);

  // Check if a menu has any sub-items
  const hasSubMenu = (menu: any) => {
    return (
      (menu.home_sub_menu && menu.home_sub_menu.length > 0) ||
      (menu.sub_menus && menu.sub_menus.length > 0)
    );
  };

  return (
    <ul className="navigation">
      {menu_data.map((menu) => {
        const subMenuLinks =
          menu.sub_menus?.map((sub_m) => sub_m.link).filter(Boolean) || [];
        const megaMenuLinks =
          menu.sub_menus
            ?.flatMap((sub_m) => sub_m.mega_menus?.map((mega_m) => mega_m.link))
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

        const hasChildren = hasSubMenu(menu);

        return (
          <li
            key={menu.id}
            className={`${hasChildren ? "menu-item-has-children" : ""
              } ${isAnyChildActive(allLinks) ? "active" : ""} position-relative`}
            style={{ zIndex: 9999 }}
            onMouseEnter={(e) => (e.currentTarget.style.zIndex = "9999")}
            onMouseLeave={(e) => (e.currentTarget.style.zIndex = "9999")}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {hasChildren ? (
                <Link href={menu.link}>{menu.title}</Link>
              ) : (
                <Link href={menu.link}>{menu.title}</Link>
              )}
              {hasChildren && (
                <ChevronDown size={18} style={{ marginLeft: "-6px" }} />
              )}
            </div>

            {hasChildren && (
              <ul
                className={`sub-menu ${menu.menu_class} position-absolute`}
                style={{ zIndex: 9999 }}
              >
                {menu.home_sub_menu ? (
                  <>
                    {menu.home_sub_menu.map((h_menu_details, i) => (
                      <li key={i}>
                        <ul
                          className="list-wrap mega-sub-menu"
                          style={{ zIndex: 9999 }}
                        >
                          {h_menu_details.menu_details.map(
                            (h_menu: any, index: any) => {
                              const isHomeSubMenuActive = isActive(h_menu.link);
                              return (
                                <li
                                  key={index}
                                  className={
                                    isHomeSubMenuActive ? "active" : ""
                                  }
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
                          <Image src={icon_1} alt="Featured Stella College courses" />
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
                        className={`${sub_m.dropdown
                            ? "menu-item-has-children position-relative"
                            : ""
                          } ${isSubMenuActive || isAnyMegaChildActive
                            ? "active"
                            : ""
                          }`}
                      >
                        <Link
                          href={sub_m.openPopup ? "#" : sub_m.link}
                          onClick={(e) => {
                            if (sub_m.openPopup) {
                              e.preventDefault();
                              window.dispatchEvent(new CustomEvent("open-support-form"));
                            }
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
                        </Link>
                        {sub_m.mega_menus && (
                          <ul
                            className="sub-menu position-absolute"
                            style={{ zIndex: 9999 }}
                          >
                            {sub_m.mega_menus?.map((mega_m: any, i: any) => (
                              <li key={i} className={isActive(mega_m.link) ? "active" : ""}>
                                <Link href={mega_m.link}>
                                  {mega_m.title}
                                  {mega_m.subtitle && (
                                    <span
                                      style={{
                                        fontSize: "11px",
                                        color: "#777",

                                        display: "block",
                                        lineHeight: "14px",
                                      }}
                                    >
                                      {mega_m.subtitle}
                                    </span>
                                  )}
                                </Link>

                                {/* Add this line */}
                                {mega_m.line && (
                                  <div
                                    style={{
                                      width: "100%",
                                      height: "1px",
                                      background: "#d9d9d9",
                                      marginTop: "2px",
                                      marginBottom: "2px",
                                    }}
                                  ></div>
                                )}
                              </li>
                            ))}

                          </ul>
                        )}
                      </li>
                    );
                  })
                )}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;
