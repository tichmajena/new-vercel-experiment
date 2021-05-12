<script>
  import { codeNotes } from "$lib/js/store";
  export let step;
</script>

<div>
  <div id="snippet-form-btn" class="edit-btn">
    <button class="">
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
  <h3>{$codeNotes[0].steps[step].code}</h3>
</div>
