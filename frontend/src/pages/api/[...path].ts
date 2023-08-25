import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!process.env.URL_SERVER_API) throw Error("URL_SERVER_API environment variable is empty");
    req.url = process.env.URL_SERVER_API + req.url;
    let response: any | null = null;
    console.log(req.method, req.url)
    try {
        switch (req.method) {
            case "GET":
                response = await axios.get(req.url);
                break;
            case "POST":
                response = await axios.post(req.url, req.body);
                break;
            case "PUT":
                response = await axios.put(req.url, req.body);
                break;
            case "DELETE":
                response = await axios.delete(req.url);
                break;
        }
        if (response) res.status(response?.status || 200).json(response?.data);
    } catch (err) {
        // console.log("err: ", err);
        res.status(err?.response?.status || 500).json(err?.response?.data);
    }
}