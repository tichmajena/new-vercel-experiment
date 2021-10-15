import cookie from "cookie";

import { v4 as uuid } from "@lukeed/uuid";

let days = 86400000 * 30;

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
  let bhisvo = JSON.parse(
    cookie.parse(request.headers.cookie || "").session || null
  );
  console.log("BHISVO", bhisvo);
  return JSON.parse(cookie.parse(request.headers.cookie || "").session || null);
}

export async function handle({ request, resolve }) {
  /** @type {import('@sveltejs/kit').Handle} */

  request.locals = await JSON.parse(
    cookie.parse(request.headers.cookie || "").session || null
  );

  if (request.query.has("_method")) {
    request.method = request.query.get("_method").toUpperCase();
  }

  if (request.locals) {
    console.log("ROKARI", request.locals);

    const response = await resolve(request);

    let cookieStr = JSON.stringify(request.locals);

    // if (request.method.toUpperCase() === "POST") {
    //   console.log("TOkenizing");
    //   let token = cookie.parse(request.headers.cookie || "").token || null;
    //   console.log("TOKEN: ", token);
    //   request = {
    //     ...request,
    //     headers: {
    //       ...request.headers,
    //       Authorization: "Bearer " + token,
    //     },
    //   };
    // }

    console.log("R-PATH", request.path);
    //console.log("R-HEADERS", request.headers);
    return {
      ...response,
      headers: {
        ...response.headers,
        "set-cookie": `session=${cookieStr}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${
          new Date().getTime() + days
        };`,
      },
    };
  }
  return resolve(request);
}

// /** @type {import('@sveltejs/kit').GetSession} */
// export function getSession(request) {
//   const bhisvo = cookie.parse(request.headers.cookie || "").session || null;

//   const cookies = JSON.parse(bhisvo);

//   if (cookies) {
//     console.log(cookies);

//     return {
//       user: {
//         id: cookies.profile.id,
//         name: cookies.profile.user_display_name,
//       },
//     };
//   }
// }

// export const getUserInformation = (cookie) => {};

// export const handle = async ({ request, resolve }) => {
//   console.log("Handling!!");
//   const cookies = cookie.parse(request.headers.cookie || "");
//   const bhisvo = JSON.parse(cookies);
//   console.log(bhisvo);
//   if (cookies === {}) {
//     return {
//       status: 302,
//       redirect: "/auth",
//     };
//   }
//   request.locals.userid = cookies.userid;

//   // TODO https://github.com/sveltejs/kit/issues/1046
//   if (request.query.has("_method")) {
//     request.method = request.query.get("_method").toUpperCase();
//   }

//   const response = await resolve(request);

//   if (!cookies.userid) {
//     // if this is the first time the user has visited this app,
//     // set a cookie so that we recognise them when they return
//     response.headers[
//       "set-cookie"
//     ] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
//   }

//   return response;
// };
