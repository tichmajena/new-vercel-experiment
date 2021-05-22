<script>
  import { appNotes } from "$lib/js/store";
  import Button from "$lib/Button/index.svelte";
  let edit = false;
  let loading = false;
  let appName;
  let steps = [""];

  $: myNotes = {
    appName: appName,
    steps: steps,
  };

  function displayNotes() {
    $appNotes = [...$appNotes, myNotes];
    appName = "";
    steps = [""];
  }

  function newStep() {
    steps = [...steps, ""];
    console.log(steps);
  }

  function deleteStep(index) {
    steps.splice(index, 1);
    steps = steps;
  }
</script>

<input type="text" bind:value={appName} />App Name
{#each steps as step, index}
  <div class="flex flex-row">
    <div style="width: 100%;" class="pr-2">
      <input type="text" bind:value={steps[index]} />Step
      {index + 1}
    </div>

    <div class="add-btn">
      {#if index !== steps.length - 1}
        <button
          on:click={() => {
            deleteStep(index);
          }}
        >
          -
        </button>
      {/if}
      {#if index === steps.length - 1}
        <button on:click={newStep}> + </button>
      {/if}
    </div>
  </div>
{/each}

<Button color="red" {loading} on:click={displayNotes}>Save</Button>
