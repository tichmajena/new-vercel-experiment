<script>
  import { codeNotes } from "$lib/js/store";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let i;
  export let ii;
  let myDiv;
  let Highlight;
  let javascript, php;
  let atomOneDark;
  let hljs;
  let language = $codeNotes[i].steps[ii].codeLang.toLowerCase();
  let codess = `function gooda(){
        let mbudzi = 2;
      }
      `;

  onMount(async () => {
    //Highlight = (await import("svelte-highlight")).default;
    hljs = (await import("highlight.js")).default;
    javascript = (await import("svelte-highlight/src/languages/javascript"))
      .default;
    php = (await import("svelte-highlight/src/languages/php")).default;
    atomOneDark = (await import("svelte-highlight/src/styles/atom-one-dark"))
      .default;
    await hljs.highlightAll();

    let myDOM = document.getElementById(myDiv.id).innerHTML;
    $codeNotes[i].steps[ii].codeDOM = myDOM;
  });

  function saveDOM(el) {}
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

<div id="zikustep_{ii}" bind:this={myDiv} use:saveDOM>
  <pre
    in:fade
    class="flex code rounded">
    <code
      class="block p-4 w-full rounded {language}">
      {$codeNotes[i].steps[ii].code}
    </code>
  </pre>
</div>

<style>
  .code {
    background-color: #282c34;
  }
</style>
