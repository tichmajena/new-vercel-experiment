<script context="module">
  async function load({ page, fetch, session }) {
    console.log(session);
    if (!session) {
      return {
        status: 302,
        location: "/auth",
      };
    }

    let user = session;
    return {
      props: { user },
    };
  }
</script>

<script>
  import { appNotes, domState } from "$lib/js/store";
  import { notebook } from "$lib/js/store";

  function displayForm() {}
  let arr1 = ["0", 1, 2, 3, 4, 5, 6];
  let arr2 = ["a", "b", "c", "d", "e", "f"];

  let a = arr2[arr1[0]];
  console.log("A:", a);
</script>

<h1 class="text-2xl font-bold">App Notes</h1>

<main>
  <a href="/app/new">
    <h3 class="mb-10">App Notes</h3>
  </a>
  <ul>
    {#each $notebook as leaf, index}
      <li>
        <div
          class="flex justify-between mb-3"
          style="border-bottom: 2px solid gray"
        >
          <div class="flex flex-col">
            <h5 class="block">{leaf.note.title}</h5>
            <span class="block"
              >{leaf.note.steps.length}
              Step{#if leaf.note.steps.length > 1}s{/if}</span
            >
          </div>
          <a class="mb-2" href="/app/{index}">
            <button
              class="py-2 px-4 bg-pink-700 rounded-md text-white text-sm "
            >
              More
            </button>
          </a>
        </div>
      </li>
    {/each}
  </ul>
</main>
<div class="fab"><button on:click={displayForm}> + </button></div>

<style>
  .fab {
    position: fixed;
    right: 50px;
    bottom: 50px;
  }
</style>
