<script>
  export let load;
  export let bg_color = "#aaa";
  export let fg_color_a = "#55b7a4";
  export let fg_color_b = "#4ca493";
  export let h = "h-56";
  export let w = "w-56";
  export let hh = "h-64";
  export let ww = "w-64";
  export let top = "-top-4";
  export let left = "-left-4";
</script>

<div
  class="l-container flex justify-center overflow-visible mt-10 items-center mx-auto {h} {w} relative pt-8"
>
  <div
    class="circle bg-gray-200 h-full w-full rounded-full absolute top-0 left-0 z-20"
  />
  <div class="pointer-container" />
  <div
    style="background: conic-gradient({fg_color_a} 0%, {fg_color_b} {load}%, {bg_color} {load}%, {bg_color} 100%);"
    class="gradient-circle {hh} {ww} z-10 rounded-full absolute {top} {left}"
  />
</div>

<style>
  .gradient-circle {
    background: conic-gradient(#55b7a4 0%, #4ca493 40%, #aaa 40%, #aaa 100%);
  }
</style>
