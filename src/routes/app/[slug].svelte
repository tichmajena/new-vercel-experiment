<script>
  import { appNotes } from "$lib/js/store";

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

<h1>I am slug App notes</h1>

<input type="text" bind:value={appName} />App Name
{#each steps as step, index}
  <div class="flex flex-row">
    <div style="width: 100%;" class="pr-2">
      <input type="text" bind:value={steps[index]} />Step {index + 1}
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

<button on:click={displayNotes}>Save</button>

<style>
  .add-btn {
    margin-bottom: 15px;
    align-self: flex-end;
  }
</style>
