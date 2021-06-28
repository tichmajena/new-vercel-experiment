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
  import { onDestroy } from "svelte";
  import { appNotes, notebook } from "$lib/js/store";
  import Button from "$lib/Button/index.svelte";
  import Card from "$lib/Components/Card.svelte";
  import { goto } from "$app/navigation";
  export let slug;
  export let user;
  console.log(user);

  export let leaf;

  let edit = false;
  let loading = false;
  let appName = "";
  let steps = [{ note: { title: "", steps: [] }, id: "" }];

  // $: if (leaf.note.steps.length === 0) {
  //   edit = true;
  //   leaf.note.steps = [{ note: { title: "", steps: [] } }];
  // }

  $: myNotes = {
    note: {
      title: appName,
      steps: steps,
    },
    id: "",
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

  async function saveNote() {
    console.log(user);
    $appNotes = [...$appNotes, myNotes];
    let body = {
      title: myNotes.note.title,
      string: JSON.stringify(myNotes),
      status: "publish",
      author: user.id,
    };

    const res = await fetch("/app/new.json", {
      method: "POST",
      body: JSON.stringify(body),
    });

    console.log(res);
    const json = await res.json();

    console.log(json);

    if (res.ok) {
      goto(`/app`);
    }
  }

  function newStep() {
    steps = [...steps, { note: { title: "", steps: [] }, id: "" }];
    console.log(steps);
  }

  function deleteStep(index) {
    console.log(index);

    steps = steps.filter((e) => e !== steps[index]);
    // myNotes.steps.splice(index, 1);
    // myNotes.steps = myNotes.steps;
  }
</script>

<h1>App notes</h1>

<Card>
  <div class="flex flex-col-reverse mb-5">
    <input class="w-full rounded" type="text" bind:value={appName} />
    <label for="Title">App Name</label>
  </div>

  {#each steps as step, index}
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
        {#if index !== steps.length - 1}
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
        {#if index === steps.length - 1}
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

  <Button color={"red"} {loading} on:click={saveNote}>Save</Button>
</Card>

<style>
  .add-btn {
    align-self: flex-end;
  }
</style>
