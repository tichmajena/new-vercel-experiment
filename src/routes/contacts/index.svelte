<script>
  import { contacts } from "$lib/js/store";

  let name;
  let phoneNumber = [""];
  let email;

  $: newContact = {
    name: name,
    phoneNumber: phoneNumber,
    email: email,
  };
  // const titleRules = [(v) => !!v || 'Required'];
  // const emailRules = [
  //   (v) => !!v || 'Required',
  //   (v) => v.length <= 25 || 'Max 25 characters',
  //   (v) => {
  //     const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return pattern.test(v) || 'Invalid e-mail.';
  //   },
  // ];
</script>

<main>
  <h3 class="mb-10">Contacts</h3>

  <a href="/contacts/zvirisei">First Contact</a>
  {#each $contacts as contact}
    <li>
      <div style="border-bottom: 2px solid gray" class="d-flex flex-row mb-8">
        <div>icon</div>
        <div>
          <h5>{contact.name}</h5>
          <span > edit </span>
          <span >
            {#each contact.phoneNumber as number, index}
              <span class="block">
                <span class="ml-5"> phone</span>
                {number}
              </span>
            {/each}
            <span class="ml-5"> email</span>{contact.email}<br />
          </span>
        </div>
      </div>
    </li>
  {/each}
</main>
