<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/contacts.json");

    console.log(res);

    if (res.ok) {
      const jsonData = await res.json();
      const contacts = await jsonData;

      return {
        props: { contacts },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<script>
  export let contacts;
  console.log(contacts);

  let name;
  let phoneNumber = [""];
  let email;

  $: newContact = {
    title: name,
    full_name: name,
    phone_numbers: phoneNumber,
    email: email,
    status: "publish",
  };
</script>

<div
  class="fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"
>
  <h3 class="ml-10">Contacts</h3>
</div>
<a href="/contacts/new">
  <button class="px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"
    >New</button
  >
</a>

{#each contacts as contact, index}
  <li>
    <div style="border-bottom: 2px solid gray" class="d-flex flex-row mb-8">
      <div>icon</div>
      <div>
        <a sveltekit:prefetch href="/contacts/{contact.slug}">
          <h5>{contact.full_name}</h5></a
        >

        <span> edit </span>
        <span>
          {#if typeof contact.phone_numbers === "string"}
            <span class="block">
              <span class="ml-5"> phone</span>
              {contact.phone_numbers}
            </span>
          {:else}
            Not a string
            {#each contact.phone_numbers as number, index}
              <span class="block">
                <span class="ml-5"> phone</span>
                {number}
              </span>
            {/each}
          {/if}
          <span class="ml-5"> email</span>{contact.email}<br />
        </span>
      </div>
    </div>
  </li>
{/each}
