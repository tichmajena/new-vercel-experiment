export const BASE = import.meta.env.VITE_BASE;
import cookie from "cookie";
const base = BASE;

export async function api(request, resource, data) {
  // user must have a cookie set
  //  if (!request.context.userid) {
  //    return { status: 401 };
  //  }

  let token;

  let rm = request.method.toUpperCase();
  if (rm === "POST" || rm === "PUT" || rm === "PATCH" || rm === "DELETE") {
    token = cookie.parse(request.headers.cookie || "").token || null;
  }

  const res = await fetch(`${base}/${resource}`, {
    method: request.method,
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: data,
  });

  // if the request came from a <form> submission, the browser's default
  // behaviour is to show the URL corresponding to the form's "action"
  // attribute. in those cases, we want to redirect them back to the
  // /todos page, rather than showing the response

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
      body: await res.json(), // TODO https://github.com/sveltejs/kit/issues/1047
    };
  }

  return {
    status: res.status,
    body: await res.json(),
  };
}
