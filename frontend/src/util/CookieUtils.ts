// // cookieUtils.js
// import { serialize, parse } from 'cookie';

// export function setTokenCookie(res: any, token: string) {
//     const cookieOptions = {
//         httpOnly: true, // Prevent JavaScript access to the cookie
//         secure: process.env.NODE_ENV === 'production', // Only send the cookie over HTTPS in production
//         sameSite: 'strict', // Enforce strict same-site policy
//         maxAge: 60 * 60 * 24 * 7, // 1 week expiration in seconds
//         path: '/', // Allow the cookie to be accessed from any path on the domain
//     };

//     res.setHeader('Set-Cookie', serialize('token', token, cookieOptions));
// }

// export function removeTokenCookie(res) {
//     const cookieOptions = {
//         expires: new Date(0),
//         path: '/',
//     };

//     res.setHeader('Set-Cookie', serialize('token', '', cookieOptions));
// }

// export function getTokenCookie(req) {
//     return parse(req.headers.cookie || '')['token'] || null;
// }
