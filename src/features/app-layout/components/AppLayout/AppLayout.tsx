import { AppHeader } from "../AppHeader";
import { AppMenu } from "../AppMenu";
import { AppProgressBar } from "../AppProgressBar";
import styles from "./AppLayout.module.scss";

export const AppLayout: FCC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <AppProgressBar />

      <div className={styles.top_stack}>
        <AppMenu appBarClassName={styles.app_bar_menu} />
        <AppHeader />
      </div>

      <main className={styles.main}>{children}</main>
    </div>
  );
};
