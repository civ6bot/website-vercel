import ErrorHex from "./ErrorHex";
import Button from "./Button";
import styles from "./ErrorWindow.module.css";

export default () => {
    return (
        <div className={styles.errorWindow}>
            <ErrorHex />
            <Button
                label="To Home page"
                url="/"
                isNewWindow={false}
            />
        </div>
    );
    /*
    
            
    */
};
