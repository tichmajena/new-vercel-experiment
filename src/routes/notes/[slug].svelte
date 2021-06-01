<script context="module">
  // see https://kit.svelte.dev/docs#loading
  import { goto, prefetch } from "$app/navigation";

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
  import Message from "$lib/Message/index.svelte";
  import Button from "$lib/Button/index.svelte";

  let edit = false;
  export let post;
  console.log(post);
  let editNotesSucc = false;
  let editNotesError = false;
  let loading = false;
  let title = post.title.rendered;
  let content = post.content.rendered;

  function editForm() {
    edit = !edit;
  }

  async function editPost() {
    let body = { title, content, status: "publish" };
    let token = localStorage.getItem("token");
    token = JSON.parse(token);

    edit = true;
    loading = true;

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
        edit = false;
        editNotesSucc = true;
        loading = false;
        prefetch(`/notes/${data.slug}`);
      } else {
        console.log("res has an error");
        editNotesError = true;
        loading = false;
      }
    } catch (error) {
      console.log("ERROR!!!: ", error);
      editNotesError = true;
      loading = false;
    }
  }

  function removeMessage() {
    setTimeout(() => {}, 2000);
  }

  let successLogic = () => {
    editNotesSucc = false;
    goto(`/notes/${post.slug}?acas=97097`);
  };

  let errorLogic = () => {
    editNotesError = false;
  };
</script>

{#if !editNotesSucc}
  <div
    class="mx-auto p-5 md:max-w-md w-full bg-gray-100 rounded mb-16 shadow-lg"
  >
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
      <Button on:click={editPost} color="red" {loading}>Update
      </Button>
    {/if}
  </div>
{/if}

{#if editNotesSucc}
  <Message color="green" timeout={3000} logic={successLogic}>
    <span slot="message" class="text-xl"> Edit successfull </span>

    <svg
      slot="icon"
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
      />
    </svg>
  </Message>
{/if}

{#if editNotesError}
  <Message color="red" timeout={200000} logic={errorLogic}>
    <span slot="message" class="text-xl"> There was an error </span>

    <svg
      slot="icon"
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </Message>
{/if}
