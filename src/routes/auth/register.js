import { api } from "../api/_rest";

let days = 86400000 * 30;

export async function post(request) {
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
