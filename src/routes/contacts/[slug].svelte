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

<input type="text" bind:value={name} />
<div>account</div>
Name
{#each data.phoneNumber as number, index}
  <div class="flex flex-row">
    <div style="
        width: 100%;" class="pr-2">
      <input type="text" bind:value={number} />
      <div>phone</div>
      PhoneNumber
    </div>

    <div class="add-btn">
      {#if index !== phoneNumber.length - 1}
        <button
          on:click={() => {
            deleteNumber(index);
          }}
          fab
          size="x-small"
          class="red white-text"
        >
          -
        </button>
      {/if}
      {#if index === phoneNumber.length - 1}
        <button
          on:click={newNumber}
          fab
          size="x-small"
          class=" green white-text"
        >
          +
        </button>
      {/if}
    </div>
  </div>
{/each}

<input type="text" bind:value={email} rules={emailRules} validateOnBlur />
<div>email</div>
Email
{#if valid}
  <button on:click={addContact} class="red white-text">Save</button>
{:else}
  <button disabled>Save</button>
{/if}

<style>
  .add-btn {
    margin-bottom: 15px;
    align-self: flex-end;
  }
</style>
