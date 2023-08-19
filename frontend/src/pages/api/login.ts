import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";
import axios from "axios";

type Data = {
  message?: string;
  invitationUrl?: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "Method not supported" });
  }

  const { username, password } = req.body;

  const cookies = new Cookies(req, res);

  if (!process.env.URL_SERVER_API) throw Error("URL_SERVER_API environment variable is empty");
  req.headers.cookie = "";
  req.url = process.env.URL_SERVER_API + req.url;
  console.log("req.url: ", req.url);

  try {
    const response = await axios.post(req.url, {
      username,
      password,
    });
    const { accessToken, message } = response.data;
    cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60000 * 60 * 24 * 365,
    });
    res.status(200).json({ message });
  } catch (err: any) {
    console.log("err: ", err.response?.status);
    switch (err.response?.status) {
      case 404:
        cookies.set("accessToken", "", {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 1,
        });
    }
    res.status(err?.response?.status).json(err.response.data);
  }
}
