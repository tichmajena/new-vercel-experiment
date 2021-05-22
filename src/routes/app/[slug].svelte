<script context="module">
  import { notebook } from "$lib/js/store";
  import { appNotes } from "$lib/js/store";

  let chakuti;

  const unsubscribe = appNotes.subscribe((value) => {
    chakuti = value;
  });

  export async function load(ctx) {
    let slug = ctx.page.params.slug;

    let address = slug.split("");
    let leaf = chakuti;

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
  export let slug;

  export let leaf;
  onDestroy(unsubscribe);

  let edit = false;
  let loading = false;
  let appName;
  let steps;

  $: {
    appName = leaf.note.title;
    steps = leaf.note.steps;
    if (steps.length === 0) {
      steps = [{ note: { title: "", steps: [] } }];
    }
  }
  $: myNotes = {
    title: appName,
    steps: steps,
  };

  function editNotes() {
    edit = true;
    // $appNotes = [...$appNotes, myNotes];
    // appName = "";
    // steps = [""];
  }

  function newStep() {
    console.log(myNotes.steps);
    myNotes.steps = [...myNotes.steps, { note: { title: "", steps: [] } }];
    console.log(myNotes.steps);
  }

  function deleteStep(index) {
    console.log(index);

    myNotes.steps = myNotes.steps.filter((e) => e !== myNotes.steps[index]);
    //  myNotes.steps.splice(index, 1);
    // myNotes.steps = myNotes.steps;
  }
</script>

<h1>I am slug App notes</h1>

{#if !edit}
  <h2>{leaf.note.title}</h2>
  {#each leaf.note.steps as step, index}
    <div class="flex flex-row">
      <div style="width: 100%;" class="pr-2">{step.note.title}</div>

      {#if step.note.steps.length > 0}
        <a sveltekit:prefetch href="/app/{slug}{index}?bust=434534">More</a>
      {:else}
        <a sveltekit:prefetch href="/app/{slug}{index}?bust=434534">Add</a>
      {/if}
    </div>
  {/each}

  <Button
    color="red"
    {loading}
    on:click={() => {
      edit = true;
    }}>Edit</Button
  >
{/if}

{#if !edit}
  <input type="text" bind:value={myNotes.appName} />App Name
  {#each myNotes.steps as step, index}
    <div class="flex flex-row">
      <div style="width: 100%;" class="pr-2">
        <input type="text" bind:value={step.note.title} />Step
        {index + 1}
      </div>

      <div class="add-btn">
        {#if index !== myNotes.steps.length - 1}
          <button
            class="text-white bg-pink-700 grid place-items-center rounded-full h-12 w-12  items-center justify-center"
            on:click={() => {
              deleteStep(index);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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
        {#if index === myNotes.steps.length - 1}
          <button
            class="text-white bg-green-700 grid place-items-center rounded-full h-12 w-12  items-center justify-center"
            on:click={newStep}
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

  <Button color="red" {loading} on:click={editNotes}>Save</Button>
{/if}

<style>
  .add-btn {
    margin-bottom: 15px;
    align-self: flex-end;
  }
</style>
