import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!process.env.NEXT_PUBLIC_URL_SERVER_API) throw Error("NEXT_PUBLIC_URL_SERVER_API environment variable is empty");

    const cookies = new Cookies(req, res);

    let response: any | null = null;

    req.url = process.env.NEXT_PUBLIC_URL_SERVER_API + req.url;

    try {
        response = await axios.post(req.url, req.body);
        const { accessToken } = response.data;
        cookies.set("accessToken", accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 60000 * 60 * 24 * 365,
        });
        if (response) res.status(response?.status || 200).json(response?.data);
    } catch (err) {
        cookies.set("accessToken", "", {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 1,
        });
        res.status(err?.response?.status || 500).json(err?.response?.data);
    }
}