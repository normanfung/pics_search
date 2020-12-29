import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID SC3OAsrFVNkTARrA-gIO1xRw_uLl1iBDZGc9c_3MfiM",
    },
});
