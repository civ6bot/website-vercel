import { useState, useEffect } from 'react'
import { useTheme } from "nextra-theme-docs";
import styles from "./Hero.module.css";
import getLocale from "../text/getLocale";

export default (props: {lang: string}) => {
    const [mounted, setMounted] = useState(false);
    const {theme} = useTheme();
    useEffect(() => { setMounted(true); }, []);
    if(!mounted) 
        return null;
    const isDarkMode = (theme == "dark");

    let title = getLocale("indexHeroTitle", props.lang);
    let description = getLocale("indexHeroDescription", props.lang);
    return (
        <div className={(isDarkMode) ? styles.heroBox : styles.heroBoxLight}>
            <img
                src="/hero/hero-logo-merged.png"
                className={styles.heroLogo}
            />              
            <p className={styles.heroTitle}>{title}</p>
            <p className={styles.heroDescription}>{description}</p>
        </div>
    );
};
