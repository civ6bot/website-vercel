import axios from "axios";

export default async ({ query }) => {
    const BOT_HOSTNAME = "23.159.16.135";
    const BOT_PORT = "3001";

    const code = query.code ?? "";
    let response;
    try {
        response = await axios.post(`http://${BOT_HOSTNAME}:${BOT_PORT}/steam/`, {code: code}, {timeout: 3000});
    } catch (e) {
        response = null;
    }
    console.log(response);
    const data = response?.data ?? {status: 'error_unknown', discordID: null, steamID: null};
    return { data };
};
