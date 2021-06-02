<script>
  import { domState, codeNotes } from "$lib/js/store";

  $: activeIndex = 0;
  $: pageIndex = $domState.pageIndex;
  $: console.log("Page Index:", pageIndex);
  $: console.log("Active Index:", activeIndex);
  function tumiraEvent() {
    $domState.save = true;
    console.log($domState.showTitleForm);
    console.log($domState.showAddDesc);
    if ($domState.showTitleForm || $domState.showAddDesc) {
      console.log("One of them is true");
      let newStep = {
        subtitle: "",
        desc: "",
        code: "",
        showDForm: false,
        showDContent: false,
        showCForm: false,
        showCContent: false,
      };

      $codeNotes[pageIndex].steps = [...$codeNotes[pageIndex].steps, newStep];
      activeIndex = $codeNotes[pageIndex].steps.length - 1;
      console.log($codeNotes);
      console.log($codeNotes[pageIndex].steps.length);
      console.log("Page Index", pageIndex);

      $domState.showTitleForm = false;
      $domState.showTitleContent = true;
      $codeNotes[pageIndex].steps[activeIndex].showDForm = true;
      $domState.showAddDesc = false;
    } else if ($codeNotes[pageIndex].steps[activeIndex].showDForm) {
      console.log(
        "First If:",
        $codeNotes[pageIndex].steps[activeIndex].showDForm
      );
      console.log(
        "Second If:",
        $codeNotes[pageIndex].steps[activeIndex].showCForm
      );
      console.log($codeNotes[pageIndex]);
      $codeNotes[pageIndex].steps[activeIndex].showDForm = false;
      $codeNotes[pageIndex].steps[activeIndex].showDContent = true;
      $codeNotes[pageIndex].steps[activeIndex].showCForm = true;
    } else if ($codeNotes[pageIndex].steps[activeIndex].showCForm) {
      console.log(
        "Second If:",
        $codeNotes[pageIndex].steps[activeIndex].showCForm
      );
      console.log(
        "First If:",
        $codeNotes[pageIndex].steps[activeIndex].showDForm
      );
      $codeNotes[pageIndex].steps[activeIndex].showDForm = false;
      $codeNotes[pageIndex].steps[activeIndex].showCContent = true;
      $codeNotes[pageIndex].steps[activeIndex].showCForm = false;
      $domState.showAddDesc = true;
    }
  }
</script>

{#if $domState.showFabs}
  <div class="fab">
    {#if $domState.showAddDesc}
      <div id="subject-btn">
        <button
          class="text-white bg-purple-700 rounded-full w-14 h-14 grid place-items-center"
          on:click={tumiraEvent}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    {/if}
    {#if $codeNotes[pageIndex].steps.length > 0}
      {#if $codeNotes[pageIndex].steps[activeIndex].showDForm}
        <div id="code-btn">
          <button
            class="text-white bg-purple-700 rounded-full w-14 h-14 grid place-items-center"
            on:click={tumiraEvent}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </button>
        </div>
      {/if}

      {#if $codeNotes[pageIndex].steps[activeIndex].showCForm}
        <div id="save-btn">
          <button
            class="text-white bg-green-600 rounded-full w-14 h-14 grid place-items-center"
            on:click={tumiraEvent}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      {/if}
    {/if}
  </div>
{/if}
