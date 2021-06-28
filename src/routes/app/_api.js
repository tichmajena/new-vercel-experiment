export const BASE = import.meta.env.VITE_BASE;
const base = BASE;

export async function api(request, resource, data) {
  // user must have a cookie set
  //  if (!request.context.userid) {
  //    return { status: 401 };
  //  }

  const res = await fetch(`${base}/${resource}`, {
    method: request.method,
    headers: {
      "content-type": "application/json",
    },
    body: data,
  });

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
