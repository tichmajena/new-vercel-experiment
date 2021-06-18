<script context="module">
  import { codeNotes } from "$lib/js/store";

  let notes;

  const unsubscribe = codeNotes.subscribe((value) => {
    notes = value;
  });
  export async function load({ page, fetch }) {
    // Wabva kupi?
    console.log(page.params.index);
    let slug = page.params.index;

    let slugArr = slug.split("-");

    try {
      if (slugArr.length > 1) {
        console.log("TIIIIRIKU SPLLIIIIITER!!!!");
        let id = slugArr[0];
        let index = slugArr[1];
        console.log(index);
        const store = await fetch(`/code.json`);
        let storeData = await store.json();
        console.log(storeData);

        let codenotes = storeData.map((note) => {
          console.log(note);
          let newNote = JSON.parse(note.string);
          newNote.id = note.id;
          return newNote;
        });

        codeNotes.set(codenotes);

        const res = await fetch(`/code/${id}.json`);
        console.log(res);
        let note;
        if (res.ok) {
          console.log("res is okay");
          let noteObj = await res.json();

          note = JSON.parse(noteObj.string);
          console.log(noteObj);
        }
        return { props: { note, index } };
      }
      let index = page.params.index;
      console.log(notes);
      let note = notes[index];
      return { props: { note, index } };
    } catch (error) {
      console.log("ERROOOORR", error);
      console.error(error);
    }
  }
</script>

<script>
  import NoteBody from "./NoteBody.svelte";
  import TitleForm from "./TitleForm.svelte";
  import TitleContent from "./TitleContent.svelte";
  import OurButtons from "./OurButtons.svelte";
  import { domState } from "$lib/js/store";
  import { goto, prefetchRoutes } from "$app/navigation";
  import { post } from "$lib/js/req_utils";
  export let index;
  let saving = false;
  console.log("INDEX!!", index);

  export let note;
  console.log(note);
  let noteIndex = +index;
  $domState.pageIndex = +index;
  console.log($codeNotes, $codeNotes[noteIndex]);
  let loading = false;
  let edit = false;

  if ($codeNotes[index] === undefined) {
    console.log("UNDEFINNED", $codeNotes);
  }
  console.log("page index", $domState.pageIndex);
  // console.log($codeNotes[index].ready);
  console.log($domState.showFabs);

  async function newPost() {
    saving = true;
    let body = $codeNotes[index];
    console.log(body);
    body = JSON.stringify(body);
    let noteString = {
      title: $codeNotes[index].title,
      string: body,
      status: "publish",
    };
    let token = localStorage.getItem("token");
    console.log(token);
    token = JSON.parse(token);
    try {
      const res = await fetch(
        `https://www.imajenation.co.zw/mydiary/wp-json/wp/v2/code_note/`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(noteString),
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        console.log("res is okay");
        console.log(data);
        saving = false;
        edit = false;
        goto(`/code/?v=5777`);
        $domState.showFabs = false;
      } else {
        console.log("res has an error");
        loading = false;
      }
    } catch (error) {
      console.log("ERROR!!!: ", error);
    }
  }

  async function editPost() {
    let body = $codeNotes[index];
    body = JSON.stringify(body);
    let noteString = {
      title: $codeNotes[index].title,
      id: note.id,
      string: body,
      status: "publish",
    };
    let token = localStorage.getItem("token");
    console.log(token);
    token = JSON.parse(token);
    loading = true;
    console.log("note id: ", note.id);
    try {
      const res = await fetch(
        `https://www.imajenation.co.zw/mydiary/wp-json/wp/v2/code_note/${note.id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(noteString),
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        console.log("res is okay");
        console.log(data);
        loading = false;

        edit = false;
        location.reload();
      } else {
        console.log("res has an error");
        loading = false;
      }
    } catch (error) {
      console.log("ERROR!!!: ", error);
    }
  }

  function restState() {
    $codeNotes.forEach((note) => {
      note.edit = false;
      if (note.steps.length > 0) {
        note.steps.forEach((step) => {
          step.editDesc = false;
          step.editCode = false;
        });
      }
    });
  }

  function toggleTitle() {
    $domState.showTitleForm = false;
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
    $domState.showAdd = false;
    $domState.save = true;
    $domState.edit = false;

    let index = $codeNotes.length - 1;
    console.log(index);
    goto("/code/" + index);
  }

  function save() {
    $domState.save = false;
    goto("/code/");
  }
</script>

<div
  class="fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"
>
  <h3 class="ml-10">Code Notes</h3>
</div>

<div class="section md:mt-32 mt-20">
  <div class="container mx-auto max-w-lg ">
    <div class="app-wrapper">
      <div class="note-title">
        <div class="note-title__title">
          <div class="title__form-div">
            {#if $codeNotes[index].edit}
              <TitleForm {index} {note} />
            {/if}
          </div>
          <div class="title__content-div">
            {#if !$codeNotes[index].edit}
              <TitleContent {index} {note} />
            {/if}
          </div>
        </div>
      </div>
      <div class="note-body">
        <!-- {#if !$codeNotes[noteIndex].edit} -->
        <ol class="list-decimal">
          {#each $codeNotes[noteIndex].steps as step, index}
            <li class="mb-5">
              <NoteBody step={index} note={step} />
            </li>
          {/each}
        </ol>
        <!-- {/if} -->
      </div>

      <div class="note-footer">
        <!-- uvbu -->
        <OurButtons {note} />
      </div>
      <div class="bottom-bar md:pl-64">
        <div id="add-btn">
          {#if !$domState.save && !$domState.update}
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

          {#if $domState.save && !$domState.update}
            <button
              class="text-white rounded-full h-14 w-14 bg-green-700 flex items-center justify-center"
              on:click={newPost}
            >
              {#if saving}
                <svg
                  class="animate-spin mx-auro h-8 w-8 text-white text-center"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              {:else}
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
              {/if}
            </button>
          {/if}

          {#if $domState.update}
            <button
              class="text-white rounded-full h-14 w-14 bg-blue-700 grid place-items-center"
              on:click={editPost}
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
