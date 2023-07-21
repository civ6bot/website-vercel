import styles from "./ErrorHex.module.css";

export default () => {
    return (
        <img 
            className={styles.hexImg}
            src={`/404/${1+Math.floor(Math.random()*10)}.png`}
        ></img>
    );
};
