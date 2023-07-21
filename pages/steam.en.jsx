import SteamWindow from "components/SteamWindow";
import Head from 'next/head';
import SteamInitialProps from "components/Steam.initialProps";

function Steam({data}) {
    const lang = "en";
    return (
        <>
            <Head>
                <title>Steam connection | Civ6Bot</title>
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
