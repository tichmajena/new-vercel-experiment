<script>
  export let elapsedTime;
  const pad2 = (number) => `00${number}`.slice(-2);
  const pad3 = (number) => `000${number}`.slice(-3);

  $: hours = pad2(Math.floor(elapsedTime / 1000 / 60 / 60) % 60);
  $: minutes = pad2(Math.floor(elapsedTime / 1000 / 60) % 60);
  $: seconds = pad2(Math.floor(elapsedTime / 1000) % 60);
  $: milliseconds = pad3(elapsedTime % 1000);
  $: formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
</script>

<div class="block mb-10">
  {formattedTime}
</div>
