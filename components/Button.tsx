import styles from "./Button.module.css";

export default (props: {
    label: string,
    url: string,
    isNewWindow: boolean
}) => {
    return (
        <button
            className={styles.button}
            onClick={() => window.open(props.url, (props.isNewWindow) ? "_blank" : "_self")}
        >{props.label}</button>
    );
};
