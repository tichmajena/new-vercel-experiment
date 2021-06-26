<script context="module">
  import { notebook } from "$lib/js/store";
  import { appNotes } from "$lib/js/store";

  let chakuti;

  const unsubscribe = notebook.subscribe((value) => {
    chakuti = value;
  });

  export async function load({ page, fetch, session }) {
    if (!session) {
      return {
        status: 302,
        redirect: "/auth",
      };
    }
    let slug = page.params.slug;

    let leaf = chakuti;
    let address = slug.split("");

    address.forEach((a, i) => {
      a = +a;
      if (i === address.length - 1) {
        leaf = leaf[a];
      } else {
        // Drill some more
        leaf = leaf[a].note.steps;
      }
      console.log(leaf);
    });
    return { props: { leaf, slug } };
  }
</script>

<script>
  import { onDestroy } from "svelte";
  import Button from "$lib/Button/index.svelte";
  import Card from "$lib/Components/Card.svelte";
  export let slug;

  export let leaf;
  console.log(leaf);
  onDestroy(unsubscribe);

  let edit = false;
  let loading = false;
  let appName;
  let steps;
  appName = leaf.note.title;

  appName = leaf.note.title;
  steps = leaf.note.steps;
  console.log("checking");

  $: if (leaf.note.steps.length === 0) {
    edit = true;
    leaf.note.steps = [{ note: { title: "", steps: [] } }];
  }

  $: myNotes = {
    title: leaf.note.title,
    steps: leaf.note.steps,
  };

  function editNotes() {
    edit = false;
    window.leaf = $appNotes;
    let newLeaf = ``;
    let address = slug.split("");
    leaf.note = myNotes;
    address.forEach((a, i) => {
      a = +a;
      if (i === 0) {
        newLeaf += `window.leaf[${a}].note.steps`;
      } else if (i === address.length - 1) {
        newLeaf += `[${a}].note`;
      } else {
        // Drill some more
        newLeaf += `[${a}].note.steps`;
      }
    });

    console.log(window.leaf);
    var x = `let u = ${newLeaf}; console.log(u)`;
    new Function(x)();
  }

  function newStep() {
    console.log(myNotes.steps);
    leaf.note.steps = [...leaf.note.steps, { note: { title: "", steps: [] } }];
    console.log(leaf.note.steps);
  }

  function deleteStep(index) {
    console.log(index);

    leaf.note.steps = leaf.note.steps.filter(
      (e) => e !== leaf.note.steps[index]
    );
    // myNotes.steps.splice(index, 1);
    // myNotes.steps = myNotes.steps;
  }
</script>

<h1>I am slug App notes</h1>

{#if !edit}
  <div class="max-w-md mx-auto">
    <h2 class="text-2xl mb-5">{leaf.note.title}</h2>
    <ol class="list-decimal pl-5">
      {#each leaf.note.steps as step, index}
        <li class:bg-gray-300={step.note.steps.length > 0} class="p-3">
          <div class="flex flex-row">
            <div style="width: 100%;" class="pr-2">{step.note.title}</div>

            {#if step.note.steps.length > 0}
              <a
                sveltekit:prefetch
                class="text-pink-700 bg-gray-300 p-1 rounded-full"
                href="/app/{slug}{index}?bust=434534"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg></a
              >
            {:else}
              <a
                class="text-gray-500 bg-gray-300 rounded-full p-1"
                sveltekit:prefetch
                href="/app/{slug}{index}?bust=434534"
                ><svg
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
                </svg></a
              >
            {/if}
          </div>
        </li>
      {/each}
    </ol>

    <Button
      color={"red"}
      {loading}
      on:click={() => {
        edit = true;
      }}
    >
      Edit
    </Button>
  </div>
{/if}

{#if edit}
  <Card>
    <div class="flex flex-col-reverse mb-5">
      <input class="w-full rounded" type="text" bind:value={leaf.note.title} />
      <label for="Title">App Name</label>
    </div>

    {#each leaf.note.steps as step, index}
      <div class="flex flex-row mb-5">
        <div style="width: 100%;" class="pr-2 flex flex-col-reverse">
          <input
            class="w-full rounded"
            id="step-{index + 1}"
            type="text"
            bind:value={step.note.title}
          />
          <label class="text-xs" for="step-{index + 1}" />
          Step
          {index + 1}
        </div>

        <div class="add-btn mb-1">
          {#if index !== leaf.note.steps.length - 1}
            <button
              class="text-white bg-pink-700 grid place-items-center rounded-full h-8 w-8  items-center justify-center"
              on:click={() => {
                deleteStep(index);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 12H4"
                />
              </svg>
            </button>
          {/if}
          {#if index === leaf.note.steps.length - 1}
            <button
              class="text-white bg-green-700 grid place-items-center rounded-full h-8 w-8  items-center justify-center"
              on:click={newStep}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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

    <Button color={"red"} {loading} on:click={editNotes}>Save</Button>
  </Card>
{/if}

<style>
  .add-btn {
    align-self: flex-end;
  }
</style>
