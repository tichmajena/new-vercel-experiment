import { getJSON } from "./_api";

export const get = async (request) => {
  //   if (!request.context.userid) {
  //     // the user has never visited the site before
  //     // and so doesn't yet have a userid, which is
  //     // set in `handle`, in src/hooks.js
  //     return { body: [] };
  //   }
  //const response = await getJSON(request, `tutor/v1/quiz-question-answer/11/`);
  const response = await getJSON(
    request,
    `wp/v2/contact/?slug=${request.params.slug}`
  );
  if (response.status === 404) {
    console.log("404 pano");
    // the user has visited before, but hasn't yet
    // created a todo list. start with an empty array
    return { body: [] };
  }

  return response;
};
