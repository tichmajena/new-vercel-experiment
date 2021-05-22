<script context="module">
  export const load = async ({ page, fetch }) => {
    console.log(page);
    const res = await fetch(`/contacts/${page.params.slug}.json`);

    console.log(res);

    if (res.ok) {
      const jsonData = await res.json();
      const post = await jsonData[0];

      return {
        props: { post },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
  import { goto, prefetch } from "$app/navigation";
</script>

<script>
  import Button from "$lib/Button/index.svelte";
  import Message from "$lib/Message/index.svelte";
  let loading = false;
  let edit = false;
  let editContactSucc = false;

  export let post;
  console.log(post);
  if (typeof post.phone_numbers === "string") {
    let num = post.phone_numbers.split();
    post.phone_numbers = num;
  }

  let name = post.full_name;
  let phoneNumber = post.phone_numbers;
  let email = post.email;

  $: newContact = {
    title: name,
    full_name: name,
    phone_numbers: phoneNumber,
    email: email,
    status: "publish",
  };

  function newNumber() {
    phoneNumber = [...phoneNumber, ""];
  }

  function deleteNumber(index) {
    phoneNumber.splice(index, 1);
    phoneNumber = phoneNumber;
  }

  async function editPost() {
    let body = newContact;
    let token = localStorage.getItem("token");
    console.log(token);
    token = JSON.parse(token);
    loading = true;

    try {
      const res = await fetch(
        `https://www.imajenation.co.zw/mydiary/wp-json/wp/v2/contact/${post.id}`,
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
        editContactSucc = true;
        loading = false;

        edit = false;
      } else {
        console.log("res has an error");
        loading = false;
      }
    } catch (error) {
      console.log("ERROR!!!: ", error);
      loading = false;
    }
  }
  let successLogic = () => {
    editContactSucc = false;
    goto(`/contacts/${post.slug}?acas=97097`);
  };
</script>

<div
  class="fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"
>
  <h3 class="ml-10">Contacts: {post.full_name}</h3>
</div>

<div class="section md:mt-32 mt-20">
  <label class="" for="input-name">Name...</label>

  <input
    class="bg-gray-300  hover:bg-red-400 flex flex-col"
    type="text"
    bind:value={name}
  />

  {#each phoneNumber as number, index}
    <div class="flex flex-row">
      <div
        style="
        width: 100%;"
        class="pr-2"
      >
        <label class="" for="input-phoneNumber">Phone Number...</label>

        <input
          class="bg-gray-300  hover:bg-red-400 flex flex-col"
          type="text"
          bind:value={number}
        />
      </div>

      <div class="add-btn">
        {#if index !== phoneNumber.length - 1}
          <button
            on:click={() => {
              deleteNumber(index);
            }}
            fab
            size=""
            class="red white-text text-white bg-green-600 grid place-items-center rounded-full h-12 w-12  items-center justify-center text-2xl"
          >
            -
          </button>
        {/if}
        {#if index === phoneNumber.length - 1}
          <button
            class="text-white   bg-pink-700 grid place-items-center rounded-full h-12 w-12  items-center justify-center"
            on:click={newNumber}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round-full"
                stroke-linejoin="round-full"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        {/if}
      </div>
    </div>
  {/each}

  <label class="" for="input-email">Email...</label>

  <input
    class="bg-gray-300  hover:bg-red-400 flex flex-col"
    type="text"
    bind:value={email}
  />

  <Button on:click={editPost} color="blue" {loading}>Save</Button>
</div>
{#if editContactSucc}
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

<style>
  .add-btn {
    margin-bottom: 15px;
    align-self: flex-end;
  }
</style>




<h2>CVLq=-L1~+*{</h2>