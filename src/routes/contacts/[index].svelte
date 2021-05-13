<script context="module">
  export async function load(ctx) {
    // Wabva kupi?
    console.log(ctx.page.params.index);
    let index = ctx.page.params.index;
    return { props: { index } };
  }
</script>

<script>
  import { contacts } from "$lib/js/store";

  let name;
  let phoneNumber = [""];
  let email;

  export let data = {
    name: name,
    phoneNumber: phoneNumber,
    email: email,
  };

  $: rData = data;

  let valid = true;

  function addContact() {
    if (data.email === "" || data.name === "" || data.phoneNumber === [""]) {
      return;
    } else {
      $contacts = [...$contacts, rData];
      console.log($contacts);
    }

    data.name = "";
    data.phoneNumber = [""];
    data.email = "";
  }

  function newNumber() {
    data.phoneNumber = [...data.phoneNumber, ""];
  }
  let emailRules = [
    function (v) {
      if ("" === v) {
        valid = false;
        return "Tipeiwo Email";
      } else {
        valid = true;
        return false;
      }
    },
  ];

  function deleteNumber(index) {
    data.phoneNumber.splice(index, 1);
    data.phoneNumber = data.phoneNumber;
  }
</script>

<div
  class="fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"
>
  <h3 class="ml-10">Contacts</h3>
</div>

<div class="section md:mt-32 mt-20">
  <label class="" for="input-name">Name...</label>

  <input
    class="bg-gray-300  hover:bg-red-400 flex flex-col"
    type="text"
    bind:value={$contacts.name}
  />

  {#each data.phoneNumber as number, index}
    <div class="flex flex-row">
      <div style="
        width: 100%;" class="pr-2">
        <label class="" for="input-phoneNumber">Phone Number...</label>

        <input
          class="bg-gray-300  hover:bg-red-400 flex flex-col"
          type="text"
          bind:value={$contacts.number}
        />
      </div>

      <div class="add-btn">
        {#if index !== phoneNumber.length - 1}
          <button
            on:click={() => {
              deleteNumber(index);
            }}
            fab
            size=""
            class="red white-text text-white bg-green-600 grid place-items-center rounded-full h-12 w-12  items-center justify-center text-2xl"
          >
            -
          </button>
        {/if}
        {#if index === phoneNumber.length - 1}
          <button
            class="text-white   bg-pink-700 grid place-items-center rounded-full h-12 w-12  items-center justify-center"
            on:click={newNumber}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round-full"
                stroke-linejoin="round-full"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        {/if}
      </div>
    </div>
  {/each}

  <label class="" for="input-email">Email...</label>

  <input
    class="bg-gray-300  hover:bg-red-400 flex flex-col"
    type="text"
    bind:value={email}
    rules={emailRules}
    validateOnBlur
  />

  {#if valid}
    <button
      on:click={addContact}
      class="red white-text bg-blue-600 hover:text-red-600 m-2 w-16"
      >Save</button
    >
  {:else}<button disabled>Save</button>{/if}
</div>

<style>
  .add-btn {
    margin-bottom: 15px;
    align-self: flex-end;
  }
</style>
