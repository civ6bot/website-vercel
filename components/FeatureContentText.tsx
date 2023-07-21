import styles from "./FeatureContentText.module.css";
import Button from "./Button";

export default (props: {
    title: string,
    description: string,
    buttonTitle: string,
    buttonURL: string,
    buttonIsNewWindow: boolean
}) => {
    const textArray = props.description.split('\n').map((line, index) => {
        return <p
            key={index}
            className={styles.FeatureContentTextDescription}
        >{line}</p>;
    });
    return (
        <div className={styles.featureContentText}>
            <p className={styles.FeatureContentTextTitle}>{props.title}</p>
            <div style={{marginBottom: "15px"}}>
                {textArray}
            </div>
            <Button
                label={props.buttonTitle}
                url={props.buttonURL}
                isNewWindow={props.buttonIsNewWindow}
            />
            <div style={{minHeight: "15px"}}></div>
        </div>
    );
};
