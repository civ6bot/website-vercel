import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import styles from "./Swiper.module.css";
import React, { useState, useEffect } from 'react'
import { useTheme } from "nextra-theme-docs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import swiperContent from "../data/Swiper.content.json";
import getLocale from "../text/getLocale";

export default (props: {
    lang: string,
    page: string
}) => {
    const [mounted, setMounted] = useState(false);
    const {theme} = useTheme();
    useEffect(() => { setMounted(true); }, []);
    if(!mounted)
        return null;
    const isDarkMode = (theme == "dark");

    let swiperData = swiperContent[props.page];
    let widthPercent = swiperData?.widthPercent || 90;
    let ignoreLight = swiperData?.ignoreLight || [];
    let images = (swiperData?.images ?? []).map((image: string, index: number) => "/pages/" + `${props.page}/` + (
        (isDarkMode || (ignoreLight.indexOf(index) !== -1))
            ? image 
            : function(image: string){let arr=image.split(".");arr.splice(1,0,"_light.");return arr.join("");}(image)
    ));
    let labels = (swiperData?.labels ?? []).map((label: string) => getLocale(label, props.lang));

    return <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div style={{width: `${widthPercent}%`, minWidth: "450px", maxHeight: "70vh", display: "flex", justifyContent: "center"}}>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{enabled: true}}
                pagination={{enabled: true, clickable: true}}
                className={styles.swiper}
                loop={true}
            >
                {(images.map((image: string, index: number) => {return <SwiperSlide 
                        style={{display: "flex", alignItems: "center", justifyContent: "center"}}
                        key={index}
                    >
                        <img style={{borderRadius: "10px", maxWidth: "85%", maxHeight: "100%"}} src={image} />
                        {(labels[index]?.length > 0) ? <span className={styles.swiperSlideSpan}>{labels[index]}</span> : null}
                    </SwiperSlide>
                }))}
            </Swiper>
        </div>
    </div>
};
