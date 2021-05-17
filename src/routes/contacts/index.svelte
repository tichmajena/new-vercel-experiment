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
  let addNote = true;
  async function addPost() {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const res = await fetch(
        "https://www.imajenation.co.zw/mydiary/wp-json/wp/v2/contact",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({ name, phoneNumber, email, status: "publish" }),
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

<main>
  <div
    class="fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"
  >
    <h3 class="mb-10">Contacts</h3>
  </div>

  {#each $contacts as contact, index}
    <li>
      <div style="border-bottom: 2px solid gray" class="d-flex flex-row mb-8">
        <div>icon</div>
        <div>
          <a href="/contacts/{index}"> <h5>{contact.name}</h5></a>

          <span> edit </span>
          <span>
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
