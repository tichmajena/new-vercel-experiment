<script>
    import { cars } from "$lib/js/store";
</script>

{#each $cars as mota, index}
    <h2>{mota.name}</h2>
    <h3>{mota.color}</h3>
    <h3>{mota.year}</h3>
    <a href="/cars/{index}">
        <button class="py-1 px-2 bg-pink-700 text-white text-sm"> Edit </button>
    </a>

    <br />

    ---------------------
{/each}
