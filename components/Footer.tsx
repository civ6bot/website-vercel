import styles from "./Footer.module.css";
import getLocale from "../text/getLocale";

export default (props: {lang: string}) => {
    return (
        <footer>
            <div className={styles.footerOuter} >
            <div className={styles.footerColumns}>
                    <div className={styles.footerContent}>
                        Civ6Bot 2022-{new Date().getFullYear()}
                    </div>
                    <div className={styles.footerContent}>
                        {getLocale("footerMadeBy", props.lang)}&nbsp;<a className={styles.footerLink} href="https://t.me/ZhenjaMax/">ZhenjaMax (Telegram)</a>
                    </div>
                </div>
                <div className={styles.footerColumns}>
                    <div className={styles.footerContent}>
                        {getLocale("footerPoweredBy", props.lang)}&nbsp;<a className={styles.footerLink} href="https://vercel.com/">Vercel</a>
                    </div>
                </div>
                <div className={styles.footerColumns}>
                    <div className={styles.footerContent}>
                        {getLocale("footerSourcesFrom", props.lang)}&nbsp;<a className={styles.footerLink} href="https://civilization.com/">Civilization ®</a>
                    </div>
                    <div className={styles.footerContent}>
                        <a className={styles.footerLink} href="/privacy/">{getLocale("footerPrivacy", props.lang)}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
