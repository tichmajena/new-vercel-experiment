
import { api } from "./_login";


let days = 86400000 * 30;

export async function post(request) {

  try {
    const session = await api(request, `jwt-auth/v1/token`, request.body);
    console.log(session);
    const jwt = await session.body.token;
    const userdata = await JSON.stringify(session.body.profile);
    if (session.status >= 400) {
      console.log("404 pano");
      console.log(session.body.message);

      return {
        status: session.status,
        body: session.body,
      };
    }
    const cookie1 = `token=${jwt}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${
      new Date().getTime() + days
    };`;

    const cookie2 = `session=${userdata}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${
      new Date().getTime() + days
    };`;
    return {
      status: 200,
      body: [],
      headers: {
        "set-cookie": [cookie1, cookie2],
      },
    };
  } catch (error) {
    console.log("LOGIN ERROR!!");
    console.error(error);
  }
}
