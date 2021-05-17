<div class="flex justify-center items-center min-h-full bg-gray-800 p-5">
  <div class="clock">
    <div class="hour">
      <div class="hr" id="hr" />
    </div>
    <div class="min">
      <div class="mn" id="mn" />
    </div>
    <div class="sec">
      <div class="sc" id="sc" />
    </div>
  </div>
</div>

<style>
  .clock {
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-size: cover; */
    border: 4px solid #091921;
    border-radius: 50%;
    box-shadow: 0 -15px 15px rgba(255, 255, 255, 0, 05),
      inset 0 -15px 15px rgba(255, 255, 255, 0, 05),
      0 15px 15px rgba(0, 0, 0, 0, 0, 3), inset 0 15px 15px rgba(0, 0, 0, 0, 3);
  }

  .clock:before {
    content: "";
  }
</style>
