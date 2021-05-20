<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/notes.json");

    console.log(res);

    if (res.ok) {
      const jsonData = await res.json();
      const notes = await jsonData;

      return {
        props: { notes },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<script>
  export let notes;
</script>

<h1 class="text-2xl font-bold ">Notes</h1>
<a href="/notes/new">
  <button class="px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"
    >Add Note</button
  >
</a>

{#each notes as note}
  <a sveltekit:prefetch href="/notes/{note.slug}">
    <h2>{note.title.rendered}</h2>
  </a>
{/each}
