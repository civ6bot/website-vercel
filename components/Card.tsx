import styles from "./Card.module.css";
import Button from "./Button";

export default (props: {
    color: string,

    title: string,
    description: string,
    buttonLabel: string,

    imagePath: string,
    linkURL: string,

    getMoreLabel: string,
    getMoreLink: string
}) => {
    return (
        <div className={styles.card}>
            <img 
                src={props.imagePath}
                alt={props.title}
                className={styles.cardImage}
            />
            <p className={styles.cardTitle}>{props.title}</p>
            <p className={styles.cardDescription}>{props.description}</p>
            <Button
                label={props.buttonLabel}
                url={props.linkURL}
                isNewWindow={true}
            />
            <p 
                onClick={() => {window.location.href = props.getMoreLink;}}
                className={styles.cardGetMoreLink}
            >{props.getMoreLabel}</p>
        </div>
    );
};
