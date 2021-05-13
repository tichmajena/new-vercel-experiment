<script context="module">
    export async function load(ctx) {
        //Watumwa nani?
        let index = ctx.page.params.index;
        return {
            props: {
                index,
            },
        };
    }
</script>

<script>
    export let index;
    import { cars } from "$lib/js/store";
    console.log($cars[3]);
</script>

<div class="w-full h-full">
    <div class="max-w-md mx-auto p-5 bg-white rounded-lg">
        <h1 class="mb-5">{$cars[index].name}</h1>
        <input
            class="block w-full rounded-md mb-3"
            type="text"
            bind:value={$cars[index].name} />
        <input
            class="block w-full rounded-md mb-3"
            type="text"
            bind:value={$cars[index].color} />
        <input
            class="block w-full rounded-md mb-3"
            type="text"
            bind:value={$cars[index].year} />

        <a href="/cars/">
            <button
                class="py-2 px-4 bg-pink-700 rounded-md text-white text-sm ">
                Save
            </button>
        </a>
    </div>
</div>
