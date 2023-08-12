"use client";

import clsx from "clsx";
import { Tilt_Warp, Libre_Barcode_39 } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const tiltWarp = Tilt_Warp({ subsets: ["latin"] });
const libreBarcode39 = Libre_Barcode_39({ subsets: ["latin"], weight: "400" });

type MenuItem = {
  href: string;
  label: string;
};

const menu: MenuItem[] = [
  {
    href: "/posts",
    label: "ブログ",
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        <>
          <h1 className={clsx(tiltWarp.className)}>megatkhs</h1>
        </>
        <span role='presentation' className={libreBarcode39.className}>
          megatkhs
        </span>
      </Link>

      <nav className={styles.menu}>
        <ul>
          {menu.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className={clsx(styles.link, RegExp(`^${href}`).test(pathname) && styles.active)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
