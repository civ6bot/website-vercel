import enIndex from "./en/index.json";
import ruIndex from "./ru/index.json";
import enFooter from "./en/footer.json";
import ruFooter from "./ru/footer.json";
import enSteam from "./en/steam.json";
import ruSteam from "./ru/steam.json";
import enTable from "./en/table.json";
import ruTable from "./ru/table.json";
import enParameters from "./en/parameters.json";
import ruParameters from "./ru/parameters.json";
import enSwiper from "./en/swiper.json";
import ruSwiper from "./ru/swiper.json";
import enPages from "./en/pages.json";
import ruPages from "./ru/pages.json";
import enConfigs from "./en/configs.json";
import ruConfigs from "./ru/configs.json";

const lines = {};
[
    enIndex, ruIndex,
    enFooter, ruFooter,
    enSteam, ruSteam,
    enTable, ruTable,
    enParameters, ruParameters,
    enSwiper, ruSwiper,
    enPages, ruPages,
    enConfigs, ruConfigs
].forEach(value => {
    if(!lines[value["lang"]])
        lines[value["lang"]] = {};
    lines[value["lang"]] = {
        ...lines[value["lang"]],
        ...value["text"]
    };
});

function getLocale (line, language, ...args) {
    return (lines[language]?.[line] ?? lines["en"]?.[line] ?? line).replaceAll(
        /\[[^\[\]]*]/g,
        substring => (args.length > 0)
            ? String(args.splice(0, 1)[0])
            : substring
    );
};

export default getLocale;
