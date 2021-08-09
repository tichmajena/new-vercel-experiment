<script>
  import { onMount } from "svelte";
  import { codeNotes } from "$lib/js/store";

  export let i;
  export let ii;

  let hljs, javascript, php;
  let editor;
  let atomOneDark;
  let text;
  let content;

  $: {
    console.log(text);
  }
  export const toolbarOptions = [
    [{ header: 1 }, { header: 2 }, "blockquote", "link", "image", "video"],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "ordered" }],
    [{ align: [] }],
    ["clean"],
  ];

  onMount(async () => {
    hljs = (await import("highlight.js")).default;
    atomOneDark = (await import("svelte-highlight/src/styles/atom-one-dark"))
      .default;

    hljs.configure({
      // optionally configure hljs
      languages: ["javascript", "php", "c#"],
      useBR: false,
    });
    console.log(hljs.configure);
    javascript = (await import("svelte-highlight/src/languages/javascript"))
      .default;
    php = (await import("svelte-highlight/src/languages/php")).default;
    atomOneDark = (await import("svelte-highlight/src/styles/atom-one-dark"))
      .default;
    await hljs.highlightAll();

    const { default: Quill } = await import("quill");
    let quill = new Quill(editor, {
      modules: {
        //toolbar: toolbarOptions,
        toolbar: [["code-block"]],
        syntax: false,
      },
      theme: "snow",
      placeholder: "Write your story...",
    });
    content = quill.getText();
    // conte

    // $codeNotes[i].steps[ii].code = quill.getText();
    quill.on("text-change", function (delta, oldDelta, source) {
      if (source == "api") {
        console.log("An API call triggered this change.");
      } else if (source == "user") {
        console.log("A user action triggered this change.");
        $codeNotes[i].steps[ii].code = editor.innerText;
      }
    });
  });

  $: themeURL = atomOneDark;
  $: rText = content || "Empty";
</script>

<svelte:head>
  {@html themeURL}
</svelte:head>

<div class="editor-wrapper">
  <div bind:this={editor}>
    {$codeNotes[i].steps[ii].code}
  </div>
</div>

<button
  on:click={() => {
    console.log(editor.innerText, $codeNotes[i].steps[ii].code);
  }}>Test</button
>

{rText}

<style>
  @import "https://cdn.quilljs.com/1.3.6/quill.snow.css";
</style>
