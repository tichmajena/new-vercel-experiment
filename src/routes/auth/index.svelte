<script context="module">
  export async function load({ page, fetch, session, context }) {
    if (session) {
      return {
        status: 302,
        redirect: "/",
      };
    }
    return {};
  }
</script>

<script>
  import { scale, fade } from "svelte/transition";

  let error = false;
  let succ = false;
  let errMessage = "";
  let loading = false;
  let username = "tichmajena";
  let password = "M@jena0347";
  let displayName = "";
  let email = "";
  let login = true;

  async function submit() {
    loading = true;
    let body = {
      username,
      password,
    };

    try {
      const res = await fetch("/auth/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      console.log(data);

      if (res.status === 200) {
        console.log(res);
        console.log("res is okay");
        console.log(data);
        error = false;
        loading = false;
        succ = true;
        setTimeout(() => {
          window.location = "/";
        }, 2001);
      } else {
        error = true;
        loading = false;
        errMessage = "Wabhaiza Email kana Password, hameno.";
      }
    } catch (err) {
      console.log("ERRRR");
      console.error(err);
      error = true;
      loading = false;
      errMessage = "Check Your Internet Connection";
    }
  }

  function removeMessage() {
    setTimeout(() => {
      succ = false;
    }, 2000);
  }

  function removeERR() {
    setTimeout(() => {
      error = false;
    }, 2000);
  }

  function register() {}
</script>

<div
  in:scale
  out:scale
  class="mx-auto p-5 md:max-w-md w-full bg-gray-100 rounded mb-16 shadow-lg"
>
  <h3 class="text-center text-2xl mb-5">Login</h3>
  <input
    bind:value={username}
    class:border-red-700={error === true}
    class:bg-red-200={error === true}
    class="w-full rounded mb-5"
    placeholder="Email"
    type="text"
  />

  <input
    bind:value={displayName}
    class:border-red-700={error === true}
    class:bg-red-200={error === true}
    class="w-full rounded mb-5"
    placeholder="Email"
    type="text"
  />
  <input
    bind:value={email}
    class:border-red-700={error === true}
    class:bg-red-200={error === true}
    class="w-full rounded mb-5"
    placeholder="Email"
    type="text"
  />

  <input
    bind:value={password}
    class:border-red-700={error === true}
    class:bg-red-200={error === true}
    class="w-full rounded mb-5"
    placeholder="Password"
    type="password"
  />
  {#if error === true}
    <span class="text-red-700 block mb-5">Error, I think pane zvaitika</span>
  {/if}
  {#if login}
    <button
      on:click={submit}
      class:bg-pink-700={!loading}
      class:bg-pink-300={loading}
      class="px-6 py-2 text-white rounded hover:bg-pink-500"
      >{#if loading}...{:else}Submit {/if}</button
    >
  {:else}
    <button
      on:click={register}
      class:bg-pink-700={!loading}
      class:bg-pink-300={loading}
      class="px-6 py-2 text-white rounded hover:bg-pink-500"
      >{#if loading}...{:else}Submit {/if}</button
    >
  {/if}
</div>

{#if succ}
  <div
    use:removeMessage
    class="flex items-center justify-center mx-auto md:max-w-md w-full bg-green-100 rounded mb-16 shadow-lg text text-green-600 p-5"
  >
    <div
      class="p-2 border-green-700 border-2 mr-3 rounded-full flex justify-center items-center"
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

    <span class="text-xl"> Login successfull </span>
  </div>
{/if}

{#if error}
  <div
    class="flex items-center justify-center mx-auto md:max-w-md w-full bg-red-100 rounded mb-16 shadow-lg text text-red-600 p-5"
  >
    <div
      class="p-2 border-red-700 border-2 mr-3 rounded-full flex justify-center items-center"
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

    <span class="text-xl"> An Error has occured: {errMessage} </span>
  </div>
{/if}
