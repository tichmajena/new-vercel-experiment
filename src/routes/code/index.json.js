import { getJSON } from "./_api";

export const get = async (request) => {
  console.log("Locals:", request.locals.id);

  const response = await getJSON(
    request,
    `wp/v2/code_note/?author=${request.locals.id}&per_page=100`
  );
  if (response.status === 404) {
    console.log("404 pano");

    return { body: [] };
  }

  return response;
};
