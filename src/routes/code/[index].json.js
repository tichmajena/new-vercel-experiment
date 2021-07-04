import { api } from "../api/_rest";
import { getJSON } from "./_api";

export const get = async (request) => {
  const response = await getJSON(
    request,
    `wp/v2/code_note/${request.params.index}`
  );
  console.log("RES: ", response);
  if (response.status === 404) {
    console.log("404 pano");

    return { body: [] };
  }

  return response;
};

export const post = async (request) => {
  console.log(request.body);

  const response = await api(request, `wp/v2/code_note`, request.body);
  if (response.status >= 400) {
    console.log("404 pano", response);

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
  console.log(request.params.index);

  const response = await api(
    request,
    `wp/v2/code_note/${request.params.index}`,
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

export const del = async (request) => {
  console.log("DELETING");
  console.log(request);

  const response = await api(
    request,
    `wp/v2/code_note/${request.params.index}`
  );
  if (response.status < 400) {
    console.log("404 pano");

    return { body: [] };
  }
  return {
    body: response,
  };
};
