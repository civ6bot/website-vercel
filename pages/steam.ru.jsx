import SteamWindow from "components/SteamWindow";
import Head from 'next/head';
import SteamInitialProps from "components/Steam.initialProps";

function Steam({data}) {
    const lang = "ru";
    return (
        <>
            <Head>
                <title>Подключение Steam | Civ6Bot</title>
            </Head>
            <SteamWindow 
                lang={lang}
                data={data}
            />
        </>
    );
};

Steam.getInitialProps = SteamInitialProps;

export default Steam;
