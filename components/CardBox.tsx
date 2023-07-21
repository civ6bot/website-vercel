import { useState, useEffect } from 'react'
import { useTheme } from "nextra-theme-docs";
import styles from "./CardBox.module.css";
import Card from "./Card";
import getLocale from "../text/getLocale";

export default (props: {lang: string}) => {
    const [mounted, setMounted] = useState(false);
    const {theme} = useTheme();
    useEffect(() => { setMounted(true); }, []);
    if(!mounted) 
        return null;
    const isDarkMode = (theme == "dark");

    let generalTitle = getLocale("indexBotsGeneralTitle", props.lang),
        generalDescription = getLocale("indexBotsGeneralDescription", props.lang),
        ratingTitle = getLocale("indexBotsRatingTitle", props.lang),
        ratingDescription = getLocale("indexBotsRatingDescription", props.lang),
        miscellaneousTitle = getLocale("indexBotsMiscellaneousTitle", props.lang),
        miscellaneousDescription = getLocale("indexBotsMiscellaneousDescription", props.lang),
        buttonInviteTitle = getLocale("indexBotsInviteButtonLabel", props.lang),
        getMoreLabel = getLocale("indexGetMoreLabel", props.lang);
    let bots = {
        general: {
            color: "#920000",
            imagePath: (isDarkMode) ? "/hex/general.png" : "/hex-darkened/general.png",
            linkURL: "https://discord.com/api/oauth2/authorize?client_id=1033084730276581456&permissions=466021116993&scope=bot",
            getMoreLink: "/general/"
        },
        rating: {
            color: "#0074A8",
            imagePath: (isDarkMode) ?  "/hex/rating.png" : "/hex-darkened/rating.png",
            linkURL: "https://discord.com/api/oauth2/authorize?client_id=795292082184650813&permissions=139855260737&scope=bot",
            getMoreLink: "/rating/"
        },
        miscellaneous: {
            color: "#2EA500",
            imagePath: (isDarkMode) ?  "/hex/miscellaneous.png" : "/hex-darkened/miscellaneous.png",
            linkURL: "https://discord.com/api/oauth2/authorize?client_id=963038599304065084&permissions=139872037953&scope=bot",
            getMoreLink: "/miscellaneous/"
        },
        other: {
            defaultColor: "#000"
        }
    }
    return (
        <div className={styles.CardBox}>
            <Card
                color={bots.general.color}
                title={generalTitle}
                description={generalDescription}
                buttonLabel={buttonInviteTitle}
                imagePath={bots.general.imagePath}
                linkURL={bots.general.linkURL}
                getMoreLabel={getMoreLabel}
                getMoreLink={bots.general.getMoreLink}
            />
            <Card
                color={bots.rating.color}
                title={ratingTitle}
                description={ratingDescription}
                buttonLabel={buttonInviteTitle}
                imagePath={bots.rating.imagePath}
                linkURL={bots.rating.linkURL}
                getMoreLabel={getMoreLabel}
                getMoreLink={bots.rating.getMoreLink}
            />
            <Card
                color={bots.miscellaneous.color}
                title={miscellaneousTitle}
                description={miscellaneousDescription}
                buttonLabel={buttonInviteTitle}
                imagePath={bots.miscellaneous.imagePath}
                linkURL={bots.miscellaneous.linkURL}
                getMoreLabel={getMoreLabel}
                getMoreLink={bots.miscellaneous.getMoreLink}
            />
        </div>
    );
};
