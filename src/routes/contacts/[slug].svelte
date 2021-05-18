<script context="module">
  // export const load = async (ctx) => {
  //   const res = await fetch(
  //     `https://imajenation.co.zw/mydiary/wp-json/wp/v2` +
  //       `/contact/?slug=${ctx.page.params.slug}`
  //   );
  //   if (res.ok) {
  //     console.log("res is ok");
  //     const data = await res.json();
  //     const post = await data[0];

  //     return {
  //       props: { post },
  //     };
  //   }

  //   const { message } = await res.json();

  //   return {
  //     error: new Error(message),
  //   };
  // };

  export const load = async (ctx) => {
    const res = await fetch(`/contacts/${ctx.page.params.slug}.json`);

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
</script>

<script>
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
    phoneNumber = [phoneNumber, ""];
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

        edit = false;
      } else {
        console.log("res has an error");
      }
    } catch (error) {
      console.log("ERROR!!!: ", error);
    }
  }
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

  <button
    on:click={editPost}
    class="red white-text bg-blue-600 hover:text-red-600 m-2 w-16">Save</button
  >
</div>

<style>
  .add-btn {
    margin-bottom: 15px;
    align-self: flex-end;
  }
</style>
