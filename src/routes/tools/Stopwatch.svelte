<script>
    let elapsedTime = 0;
  function runTime() {
    stopWatch = setInterval(() => {
      let endTime = Date.now();
      elapsedTime = endTime - startTime + freezeTime;
    });
  }

  function bamBamBaaaam() {
    stopWatch = setInterval(() => {
      let theTime = 15 * 60 * 1000;
      let endTime = Date.now();

      elapsedTime = startTime - endTime + theTime + freezeTime;
    });
  }

  function chachaya() {
    startTime = Date.now();
    //runTime();
    bamBamBaaaam();
  }

  function holan() {
    clearInterval(stopWatch);
    freezeTime = elapsedTime;
  }

  function zvavharana() {
    elapsedTime = 0;
    clearInterval(stopWatch);
  }
</script>