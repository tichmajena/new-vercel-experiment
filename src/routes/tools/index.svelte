<script>
  import { onMount } from "svelte";
  import { addHours, addMilliseconds, startOfDay } from "date-fns";

  let deg = 6;
  // let hr;
  // let mn;
  // let sc;
  let duration;
  let clock;
  let countdown;
  let mode = "mode";
  let zuva = new Date();
  export let day = new Date();

  $: hh = zuva.getHours() * 30;
  $: mm = zuva.getMinutes() * deg;
  $: ss = zuva.getSeconds() * deg;

  $: console.log(ss);

  $: if (mode === "clock") {
    clock = setInterval(() => {
      zuva = new Date();
    }, 1);
  }

  function addTest() {
    zuva = addHours(zuva, -1);
  }

  function backtrack() {
    zuva = startOfDay(zuva);
    zuva = addMilliseconds(zuva, -duration);
    countdown = setInterval(() => {
      zuva = addMilliseconds(zuva, 1000);
      duration = duration - 1000;
      // console.log(zuva);
      // zuva = zuva;
      if (duration <= 0) {
        clearInterval(countdown);
      }

      console.log("running", ss);
    }, 1000);
  }

  function reduceSeconds() {
    zuva = addMilliseconds(zuva, -1000);
  }
</script>

<div>
  <div class="flex">
    <button
      on:click={addTest}
      class="py-2 px-4 m-3 text-lg text-indigo-100 bg-indigo-900 hover:bg-indigo-700 rounded-md"
      >Do Stuff 1</button
    >
    <button
      on:click={backtrack}
      class="py-2 px-4 m-3 text-lg text-indigo-100 bg-indigo-900 hover:bg-indigo-700 rounded-md"
      >Do Stuff 2</button
    >
    <button
      on:click={reduceSeconds}
      class="py-2 px-4 m-3 text-lg text-indigo-100 bg-indigo-900 hover:bg-indigo-700 rounded-md"
      >Do Stuff 3</button
    >
    <input type="range" min="0" max="60000" bind:value={duration} />
  </div>
</div>
<div class=" bg flex justify-center items-center min-h-full p-5">
  <div class="clock text-white">
    <div class="hour">
      <div class="hr" style="transform: rotateZ({hh + mm / 12}deg)" />
    </div>
    <div class="min">
      <div class="mn" style="transform: rotateZ({mm}deg)" />
    </div>
    <div class="sec">
      <div class="sc" style="transform: rotateZ({ss}deg)" />
    </div>
    <div class=" number-wrapper absolute inset-0">
      <div class="number number1">|</div>
      <div class="number number2">|</div>
      <div class="number number3"><div class="three">3</div></div>
      <div class="number number4">|</div>
      <div class="number number5">|</div>
      <div class="number number6"><div class="six">6</div></div>
      <div class="number number7">|</div>
      <div class="number number8">|</div>
      <div class="number number9"><div class="nine">9</div></div>
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

  .three {
    transform: rotate(-90deg);
  }
  .six {
    transform: rotate(-180deg);
  }
  .nine {
    transform: rotate(-270deg);
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
