import { api } from "./_api";

export const get = async (request) => {
  console.log("GETTING", request.locals.id, request);
  const response = await api(
    request,
    `wp/v2/app_note/?author=${request.locals.id}&per_page=100`
  );
  if (response.status === 404) {
    console.log("404 pano");

    return { body: [] };
  }

  return response;
};
