import { api } from "../api/_rest";

export const get = async (request) => {
  const response = await api(request, `wp/v2/app_note/${request.locals.index}`);
  if (response.status === 404) {
    console.log("404 pano");

    return { body: [] };
  }

  return response;
};

export const post = async (request) => {
  console.log(request.body);

  const response = await api(request, `wp/v2/app_note`, request.body);
  if (response.status >= 400) {
    console.log("404 pano", response);

    return {
      status: 400,
      body: response,
    };
  }

  return {
    status: 200,
    body: response,
  };
};

export const put = async (request) => {
  console.log("PUTING");
  console.log(request.params.index);

  const response = await api(
    request,
    `wp/v2/app_note/${request.params.index}`,
    request.body
  );
  if (response.status === 404) {
    console.log("404 pano");

    return { body: [] };
  }
  console.log(response);

  return {
    body: response,
  };
};

export const del = async (request) => {
  console.log("PUTING");
  console.log(request);

  const response = await getJSON(
    request,
    `wp/v2/app_note/${request.params.index}`
  );
  if (response.status === 404) {
    console.log("404 pano");

    return { body: [] };
  }
  return {
    body: response,
  };
};
