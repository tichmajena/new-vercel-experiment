import { api } from "./_api";

export const get = () => {
  const post = [
    { name: "Berlin" },
    { email: "berlinmhiripiri@gmail.com" },
    { userId: 3 },
    { password: "lisqenfl" },
  ];

  return {
    body: {
      post,
    },
  };
};

export const post = async (request) => {
  console.log(request.body);
  const res = await api(request, `wp/v2/users/register`, request.body);

  return {
    body: res,
  };
};
