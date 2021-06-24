import cookie from "cookie";

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
  console.log(request);
  const bhisvo = cookie.parse(request.headers.cookie || "").session || null;
  const cookies = JSON.parse(bhisvo);
  if (cookies) {
    return {
      user: {
        id: cookies.profile.id,
        name: cookies.profile.user_display_name,
      },
    };
  }
}

// export const handle = async ({ request, resolve }) => {
//   const bhisvo = cookie.parse(request.headers.cookie || "").session || null;
//   const cookies = JSON.parse(bhisvo);
//   request.locals.userid = cookies.profile.id;

//   // TODO https://github.com/sveltejs/kit/issues/1046
//   if (request.query.has("_method")) {
//     request.method = request.query.get("_method").toUpperCase();
//   }

//   const response = await resolve(request);

//   if (!cookies.profile.id) {
//     // if this is the first time the user has visited this app,
//     // set a cookie so that we recognise them when they return
//     response.headers[
//       "set-cookie"
//     ] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
//   }

//   return response;
// };
