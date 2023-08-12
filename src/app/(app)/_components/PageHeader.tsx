import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
};
