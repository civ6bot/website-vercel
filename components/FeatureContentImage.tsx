import styles from "./FeatureContentImage.module.css";

export default (props: {
    imagePath: string
}) => {
    return <div className={styles.featureContentImage}>
        <img 
            src={props.imagePath} 
            alt="feature-content-image"
            className={styles.featureContentImageInner}
        />
    </div>;
};
