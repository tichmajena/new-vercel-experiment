<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/code.json");

    console.log(res);

    if (res.ok) {
      const jsonData = await res.json();

      let codenotes = jsonData.map((note) => {
        console.log(note);
        let newNote = JSON.parse(note.string);
        newNote.id = note.id;
        return newNote;
      });

      return {
        props: { codenotes },
      };
    }

    //const { message } = await res.json();

    return {
      //error: new Error(message),
    };
  };
</script>

<script>
  import OurButtons from "./OurButtons.svelte";
  import { codeNotes, domState } from "$lib/js/store";
  import { goto, prefetchRoutes } from "$app/navigation";
  import { onMount } from "svelte";
  let noteIndex = 0;

  export let codenotes;
  $codeNotes = codenotes;
  console.log($codeNotes);

  function restState() {
    $codeNotes.forEach((note) => {
      note.edit = false;
      note.ready = false;
      if (note.steps.length > 0) {
        note.steps.forEach((step) => {
          step.editDesc = false;
          step.editCode = false;
        });
      }
    });
  }

  function toggleTitle() {
    $domState.showTitleContent = false;
    let newNote = {
      title: "",
      steps: [],
      edit: true,
      ready: true,
    };

    $codeNotes = [...$codeNotes, newNote];
    console.log($codeNotes);
    $domState.showTitleForm = true;
    $domState.showFabs = true;
    $domState.showAddDesc = true;
    $domState.save = true;
    $domState.edit = false;
    let index = $codeNotes.length - 1;
    console.log(index);
    goto("/code/" + index + "?v=456");
  }

  function save() {
    $domState.save = false;
    goto("/code/");
  }
  $domState.save = false;
  onMount(async () => {
    prefetchRoutes();
    let token = localStorage.getItem("token");
    token = JSON.parse(token);

    try {
      const res = await fetch(
        `https://www.imajenation.co.zw/mydiary/wp-json/jwt-auth/v1/token/validate`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        $domState.login = true;
      } else {
        console.log("res has an error");
      }
    } catch (error) {
      console.log("ERROR!!!: ", error);
    }
  });
</script>

<div
  class="fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"
>
  <h3 class="ml-10">Code Notes</h3>
</div>

<div class="section md:mt-32 mt-20">
  <div class="container mx-auto max-w-lg ">
    {#each $codeNotes as note, index}
      <a
        on:click={() => {
          restState();
          $codeNotes[index].ready = true;
          // $codeNotes[$domState.pageIndex].edit = true;
          $domState.edit = true;
          $domState.showFabs = true;
        }}
        sveltekit:prefetch
        href="/code/{note.id}-{index}"
      >
        <h3 class="md:text-4xl text-lg ml-8 md:ml-10">
          {$codeNotes[index].title}
        </h3>
      </a>
    {:else}
      Please Press The Add Button To Create Your Notes!!!
    {/each}

    <div class="app-wrapper">
      <div class="note-footer">
        <!-- uvbu -->
        <OurButtons />
      </div>
      <div class="bottom-bar md:pl-64">
        <div id="add-btn">
          {#if !$domState.save && !$domState.edit}
            <button
              class="text-white rounded-full h-14 w-14 bg-pink-700 grid place-items-center"
              on:click={toggleTitle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          {/if}

          {#if $domState.save}
            <button
              class="text-white rounded-full h-14 w-14 bg-green-700 grid place-items-center"
              on:click={save}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
