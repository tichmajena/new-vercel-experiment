<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/notes.json");

    console.log(res);

    if (res.ok) {
      const jsonData = await res.json();
      const notes = await jsonData;

      return {
        props: { notes },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<script>
  let title, content;
  export let notes;

  let addNote = true;
  async function addPost() {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const res = await fetch("https://imajenation.co.zw/mydiary/wp-json/wp/v2/note", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ title, content, status: "publish" }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        console.log("res is okay");
      } else {
        console.log("res has an error");
      }
    } catch (error) {
      console.log("ERROR!!!: ", error);
    }
  }
</script>

<h1 class="text-2xl font-bold ">Notes</h1>
<a href="/notes/new">
  <button class="px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"
    >Add Note</button
  >
</a>

{#each notes as note}
  <a href="/notes/{note.slug}">
    <h2>{note.title.rendered}</h2>
  </a>
{/each}
