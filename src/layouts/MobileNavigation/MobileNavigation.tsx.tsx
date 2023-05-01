import Link from "next/link";

import styles from "./MobileNavigation.module.scss";
import { navLinkData, navLinks } from "@/data";

const MobileNavigation = () => {
  return (
    <nav className={styles.base}>
      <ul>
        {navLinks.map((link) => (
          <MobileNavLink key={link.name} {...link} />
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigation;

const MobileNavLink = (data: navLinkData) => (
  <li>
    <Link href={data.path}>
      <span>Icon</span>
      <span>{data.name}</span>
    </Link>
  </li>
);
