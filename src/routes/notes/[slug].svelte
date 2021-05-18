<script context="module">
  // see https://kit.svelte.dev/docs#loading
  export const load = async (ctx) => {
    const res = await fetch(
      `https://imajenation.co.zw/mydiary/wp-json/wp/v2` +
        `/note/?slug=${ctx.page.params.slug}`
    );
    if (res.ok) {
      console.log("res is ok");
      const data = await res.json();
      const post = await data[0];

      console.log(post);

      return {
        props: { post },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<script>
  let edit = false;
  export let post;
  console.log(post);
  let title = post.title.rendered;
  let content = post.content.rendered;

  function editForm() {
    edit = !edit;
  }

  async function editPost() {
    let body = { title, content, status: "publish" };
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    try {
      const res = await fetch(
        `https://www.imajenation.co.zw/mydiary/wp-json/wp/v2/note/${post.id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(body),
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        console.log("res is okay");
        console.log(data);

        edit = false;
      } else {
        console.log("res has an error");
      }
    } catch (error) {
      console.log("ERROR!!!: ", error);
    }
  }
</script>

<div class="mx-auto p-5 md:max-w-md w-full bg-gray-100 rounded mb-16 shadow-lg">
  {#if !edit}
    <h1>{post.title.rendered}</h1>

    <div>
      {@html post.content.rendered}
    </div>

    <button
      on:click={editForm}
      class="px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"
      >Edit</button
    >
  {/if}

  {#if edit}
    <h3 class="text-center text-2xl mb-5">Edit Note</h3>
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
      on:click={editPost}
      class="px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"
      >Update</button
    >
  {/if}
</div>
