//import stringHash from "string-hash";
import { api } from "../api/_rest";
// import * as Cookie from "cookie";
// import { v4 as uuid } from "@lukeed/uuid";

export async function post(request) {
  //const body = JSON.parse(request.body)
  // let email = request.body.get("email");
  // let password = request.body.get("password");
  //Check if user exists
  try {
    const session = await api(request, `jwt-auth/v1/token`, request.body);
    const userdata = await JSON.stringify(session.body);
    if (session.status === 404) {
      console.log("404 pano");
      console.log(userdata);
      // the user has visited before, but hasn't yet
      // created a todo list. start with an empty array
      return { body: [] };
    }

    return {
      status: 200,
      body: [],
      headers: {
        "set-cookie": `session=${userdata}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${new Date(
          session.expires_at * 1000
        ).toUTCString()};`,
      },
    };
  } catch (error) {
    console.log("LOGIN ERROR!!");
    console.error(error);
  }
}

export const get = async (request) => {
  //   if (!request.context.userid) {
  //     // the user has never visited the site before
  //     // and so doesn't yet have a userid, which is
  //     // set in `handle`, in src/hooks.js
  //     return { body: [] };
  //   }

  //const response = await getJSON(request, `tutor/v1/quiz-question-answer/11/`);
  const response = await api(request, `tutor/v1/quiz-question-answer/16/`);

  if (response.status === 404) {
    console.log("404 pano");
    // the user has visited before, but hasn't yet
    // created a todo list. start with an empty array
    return { body: [] };
  }

  return response;
};
