<script>
  let title, content;
  let data;
  let notesSucc = false;
  import { domState } from "$lib/js/store";
  import { goto } from "$app/navigation";

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

      data = await res.json();
      console.log(data.slug);

      if (res.ok) {
        notesSucc = true;
      } else {
        console.log("res has an error");
      }
    } catch (error) {
      console.log("ERROR!!!: ", error);
    }
  }
  function removeMessage() {
    setTimeout(() => {
      notesSucc = false;
      goto(`/notes/${data.slug}`);
    }, 2000);
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

{#if notesSucc}
  <div
    use:removeMessage
    class="flex items-center justify-center mx-auto md:max-w-md w-full bg-green-100 rounded mb-16 shadow-lg text text-green-600 p-5"
  >
    <div
      class="p-2 border-blue-700 border-2 mr-3 rounded-full flex justify-center items-center"
    >
      <svg
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
    </div>

    <span class="text-xl"> Notes successfull </span>
  </div>
{/if}
