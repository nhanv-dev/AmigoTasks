import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!process.env.NEXT_PUBLIC_URL_SERVER_API) throw Error("NEXT_PUBLIC_URL_SERVER_API environment variable is empty");

    const cookies = new Cookies(req, res);
    const accessToken = cookies.get("accessToken");

    // if (!accessToken) return;

    req.url = process.env.NEXT_PUBLIC_URL_SERVER_API + req.url;

    let response: any | null = null;

    console.log(req.method, req.url, req.body, !!accessToken);

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
                response = await axios.post(req.url, req.body, config);
                break;
            case "PUT":
                response = await axios.put(req.url, req.body, config);
                break;
            case "DELETE":
                response = await axios.delete(req.url, config);
                break;
        }
        if (response) res.status(response?.status || 200).json(response?.data);
    } catch (err) {
        res.status(err?.response?.status || 500).json(err?.response?.data);
    }
}