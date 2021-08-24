<script context="module">
  import { codeNotes } from "$lib/js/store";
  export async function load({ page, fetch, session }) {
    if (!session) {
      return {
        status: 302,
        redirect: "/auth",
      };
    }
    // Wabva kupi?
    let slug = page.params.index;

    let slugArr = slug.split("-");
    let i = +slugArr[0];

    let id = +slugArr[1];
    let post;
    if (slugArr.length > 1) {
      const res = await fetch(`/code/${id}.json`);
      const data = await res.json();
      post = JSON.parse(data.string);

      if (res.status === 200) {
      }
    }
    return { props: { i, session, post, slug } };
  }
</script>

<script>
  import NoteBody from "./NoteBody.svelte";
  import TitleForm from "./TitleForm.svelte";
  import TitleContent from "./TitleContent.svelte";
  import OurButtons from "./OurButtons.svelte";
  import { domState } from "$lib/js/store";
  import { goto, prefetchRoutes } from "$app/navigation";
  import Message from "$lib/Message/index.svelte";
  //import { browser } from "$app/env";
  import DownloadButton from "$lib/components/DownloadButton.svelte";
  import { patchSinglePostOfflineStatus } from "$lib/js/offline";
  import { onMount } from "svelte";

  export let i = 0;
  export let post;
  export let slug;

  // $codeNotes[i].steps.forEach((step, ii) => {
  //   if (step.codeLang) {
  //   } else {
  //     console.log("hapana pana:", i);
  //     $codeNotes[i].steps[ii].codeLang = "";
  //     console.log(post.steps[ii].codeLang);
  //   }
  // });

  let publishing = true;
  let saving = false;
  let updating = false;

  export let session;

  function savedHandler() {
    post.offline = true;
  }
  function deletedHandler() {
    post.offline = false;
  }

  onMount(() => {
    if ("caches" in window) {
      patchSinglePostOfflineStatus(post).then(
        (patchedPost) => (post = patchedPost)
      );
    }
  });

  console.log("Logging codenotes", $codeNotes[i]);
  function checkEmpty() {
    if ($codeNotes[i] === undefined && post !== undefined) {
      $codeNotes[i] = post;
    } else if ($codeNotes[i]) {
      console.log("new");
    } else {
      console.log("ELSING", post);
      if (browser) {
        goto("/code", { invalidate: true });
      }
    }
  }
  checkEmpty();
  let loading = false;
  let edit = false;

  function restState() {
    $domState.update = false;
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

  function newNote() {
    let newNote = {
      title: "",
      steps: [],
      edit: true,
      ready: true,
      mode: "draft",
    };

    $codeNotes = [...$codeNotes, newNote];
    $domState.showFabs = true;
    $domState.save = true;
    $domState.edit = false;

    let index = $codeNotes.length - 1;
    goto("/code/" + index);
  }

  async function testPost() {
    saving = true;
    $domState.update = false;
    $codeNotes[i].mode = "publish";
    let body = $codeNotes[i];

    let noteString = {
      title: $codeNotes[i].title,
      string: JSON.stringify(body),
      status: "publish",
      author: session.id,
    };

    const res = await fetch(`/code/${i}.json`, {
      method: "POST",
      body: JSON.stringify(noteString),
    });

    const data = await res.json();
    setTimeout(() => {
      restState();
      $codeNotes.ready = true;
      $domState.save = false;
      $domState.update = false;
      goto(`/code/${i}-${data.body.id}`, { replaceState: true });
    }, 2001);
  }

  async function testEdit() {
    updating = true;
    $codeNotes[i].mode = "publish";
    let body = $codeNotes[i];

    let noteString = {
      title: $codeNotes[i].title,
      string: JSON.stringify(body),
      status: "publish",
      author: session.id,
    };

    console.log($codeNotes[i].id);

    const res = await fetch(`/code/${$codeNotes[i].id}.json`, {
      method: "PUT",
      body: JSON.stringify(noteString),
    });

    const data = await res.json();
    console.log(res);
    console.log(data);
    updating = false;
    $domState.update = false;
  }
  if (!$domState.save) {
    restState();
  }
</script>

<div
  class="fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"
>
  <h3 class="ml-10">Code Notes</h3>
</div>

<div class="section md:mt-8 mt-12">
  <div class="container mx-auto max-w-screen-md ">
    {#if $codeNotes[i]}
      <div class="app-wrapper">
        <div class="note-title">
          <div class="note-title__title">
            <div class="title__form-div">
              {#if $codeNotes[i].edit}
                <TitleForm {i} />
              {/if}
            </div>
            <div class="title__content-div">
              {#if !$codeNotes[i].edit}
                <TitleContent {i} />
              {/if}
            </div>
          </div>
        </div>
        <div class="note-body">
          <!-- {#if !$codeNotes[noteIndex].edit} -->
          <ol class="list-decimal">
            {#each $codeNotes[i].steps as step, ii}
              <li class="mb-5">
                <NoteBody {i} {ii} />
              </li>
            {/each}
          </ol>
          <!-- {/if} -->
          {#if !publishing}
            <Message color="red">
              <!--  -->
              <svg
                slot="icon"
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
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                />
              </svg>
              <span slot="message">An Error has occured</span>
            </Message>
          {/if}

          <DownloadButton
            on:saved={savedHandler}
            on:deleted={deletedHandler}
            offline={post.offline}
            {slug}
          />
        </div>

        <div class="note-footer">
          <!-- uvbu -->
          <OurButtons {i} />
        </div>
        <div class="bottom-bar md:pl-64">
          <div id="add-btn">
            {#if !$domState.save && !$domState.update}
              <button
                class="text-white rounded-full h-14 w-14 bg-pink-700 grid place-items-center"
                on:click={newNote}
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

            {#if $domState.save && $codeNotes[i].mode === "draft"}
              <button
                class="text-white rounded-full h-14 w-14 bg-green-700 flex items-center justify-center"
                on:click={testPost}
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

            {#if $domState.save && $codeNotes[i].mode === "publish"}
              <button
                class="text-white rounded-full h-14 w-14 bg-green-700 flex items-center justify-center"
              >
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
              </button>
            {/if}

            {#if $domState.update && $codeNotes[i].mode === "publish"}
              <button
                class="text-white rounded-full h-14 w-14 bg-blue-700 grid place-items-center"
                on:click={testEdit}
              >
                {#if updating}
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
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .app-wrapper {
    padding-bottom: 200px;
  }
</style>
