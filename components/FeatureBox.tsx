import Feature from "./Feature";
import getLocale from "../text/getLocale";
import styles from "./FeatureBox.module.css";

export default (props: {lang: string}) => {
    return (
        <div className={styles.featureBox}>
            <Feature 
                key={1}
                title={getLocale("indexFeature1Title", props.lang)}
                description={getLocale("indexFeature1Description", props.lang)}
                imagePath=""
                textSide="left"
                buttonTitle={getLocale("indexFeature1ButtonLabel", props.lang)}
                buttonURL="/general/"
                buttonIsNewWindow={false}
            />
            <Feature 
                key={2}
                title={getLocale("indexFeature2Title", props.lang)}
                description={getLocale("indexFeature2Description", props.lang)}
                imagePath="/features/city_park.png"
                textSide="right"
                buttonTitle={getLocale("indexFeature2ButtonLabel", props.lang)}
                buttonURL="https://github.com/civ6bot/"
                buttonIsNewWindow={true}
            />
            <Feature 
                key={3}
                title={getLocale("indexFeature3Title", props.lang)}
                description={getLocale("indexFeature3Description", props.lang)}
                imagePath=""
                textSide="left"
                buttonTitle={getLocale("indexFeature3ButtonLabel", props.lang)}
                buttonURL="/support/"
                buttonIsNewWindow={false}
            />
            <Feature 
                key={4}
                title={getLocale("indexFeature4Title", props.lang)}
                description={getLocale("indexFeature4Description", props.lang)}
                imagePath=""
                textSide="center"
                buttonTitle={getLocale("indexFeature4ButtonLabel", props.lang)}
                buttonURL="https://discord.gg/CzCQPjxXTy"
                buttonIsNewWindow={true}
            />
        </div>
    );
};
