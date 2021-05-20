<script>
  export let logic;
  export let timeout;
  export let color;
  function removeMessage() {
    setTimeout(() => {
      logic();
    }, timeout);
  }
</script>

<div
  use:removeMessage
  class="flex items-center justify-center mx-auto md:max-w-md w-full bg-{color}-100 rounded mb-16 shadow-lg text text-{color}-600 p-5"
>
  <div
    class="p-2 border-{color}-700 border-2 mr-3 rounded-full flex justify-center items-center"
  >
    <slot name="icon" />
  </div>
  <slot name="message" />
</div>
