import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!process.env.URL_SERVER_API) throw Error("URL_SERVER_API environment variable is empty");
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get("accessToken");

    req.url = process.env.URL_SERVER_API + req.url;

    let response: any | null = null;

    console.log(req.method, req.url, !!accessToken);

    const config = {
        headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
    };

    try {
        switch (req.method) {
            case "GET":
                response = await axios.get(req.url, config);
                break;
            case "POST":
                console.log(req.body)
                response = await axios.post(req.url, req.body, config);
                break;
            case "PUT":
                console.log(req.body)
                response = await axios.put(req.url, req.body, config);
                break;
            case "DELETE":
                response = await axios.delete(req.url, config);
                break;
        }
        if (response) res.status(response.status || 200).json(response.data);
        // console.log(response.data)
    } catch (err) {
        res.status(err.response?.status || 500).json(err.response?.data);
    }
}