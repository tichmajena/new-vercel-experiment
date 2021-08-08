<!-- <script>
  import { onMount } from "svelte";
  import { CodeJar } from "$lib/js/codejar/codejar.js";
  //import Prism from "prismjs";
  let codej;
  //let CodeJar;
  onMount(async () => {
    // const { default: CodeJar } = await import("codejar");
    //CodeJar = (await import("codejar")).default;
    console.log(CodeJar);
    const { default: Prism } = await import("prismjs");
    console.log(Prism);

    let jar = await CodeJar(codej, Prism.highlightElement);

    const highlight = (codej) => {
      const code = codej.textContent;
      // Do something with code and set html.
      editor.innerHTML = code;
    };

    let jar = CodeJar(editor, highlight);
  });
</script>

<div bind:this={codej} /> -->
