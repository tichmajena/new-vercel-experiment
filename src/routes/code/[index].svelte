<script context="module">
  export async function load(ctx) {
    // Wabva kupi?
    console.log(ctx.page.params.index);
    let index = ctx.page.params.index;
    return { props: { index } };
  }
</script>

<script>
  import NoteBody from "./NoteBody.svelte";
  import TitleForm from "./TitleForm.svelte";
  import TitleContent from "./TitleContent.svelte";
  import OurButtons from "./OurButtons.svelte";
  import { codeNotes, domState } from "$lib/js/store";
  import { goto } from "$app/navigation";
  export let index;
  let noteIndex = index;
  $domState.pageIndex = index;

  console.log("page index", $domState.pageIndex);

  function toggleTitle() {
    let newNote = {
      title: "",
      steps: [],
    };

    $codeNotes = [...$codeNotes, newNote];
    console.log($codeNotes);
    $domState.showTitleForm = true;
    $domState.showFabs = true;
    $domState.showAddDesc = true;
    $domState.showAdd = false;

    let index = $codeNotes.length - 1;
    console.log(index);
    goto("/code/" + index);
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
            {#if $domState.showTitleForm}
              <TitleForm {index} />
            {/if}
          </div>
          <div class="title__content-div">
            {#if $domState.showTitleContent}
              <TitleContent {index} />
            {/if}
          </div>
        </div>
      </div>
      <div class="note-body">
        {#if $domState.showTitleContent}
          <ol class="list-decimal">
            {#each $codeNotes[noteIndex].steps as step, index}
              <li class="mb-5">
                <NoteBody step={index} />
              </li>
            {/each}
          </ol>
        {/if}
      </div>

      <div class="note-footer">
        <!-- uvbu -->
        <OurButtons />
      </div>
      <div class="bottom-bar md:pl-64">
        <div id="add-btn">
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
        </div>
      </div>
    </div>
  </div>
</div>
