import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

import styles from "./MobileNavigation.module.scss";
import { navLinkData, navLinks } from "@/data";

const MobileNavigation = () => {
  const router = useRouter();

  const sortedNavLinks = navLinks.sort((a, b) => a.mobileOrder - b.mobileOrder);

  return (
    <nav className={styles.base}>
      <ul>
        {sortedNavLinks.map((link) => (
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
  const linkClassnames = classNames({ [styles.currentPage]: data.currentPage });

  return (
    <li>
      <Link
        href={data.path}
        className={linkClassnames}
        aria-current={data.currentPage ? "page" : undefined}
      >
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
