import { api } from "./_api";

export const post = async (request) => {
  console.log("POSTING ATT.");
  console.log(request.params.index);

  const response = await api(
    request,
    `wp/v2/media?parent=${request.params.index}`,
    request.body
  );
  if (response.status > 400) {
    console.log("404 pano");

    return { body: [] };
  }

  return {
    body: response,
  };
};
