import styles from "./SteamWindow.module.css";
import getLocale from "../text/getLocale";
import Button from "./Button";

export default (props: {
    lang: string, 
    data: {status: string, steamID: string, discordID: string}
}) => {
    let steamSubtitleArray = getLocale("steamTitle_"+props.data.status, props.lang).split('\n').map((line: string, index: number) => {
        return <p
            key={index}
            className={styles.steamWindowSubtitle}
        >{line}</p>;
    });
    let steamDescriptionArray = getLocale("steamDescription_"+props.data.status, props.lang, props.data.discordID, props.data.steamID).split('\n').map((line: string, index: number) => {
        return <p
            key={index}
            className={(index===0) ? styles.steamWindowSeparator : styles.steamWindowDescription}
        >{line}</p>;
    });

    return (
        <div className={styles.steamWindowBackground}>
            <div className={styles.steamWindowColumn}>
                <p className={styles.steamWindowTitle}>{getLocale("steamPageTitle", props.lang)}</p>
                <img src={props.data.status.slice(0, props.data.status.indexOf("_")) === "success" ? "/steam/yes.png" : "/steam/no.svg"} alt="Yes-no icon" className={styles.steamWindowIcon} />
                {steamSubtitleArray}
                {steamDescriptionArray}
                <Button
                    label={getLocale("steamToHomePage", props.lang)}
                    url="/"
                    isNewWindow={false}
                />
            </div>
        </div>
    );
}
