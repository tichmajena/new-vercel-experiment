<script>
  import { codeNotes } from "$lib/js/store";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let step;
  export let note;
  let code = note.steps[step].code;

  let Highlight;
  let javascript;
  let atomOneDark;
  let hljs;
  let codess = `function gooda(){
        let mbudzi = 2;
      }
      `;

  onMount(async () => {
    //Highlight = (await import("svelte-highlight")).default;
    hljs = (await import("highlight.js")).default;
    javascript = (await import("svelte-highlight/src/languages/javascript"))
      .default;
    atomOneDark = (await import("svelte-highlight/src/styles/atom-one-dark"))
      .default;
    console.log("CodeContented!");
    console.log(hljs);
    await hljs.highlightAll();
  });

  // import Highlight from "svelte-highlight";
  // import javascript from "svelte-highlight/src/languages/javascript";
  // import atomOneDark from "svelte-highlight/src/styles/atom-one-dark";
  $: themeURL = atomOneDark;
</script>

<svelte:head>
  {@html themeURL}
</svelte:head>

<!-- <Highlight language={javascript} {code} /> -->

<!-- <svelte:component this={Highlight} language={javascript} {code} /> -->

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

  <pre
    in:fade
    class="flex">
    <code
      class="block p-4 w-full rounded javascript">
      {note.steps[step].code}
    </code>
  </pre>
</div>
