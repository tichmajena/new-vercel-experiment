<script>
  import { codeNotes, domState } from "$lib/js/store";
  export let step;
  export let note;
  let showTitleForm = () => {
    $domState.activeIndex = step;
    note.steps[step].showDForm = true;
    note.steps[step].showDContent = false;
  };
</script>

<div>
  <div id="desc-form-btn" class="edit-btn">
    <button on:click={showTitleForm} class="">
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
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    </button>
  </div>

  <h3 class="text-2xl mb-3">{note.steps[step].subtitle}</h3>
  <p class="text-lg mb-3">{note.steps[step].desc}</p>
</div>
