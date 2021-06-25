import { api } from "../api/_rest";
import cookie from "cookie";

export const get = async (request) => {
  //   if (!request.context.userid) {
  //     // the user has never visited the site before
  //     // and so doesn't yet have a userid, which is
  //     // set in `handle`, in src/hooks.js
  //     return { body: [] };
  //   }
  //const response = await getJSON(request, `tutor/v1/quiz-question-answer/11/`);
  const response = await api(
    request,
    `wp/v2/code_note/${request.locals.index}`
  );
  if (response.status === 404) {
    console.log("404 pano");
    // the user has visited before, but hasn't yet
    // created a todo list. start with an empty array
    return { body: [] };
  }

  return response;
};

export const post = async (request) => {
  // console.log("POSTING");

  // let token = cookie.parse(request.headers.cookie || "").token || null;
  // console.log("TOKEN: ", token);
  // request = {
  //   ...request,
  //   headers: {
  //     ...request.headers,
  //     Authorization: "Bearer " + token,
  //   },
  // };

  // console.log("[PATH]:", request.path);

  //   if (!request.context.userid) {
  //     // the user has never visited the site before
  //     // and so doesn't yet have a userid, which is
  //     // set in `handle`, in src/hooks.js
  //     return { body: [] };
  //   }

  console.log(request.body);

  const response = await api(request, `wp/v2/code_note`, request.body);
  if (response.status >= 400) {
    console.log("404 pano", response);
    // the user has visited before, but hasn't yet
    // created a todo list. start with an empty array
    return {
      status: 400,
      body: [],
    };
  }

  return {
    status: 200,
    body: response,
  };
};

export const put = async (request) => {
  console.log("PUTING");
  console.log(request);

  //   if (!request.context.userid) {
  //     // the user has never visited the site before
  //     // and so doesn't yet have a userid, which is
  //     // set in `handle`, in src/hooks.js
  //     return { body: [] };
  //   }
  const response = await getJSON(
    request,
    `wp/v2/code_note/${request.params.index}`
  );
  if (response.status === 404) {
    console.log("404 pano");
    // the user has visited before, but hasn't yet
    // created a todo list. start with an empty array
    return { body: [] };
  }

  return {
    body: response,
  };
};

export const del = async (request) => {
  console.log("PUTING");
  console.log(request);

  //   if (!request.context.userid) {
  //     // the user has never visited the site before
  //     // and so doesn't yet have a userid, which is
  //     // set in `handle`, in src/hooks.js
  //     return { body: [] };
  //   }
  const response = await getJSON(
    request,
    `wp/v2/code_note/${request.params.index}`
  );
  if (response.status === 404) {
    console.log("404 pano");
    // the user has visited before, but hasn't yet
    // created a todo list. start with an empty array
    return { body: [] };
  }
  return {
    body: response,
  };
};
