export const BASE = import.meta.env.VITE_BASE;
const base = BASE;

export async function getJSON(request, resource, data) {
  // user must have a cookie set
  //   if (!request.context.userid) {
  //     return { status: 401 };
  //   }

  const res = await fetch(`${base}/${resource}`, {
    method: request.method,
    headers: {
      "content-type": "application/json",
    },
    body: data && JSON.stringify(data),
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
        location: "/posts",
      },
      body: "", // TODO https://github.com/sveltejs/kit/issues/1047
    };
  }

  return {
    status: res.status,
    body: await res.json(),
  };
}
