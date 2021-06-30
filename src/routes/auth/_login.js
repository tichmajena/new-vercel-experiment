export const BASE = import.meta.env.VITE_BASE;
import cookie from "cookie";
const base = BASE;

export async function api(request, resource, data) {
  // user must have a cookie set
  //  if (!request.context.userid) {
  //    return { status: 401 };
  //  }

  let token;

  console.log("DATA!!", data);

  const res = await fetch(`${base}/${resource}`, {
    method: request.method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // if the request came from a <form> submission, the browser's default
  // behaviour is to show the URL corresponding to the form's "action"
  // attribute. in those cases, we want to redirect them back to the
  // /todos page, rather than showing the response
  const json = await res.json();

  if (
    res.ok &&
    request.method !== "GET" &&
    request.headers.accept !== "application/json"
  ) {
    return {
      status: 303,
      headers: {
        location: "/code",
      },
      body: json, // TODO https://github.com/sveltejs/kit/issues/1047
    };
  }

  return {
    status: res.status,
    body: json,
  };
}
