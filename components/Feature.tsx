import styles from "./Feature.module.css";
import FeatureContentImage from "./FeatureContentImage";
import FeatureContentText from "./FeatureContentText";

export default (props: {
    title: string,
    description: string,
    imagePath: string,
    textSide: string,

    buttonTitle: string,
    buttonURL: string
    buttonIsNewWindow: boolean
}) => {
    let contentImage = <FeatureContentImage 
        key={0}
        imagePath={props.imagePath} 
    />;
    let contentText = <FeatureContentText 
        key={1}
        title={props.title}
        description={props.description}
        buttonTitle={props.buttonTitle}
        buttonURL={props.buttonURL}
        buttonIsNewWindow={props.buttonIsNewWindow}
    />;
    let content;
    if(props.imagePath === "") {
        content = [contentText];
    } else {
        switch(props.textSide) {
            case "left":
                content = [contentText, contentImage];
                break;
            case "right":
                content = [contentImage, contentText];
                break;
            case "center":
            default:
                content = [contentText];
                break;
        }
    }
    return (
        <div 
            className={styles.feature}
            style={(props.textSide === "center") ? {} : {backgroundColor: "#88888810"}}
        >
            {content}
        </div>
    );
};
