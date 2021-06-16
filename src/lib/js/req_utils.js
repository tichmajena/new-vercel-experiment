import { browser } from "$app/env";

function browserGet(key) {
  if (browser) {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
  }
  return null;
}

export function browserSet(key, value) {
  if (browser) {
    localStorage.setItem(key, value);
  }
}

export async function post(fetch, url, body) {
  let customError = false;
  try {
    let headers = {};
    if (!(body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
      headers["Access-Control-Allow-Origin"] = "*";
      headers["Access-Control-Allow-Credentials"] = "true";
      headers["Access-Control-Allow-Methods"] = "GET,HEAD,OPTIONS,POST,PUT";
      headers["Access-Control-Allow-Headers"] =
        "Origin, X-Requested-With, Content-Type, Accept, Authorization";
      body = JSON.stringify(body);
    }

    const token = browserGet("token");
    console.log(token);
    if (token) {
      headers["Authorisation"] = "Bearer " + token;
      headers["Access-Control-Allow-Origin"] = "*";
      headers["Access-Control-Allow-Credentials"] = "true";
      headers["Access-Control-Allow-Methods"] = "GET,HEAD,OPTIONS,POST,PUT";
      headers["Access-Control-Allow-Headers"] =
        "Origin, X-Requested-With, Content-Type, Accept, Authorization";
    }

    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      body,
      headers,
    });
    if (!res.ok) {
      try {
        const data = await res.json();
        const error = data.message[0].messages[0];
        customError = true;
        throw { id: error.id, message: error.message };
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
    try {
      const json = await res.json();
      return json;
    } catch (error) {
      console.log(error);
      throw customError ? error : { id: "", message: "Unkown Error" };
    }
  } catch (error) {
    console.log(error);
    throw customError ? error : { id: "", message: "Unkown Error" };
  }
}
