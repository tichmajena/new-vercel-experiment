<script>
  let title, content;

  async function addPost() {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    try {
      const res = await fetch(
        "https://imajenation.co.zw/mydiary/wp-json/wp/v2/note",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({ title, content, status: "publish" }),
        }
      );

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

<div class="mx-auto p-5 md:max-w-md w-full bg-gray-100 rounded mb-16 shadow-lg">
  <h3 class="text-center text-2xl mb-5">Add Note</h3>

  <input
    bind:value={title}
    class="w-full rounded mb-5"
    placeholder="Title"
    type="text"
  />
  <input
    bind:value={content}
    class="w-full rounded mb-5"
    placeholder="Content"
    type="text"
  />

  <button
    on:click={addPost}
    class="px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"
    >Publish</button
  >
</div>
