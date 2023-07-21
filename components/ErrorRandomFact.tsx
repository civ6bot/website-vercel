import styles from "./ErrorRandomFact.module.css";
import getLocale from "../text/getLocale";

export default () => {
    return (
        <div>
            <p className={styles.errorRandomFactTitle}>{getLocale("errorRandomFactTitle", "en") + ": "}</p>
            <p className={styles.errorRandomFactTitle}>{getLocale("errorRandomFact_" + String(1+Math.floor(Math.random()*10)), "en")}</p>
        </div>
    );
};
