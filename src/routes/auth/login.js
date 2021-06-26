//import stringHash from "string-hash";
import { api } from "./_api";
// import * as Cookie from "cookie";
// import { v4 as uuid } from "@lukeed/uuid";

let days = 86400000 * 30;

export async function post(request) {
  //const body = JSON.parse(request.body)
  // let email = request.body.get("email");
  // let password = request.body.get("password");
  //Check if user exists
  try {
    const session = await api(request, `jwt-auth/v1/token`, request.body);
    console.log(session);
    const jwt = await session.body.token;
    const userdata = await JSON.stringify(session.body.profile);
    if (session.status >= 400) {
      console.log("404 pano");
      console.log(session.body.message);
      // the user has visited before, but hasn't yet
      // created a todo list. start with an empty array
      return {
        status: session.status,
        body: session.body,
      };
    }
    const cookie1 = `token=${jwt}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${
      new Date().getTime() + days
    };`;

    const cookie2 = `session=${userdata}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${
      new Date().getTime() + days
    };`;
    return {
      status: 200,
      body: [],
      headers: {
        "set-cookie": [cookie1, cookie2],
      },
    };
  } catch (error) {
    console.log("LOGIN ERROR!!");
    console.error(error);
  }
}
