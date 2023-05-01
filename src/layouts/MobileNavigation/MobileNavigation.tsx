import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

import styles from "./MobileNavigation.module.scss";
import { navLinkData, navLinks } from "@/data";

const MobileNavigation = () => {
  const router = useRouter();

  return (
    <nav className={styles.base}>
      <ul>
        {navLinks.map((link) => (
          <MobileNavLink
            key={link.name}
            {...link}
            currentPage={router.pathname === link.path}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigation;

export const MobileNavLink = (data: MobileNavLinkProps) => {
  const linkClassnames = classNames({ [styles.current]: data.currentPage });

  return (
    <li>
      <Link href={data.path} className={linkClassnames}>
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

interface MobileNavLinkProps extends navLinkData {
  currentPage: boolean;
}
