import styles from "./FeedContainer.module.scss";

export const FeedContainer: FCC = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
