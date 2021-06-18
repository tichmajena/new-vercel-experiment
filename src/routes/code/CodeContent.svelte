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
  <pre
    in:fade
    class="flex">
    <code
      class="block p-4 w-full rounded javascript">
      {note.steps[step].code}
    </code>
  </pre>
</div>
