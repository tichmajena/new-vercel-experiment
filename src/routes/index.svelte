<script context="module">
  export const prerender = true;
  export async function load({ page, fetch, session, context }) {
    console.log(session);
    if (!session) {
      return {
        status: 302,
        redirect: "/auth",
      };
    }
    return {
      props: {
        session,
      },
    };
  }
</script>

<script>
  import { domState } from "$lib/js/store";
  import { scale, fade } from "svelte/transition";
  import { onMount } from "svelte";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div in:scale class="grid grid-rows-2 grid-flow-col gap-4">
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
