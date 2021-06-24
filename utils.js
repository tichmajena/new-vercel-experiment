import { SecureStorage } from "nativescript-secure-storage";
export const secureStorage = new SecureStorage();

const base = `https://imajenation.co.zw/mydiary/wp-json`;

export function getCourses() {
  const courseStore = writable(new Promise(() => {}));
  console.log("courseStore created:");

  // If localStorage exists, fire that up
  const jsonLocal = secureStorage.getSync({
    key: "courses",
  });

  if (jsonLocal !== null) {
    console.log("Ndaakumbosanotora muLocal Storage");
    const chimunya = JSON.parse(jsonLocal);
    courseStore.set(Promise.resolve(chimunya));
  }

  const load = async () => {
    console.log("getting posts async-awaitically from : " + tutor.courses);

    const res = await fetch(tutor.courses);
    const json = await res.json();
    const posts = await json.data.posts;
    console.log("about to log posts:");

    // Save to local storage

    secureStorage
      .set({
        key: "courses",
        value: JSON.stringify(posts),
      })
      .then(function (success) {
        console.log("Successfully set a value? " + success);
      });
  };
}

export async function getCodeNotes() {
  try {
    const res = await fetch(base + "/wp/v2/code_note");
    const data = await res.json;

    if (res.ok) {
      return data;
    }
  } catch (error) {}
}

export async function authJWT(body) {
  body = JSON.stringify(body);

  const response = await fetch(base + "/jwt-auth/v1/token", {
    method: "POST",
    data: body,
  });

  if (200 === response.status) {
    // Cookies.set(state.token, response.formData.token);
    console.log("token:");

    secureStorage
      .set({
        key: "jwt",
        value: "response,",
      })
      .then(function (success) {
        console.log("Successfully set a value? " + success);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
