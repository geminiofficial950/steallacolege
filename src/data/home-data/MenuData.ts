interface MenuItem {
  id: number;
  title: string;
  link: string;
  menu_class?: string;
  home_sub_menu?: {
    menu_details: {
      link: string;
      title: string;
      badge?: string;
      badge_class?: string;
    }[];
  }[];
  sub_menus?: {
    link: string;
    title: string;
    badge?: string;
    badge_class?: string;
    openPopup?: boolean;
    dropdown?: boolean;
    mega_menus?: {
      link: string;
      title: string;
      subtitle: string;
      line?: boolean;
    }[];
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Courses",
    link: "/courses",
  },
  {
    id: 3,
    title: "Student Hub",
    link: "#",
    sub_menus: [
      // { link: "/funding", title: "Funding (Australia Only)", },
      { link: "https://stellalearn.com.au", title: "Student Login" },
      {
        link: "/current-student",
        title: "Student Support Form",
        badge_class: "blink-badge",
        badge: "New",
        openPopup: true,
      },
      {
        link: "/current-student",
        title: "Schedule a meeting",
        badge: "New",
        badge_class: "blink-badge",
      },
      { link: "/usi", title: "USI" },
      { link: "/placement", title: "Placement" },
      { link: "/forms", title: "Feedback, Forms & Policy" },
      // { link: "/contact", title: "Contact" },
      // {
      //     link: "#",
      //     title: "Our Instructors",
      //     dropdown: true,
      //     mega_menus: [
      //         { link: "/instructors", title: "Our Instructors", },
      //         { link: "/instructor-details", title: "Instructor Details", },
      //     ]
      // },
      // {
      //     link: "#",
      //     title: "Our Events",
      //     dropdown: true,
      //     mega_menus: [
      //         { link: "/events", title: "Our Events", },
      //         { link: "/events-details", title: "Event Details", },
      //     ]
      // },
      // {
      //     link: "#",
      //     title: "Shop",
      //     dropdown: true,
      //     mega_menus: [
      //         { link: "/shop", title: "Shop" },
      //         { link: "/shop-details", title: "Shop Details" },
      //         { link: "/wishlist", title: "Wishlist" },
      //         { link: "/cart", title: "Cart Page" },
      //         { link: "/check-out", title: "Checkout" },
      //     ]
      // },
      // {
      //     link: "#",
      //     title: "Blog",
      //     dropdown: true,
      //     mega_menus: [
      //         // { link: "/blog", title: "Blog Right Sidebar" },
      //         // { link: "/blog-2", title: "Blog Left Sidebar" },
      //         { link: "/blog-3", title: "Blog Full Width" },
      //         // { link: "/blog-details", title: "Blog Details" },
      //     ]
      // },
    ],
  },
  {
    id: 4,
    title: "Corporate Hub",
    link: "#",
    sub_menus: [
      // {
      //   link: "/verify",
      //   title: "Verify",
      // },
      // {
      //   link: "/login",
      //   title: "Admin Login",
      // },
      {
        link: "/trainee",
        title: "Traineeship & Apprenticeship",
        // dropdown: true,
        // mega_menus: [
        //     { link: "/instructor-dashboard", title: "Dashboard" },
        //     { link: "/instructor-profile", title: "Profile" },
        //     { link: "/instructor-enrolled-courses", title: "Enrolled Courses" },
        //     { link: "/instructor-wishlist", title: "Wishlist" },
        //     { link: "/instructor-review", title: "Reviews" },
        //     { link: "/instructor-attempts", title: "My Quiz Attempts" },
        //     { link: "/instructor-history", title: "Order History" },
        //     { link: "/instructor-courses", title: "My Course" },
        //     { link: "/instructor-announcement", title: "Announcements" },
        //     { link: "/instructor-quiz", title: "Quiz Attempts" },
        //     { link: "/instructor-assignment", title: "Assignments" },
        //     { link: "/instructor-setting", title: "Settings" },
        // ]
      },
      {
        link: "/grouptraining",
        title: "Group Training (Staff)",
        // dropdown: true,
        // mega_menus: [
        //     { link: "/student-dashboard", title: "Dashboard" },
        //     { link: "/student-profile", title: "Profile" },
        //     { link: "/student-enrolled-courses", title: "Enrolled Courses" },
        //     { link: "/student-wishlist", title: "Wishlist" },
        //     { link: "/student-review", title: "Reviews" },
        //     { link: "/student-attempts", title: "My Quiz Attempts" },
        //     { link: "/student-history", title: "Order History" },
        //     { link: "/student-setting", title: "Settings" },
        // ]
      },
      {
        link: "/partner",
        title: "Partner With Us",
      },
      {
        link: "/membership",
        title: "Membership",
      },
    ],
  },
  {
    id: 5,
    title: "About Us",
    link: "/about-us",
  },
];
export default menu_data;
