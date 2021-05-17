<script>
    let name,email, phoneNumber;
  
    async function addPost() {
      const token = JSON.parse(localStorage.getItem("token"));
      try {
        const res = await fetch(
          "https://imajenation.co.zw/mydiary/wp-json/wp/v2/note",
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-type": "application/json",
              Authorization: "Bearer " + token,
            },
            body: JSON.stringify({ title, content, status: "publish" }),
          }
        );
  
        const data = await res.json();
        console.log(data);
  
        if (res.ok) {
          console.log("res is okay");
        } else {
          console.log("res has an error");
        }
      } catch (error) {
        console.log("ERROR!!!: ", error);
      }
    }
  </script>


<div class="section md:mt-32 mt-20">
    <label class="" for="input-name">Name...</label>
  
    <input
      class="bg-gray-300  hover:bg-red-400 flex flex-col"
      type="text"
      bind:value={$contacts.name}
    />
  
    {#each data.phoneNumber as number, index}
      <div class="flex flex-row">
        <div
          style="
          width: 100%;"
          class="pr-2"
        >
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
  

  
  <h1 class="text-2xl font-bold ">Notes</h1>
  
  <div class="mx-auto p-5 md:max-w-md w-full bg-gray-100 rounded mb-16 shadow-lg">
    <h3 class="text-center text-2xl mb-5">Add Note</h3>
  
    <input
      bind:value={title}
      class="w-full rounded mb-5"
      placeholder="Title"
      type="text"
    />
    <input
      bind:value={content}
      class="w-full rounded mb-5"
      placeholder="Content"
      type="text"
    />
  
    <button
      on:click={addPost}
      class="px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"
      >Publish</button
    >
  </div>
  