export type NavItem = {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
    hasChildren?: boolean; // <-- add this
  };
  
  const navItems: NavItem[] = [
    { label: "Home", href: "/", hasChildren: false },
    {
      label: "Services",
      href: "/services",
      children: [
        // { label: "Web Development", href: "/services/web" },
        // { label: "App Development", href: "/services/app" },
      ],
      hasChildren: true,
    },
    {
      label: "About",
      href: "/about",
      children: [
        // { label: "Our Team", href: "/about/team" },
        // { label: "Mission & Vision", href: "/about/mission" },
      ],
      hasChildren: true,
    },
    {
      label: "Blog",
      href: "/blog",
      children: [
        // { label: "Tech", href: "/blog/tech" },
        // { label: "Tutorials", href: "/blog/tutorials" },
      ],
      hasChildren: true,
    },
    { label: "FAQ", href: "/faq", hasChildren: false },
    { label: "Contact", href: "/contact", hasChildren: false },
  ];
  
  export default navItems;
  