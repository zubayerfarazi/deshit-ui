export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
    //   { label: "Web Development", href: "/services/web" },
    //   { label: "App Development", href: "/services/app" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
    //   { label: "Our Team", href: "/about/team" },
    //   { label: "Mission & Vision", href: "/about/mission" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
    //   { label: "Tech", href: "/blog/tech" },
    //   { label: "Tutorials", href: "/blog/tutorials" },
    ],
  },
];
export default navItems;
