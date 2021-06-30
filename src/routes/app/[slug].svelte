<script context="module">
  import { notebook } from "$lib/js/store";
  import { appNotes } from "$lib/js/store";

  export async function load({ page, fetch, session }) {
    if (!session) {
      return {
        status: 302,
        redirect: "/auth",
      };
    }
    let chakuti;

    const unsubscribe = appNotes.subscribe((value) => {
      chakuti = value;
    });
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
  import Animate from "$lib/Animate.svelte";
  import { goto } from "$app/navigation";
  import { domState } from "$lib/js/store";
  import { page } from "$app/stores";
  import Message from "$lib/Message/index.svelte";

  export let slug;

  export let leaf;
  console.log("SLUG: ", slug);
  onDestroy(unsubscribe);

  let edit = false;
  let loading = false;
  let appName;
  let steps;
  let levels = [];
  let level;
  let slugs;
  let errMessage;
  let succ;
  let errr;

  $: {
    if (levels.includes($page.path)) {
      console.log("Already in");
    } else {
      levels = [...levels, $page.path];
      console.log(levels);
    }
  }

  let getindex = () => {
    let arr = slug.split("");

    return arr[0];
  };

  let follaz = () => {
    $domState.appForward = false;
    let url = getback();
    goto(`/app/${url}`, { replaceState: true });
    //$domState.appForward = true;
  };

  let getback = () => {
    let arr = slug.split("");
    if (arr.length > 1) {
      arr.pop();

      let arr2 = arr.join("");
      console.log("ARR: ", arr2);
      return arr2;
      goto(`app/${back}`);
    }
    return slug;
  };
  appName = leaf.note.title;

  appName = leaf.note.title;
  steps = leaf.note.steps;
  console.log("checking");

  $: if (leaf.note.steps.length === 0) {
    console.log("LEAF ID: ", leaf.id);
    edit = true;
    leaf.note.steps = [{ note: { title: "", steps: [] }, id: leaf.id }];
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

    var x = `let u = ${newLeaf}; console.log(u)`;
    new Function(x)();
  }

  async function testEdit() {
    loading = true;
    let i = getindex();
    let id = $appNotes[i].id;
    let body = {
      title: $appNotes[i].note.title,
      string: JSON.stringify($appNotes[i]),
      status: "publish",
    };
    edit = false;
    const res = await fetch(`/app/${id}.json`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    const json = await res.json();

    loading = false;

    if (json.status === 303) {
      succ = true;
      console.log(json);
    } else {
      errr = true;
      await console.log(json);
    }
  }

  function newStep() {
    console.log(leaf.id);
    leaf.note.steps = [
      ...leaf.note.steps,
      { note: { title: "", steps: [] }, id: leaf.id },
    ];
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

  function removeMessage() {
    setTimeout(() => {
      succ = false;
    }, 2000);
  }
</script>

<h1>I am slug App notes</h1>
{#key slug}
  <Animate>
    {#if !edit}
      <div class="max-w-md mx-auto">
        <h2 class="text-2xl mb-5">{leaf.note.title}</h2>
        <div>
          {#each slug.split("") as lug, i}
            {#if i > 0} | {/if}<a href={levels[i]}>Level {i + 1} </a>
          {/each}
        </div>
        <a on:click={follaz} class="text-pink-600 text-2xl">Back</a>
        <ol class="list-decimal pl-5">
          {#each leaf.note.steps as step, index}
            <li class:bg-gray-300={step.note.steps.length > 0} class="p-3">
              <div class="flex flex-row">
                <div style="width: 100%;" class="pr-2">{step.note.title}</div>

                {#if step.note.steps.length > 0}
                  <a
                    on:click={() => {
                      $domState.appForward = true;
                    }}
                    sveltekit:prefetch
                    class="text-pink-700 bg-gray-300 p-1 rounded-full"
                    href="/app/{slug}{index}"
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
                    on:click={() => {
                      $domState.appForward = true;
                    }}
                    class="text-gray-500 bg-gray-300 rounded-full p-1"
                    sveltekit:prefetch
                    href="/app/{slug}{index}"
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
          <input
            class="w-full rounded"
            type="text"
            bind:value={leaf.note.title}
          />
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
                  class="text-white bg-pink-700 hover:bg-pink-500 transition-colors grid place-items-center rounded-full h-8 w-8  items-center justify-center"
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
                  class="text-white bg-green-700 hover:bg-green-500 transition-colors grid place-items-center rounded-full h-8 w-8 items-center justify-center"
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

        <Button color={"red"} {loading} on:click={testEdit}>Save</Button>
      </Card>
    {/if}
  </Animate>
{/key}

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

{#if errr}
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

<style>
  .add-btn {
    align-self: flex-end;
  }
</style>
