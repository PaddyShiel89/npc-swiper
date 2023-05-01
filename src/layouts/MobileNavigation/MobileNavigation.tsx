import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const MobileNavLink = (data: navLinkData) => {
  return (
    <li>
      <Link href={data.path}>
        <FontAwesomeIcon
          className={styles.icon}
          data-testid="nav-link-icon"
          icon={data.icon}
        />
        <span>{data.name}</span>
      </Link>
    </li>
  );
};
