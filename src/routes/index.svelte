<script context="module">
  export const prerender = true;
</script>

<script>
  import { scale, fade } from "svelte/transition";
  let username = "berlinmhiripi@gmail.com";
  let password = "M@jena347";

  async function submit() {
    let body = {
      username,
      password,
    };
    try {
      const res = await fetch(
        "https://mydiary.local/wp-json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const data = await res.json();

      if (res.ok) {
        console.log("res is okay");
        localStorage.setItem("token", JSON.stringify(data.token));
        let token = localStorage.getItem("token");
        console.log(JSON.parse(token));
      } else {
        console.log("Error, I think pane zvaitika");
      }
    } catch (error) {
      console.log(error);
    }
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="mx-auto p-5 md:max-w-md w-full bg-gray-100 rounded mb-16 shadow-lg">
  <h3 class="text-center text-2xl mb-5">Login</h3>
  <input
    bind:value={username}
    class="w-full rounded mb-5"
    placeholder="Email"
    type="password"
  />
  <input
    bind:value={password}
    class="w-full rounded mb-5"
    placeholder="Password"
    type="password"
  />
  <button
    on:click={submit}
    class="px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"
    >Submit</button
  >
</div>

<div in:fade class="grid grid-rows-2 grid-flow-col gap-4">
  <a href="/app" class="text-blue-100"
    ><div class="p-10 bg-blue-700 text-blue-100 hover:bg-blue-600 text-center">
      App Notes
    </div></a
  >
  <a href="/code" class="text-blue-100"
    ><div class=" p-10 bg-blue-700 text-blue-100 hover:bg-blue-600 text-center">
      Code Notes
    </div></a
  >
  <a href="/contacts" class="text-blue-100"
    ><div class="p-10 bg-blue-700 text-blue-100 hover:bg-blue-600 text-center">
      Contacts
    </div></a
  >
  <a href="/notes" class="text-blue-100"
    ><div class="p-10 bg-blue-700 text-blue-100 hover:bg-blue-600 text-center">
      Notes
    </div></a
  >
</div>
