import { api } from "./_api";

export const post = async (request) => {
  console.log("POSTING ATT.");
  console.log(request.params.index);
  // ?parent=${request.params.index}

  console.log("BODY: ", request.body);
  const response = await api(request, `wp/v2/media`, request.body);
  if (response.status > 400) {
    console.log("404 pano pa POST");

    return { body: response };
  }

  return {
    body: response,
  };
};
