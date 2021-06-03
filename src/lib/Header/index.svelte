<script>
  import { page } from "$app/stores";
  import logo from "./svelte-logo.svg";
  let menu = true;
  let toggleMenu = () => {
    menu = !menu;
  };
</script>

<div
  class="bg-gray-800 text-gray-900 md:hidden flex justify-between pl-10 fixed top-0 inset-x-0 z-10"
>
  <div class="flex my-2 content-center">
    <a class="flex" href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
        />
        <path
          fill-rule="evenodd"
          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="text-xl text-white ml-1 mt-2">My Diary</span>
    </a>
  </div>
  <button on:click={toggleMenu} class="p-4 focus:outline-none focus:bg-gray-700"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg></button
  >
</div>
<header
  class:-translate-x-full={menu}
  class="bg-blue-800 text-blue-100 w-64 p-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out z-20"
>
  <div class="my-2 content-center">
    <a class="flex" href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
        />
        <path
          fill-rule="evenodd"
          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="text-xl text-white ml-1 mt-2">My Diary</span>
    </a>
  </div>
  <nav class="mt-10">
    <a class="text-blue-100 hover:no-underline" href="/">
      <li
        on:click={toggleMenu}
        class:active={$page.path === "/"}
        class="block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200"
      >
        Home
      </li></a
    >
    <a
      sveltekit:prefetch
      class="text-blue-100 hover:no-underline"
      href="/contacts"
    >
      <li
        on:click={toggleMenu}
        class:active={$page.path === "/contacts"}
        class="block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200"
      >
        Contacts
      </li></a
    >
    <a class="text-blue-100 hover:no-underline" href="/app">
      <li
        on:click={toggleMenu}
        class:active={$page.path === "/app"}
        class="block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200"
      >
        App Notes
      </li></a
    >
    <a
      sveltekit:prefetch
      class="text-blue-100 hover:no-underline"
      href="/notes"
    >
      <li
        on:click={toggleMenu}
        class:active={$page.path === "/notes"}
        class="block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200"
      >
        Notes
      </li></a
    >
    <a class="text-blue-100 hover:no-underline" href="/code">
      <li
        on:click={toggleMenu}
        class:active={$page.path === "/code"}
        class="block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200"
      >
        Code Notes
      </li></a
    >

    <a class="text-blue-100 hover:no-underline" href="/tools">
      <li
        on:click={toggleMenu}
        class:active={$page.path === "/tools"}
        class="block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200"
      >
        Tools
      </li></a
    >

    <a class="text-blue-100 hover:no-underline" href="/quiz">
      <li
        on:click={toggleMenu}
        class:active={$page.path === "/quiz"}
        class="block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200"
      >
        Quiz
      </li></a
    >
  </nav>
</header>

<style>
  .active {
    @apply bg-blue-700;
    @apply text-white;
  }
</style>
