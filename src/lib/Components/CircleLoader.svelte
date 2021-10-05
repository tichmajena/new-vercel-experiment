<script>
  export let load;
</script>

<div
  class="l-container flex justify-center overflow-visible mt-10 items-center mx-auto h-56 w-56 relative pt-8"
>
  <div
    class="circle bg-gray-200 h-full w-full rounded-full absolute top-0 left-0 z-20"
  />
  <div class="pointer-container" />
  <div
    style="background: conic-gradient(#55b7a4 0%, #4ca493 {load}%, #aaa {load}%, #aaa 100%);"
    class="gradient-circle h-64 w-64 z-10 rounded-full absolute -top-4 -left-4"
  />
</div>
