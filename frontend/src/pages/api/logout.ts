import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

type Data = {
  message?: string;
  invitationUrl?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
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
