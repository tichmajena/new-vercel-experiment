<script>
  import { onMount } from "svelte";
  let deg = 6;
  let hr;
  let mn;
  let sc;
  let zuva = new Date();
  export let day = new Date();

  $: hh = zuva.getHours() * 30;
  $: mm = zuva.getMinutes() * deg;
  $: ss = zuva.getSeconds() * deg;
  onMount(() => {
    console.log(hr, mn, sc);
    setInterval(() => {
      zuva = new Date();
      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    });
  });
</script>

<div class=" bg flex justify-center items-center min-h-full p-5">
  <div class="clock text-white">
    <div class="hour">
      <div bind:this={hr} class="hr" id="hr" />
    </div>
    <div class="min">
      <div bind:this={mn} class="mn" id="mn" />
    </div>
    <div class="sec">
      <div bind:this={sc} class="sc" id="sc" />
    </div>
    <div class=" number-wrapper absolute inset-0">
      <div class="number number1">|</div>
      <div class="number number2">|</div>
      <div class="number number3">3</div>
      <div class="number number4">|</div>
      <div class="number number5">|</div>
      <div class="number number6">6</div>
      <div class="number number7">|</div>
      <div class="number number8">|</div>
      <div class="number number9">9</div>
      <div class="number number10">|</div>
      <div class="number number11">|</div>
      <div class="number number12">12</div>
    </div>
  </div>
</div>

<style>
  .number-wrapper {
    width: 90%;
    height: 90%;
    margin: 5% auto;
  }
  .bg {
    background-color: #091921;
    padding: 50px;
    min-width: 400px;
  }

  .clock {
    position: relative;
    min-width: 350px;
    min-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: url($lib/clock.png); */
    background-size: cover;
    border: 4px solid #091921;
    border-radius: 50%;
    box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
      inset 0 -15px 15px rgba(255, 255, 255, 0.05),
      0 15px 15px rgba(0, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3);
  }

  .clock .number {
    --rotation: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transform: rotate(var(--rotation));
  }

  .clock .number1 {
    --rotation: 30deg;
  }
  .clock .number2 {
    --rotation: 60deg;
  }
  .clock .number3 {
    --rotation: 90deg;
  }
  .clock .number4 {
    --rotation: 120deg;
  }
  .clock .number5 {
    --rotation: 150deg;
  }
  .clock .number6 {
    --rotation: 180deg;
  }
  .clock .number7 {
    --rotation: 210deg;
  }
  .clock .number8 {
    --rotation: 240deg;
  }
  .clock .number9 {
    --rotation: 270deg;
  }
  .clock .number10 {
    --rotation: 300deg;
  }
  .clock .number11 {
    --rotation: 330deg;
  }

  .clock:before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 50%;
    z-index: 10000;
  }
  .clock .hour,
  .clock .min,
  .clock .sec {
    position: absolute;
  }
  .clock .hour,
  .hr {
    width: 160px;
    height: 160px;
  }

  .clock .min,
  .mn {
    width: 190px;
    height: 190px;
  }

  .clock .sec,
  .sc {
    width: 230px;
    height: 230px;
  }

  .hr,
  .mn,
  .sc {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    position: absolute;
    border-radius: 50%;
  }

  .hr:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 80px;
    background: #ff105e;
    z-index: 10;
    border-radius: 6px 6px 0 0;
  }

  .mn:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 90px;
    background: #fff;
    z-index: 11;
    border-radius: 6px 6px 0 0;
  }

  .sc:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 150px;
    background: #fff;
    z-index: 12;
    border-radius: 6px 6px 0 0;
  }
</style>
