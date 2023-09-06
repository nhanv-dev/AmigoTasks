import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(404).json({ message: "Method not supported" });
    }
    const cookies = new Cookies(req, res);
    cookies.set("accessToken", "", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 1,
    });

    res.status(200).end();
}