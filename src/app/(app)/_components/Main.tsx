import clsx from "clsx";
import styles from "./Main.module.css";

export const Main = ({ children, className, ...props }: JSX.IntrinsicElements["main"]) => {
  return (
    <main className={clsx(styles.main, className)} {...props}>
      {children}
    </main>
  );
};
