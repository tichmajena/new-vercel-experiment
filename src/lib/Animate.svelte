<script>
  import { fly, slide, fade } from "svelte/transition";
  import { domState } from "./js/store";

  $: f = $domState.appForward;
</script>

<!-- {#if $domState.appForward}
  <div
    in:fly={{ delay: 150, x: 200, duration: 600 }}
    out:fly={{ duration: 0, delay: 0, x: -100, duration: 150 }}
  >
    <slot />
  </div>
{:else}
  <div
    in:fly={{ delay: 150, x: -200, duration: 600 }}
    out:fly={{ duration: 0, delay: 0, x: 100, duration: 150 }}
  >
    <slot />
  </div>
{/if} -->

<div
  in:fly={{ delay: 200, x: f ? 200 : -200, duration: 600 }}
  out:fly={{ duration: 0, delay: 0, x: f ? -100 : 100, duration: 200 }}
>
  <slot />
</div>
