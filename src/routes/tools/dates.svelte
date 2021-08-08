<script>
  import { takeMonth, takeWeek } from "$lib/js/calendar";
  import { format, isSameMonth, isToday, isSunday } from "date-fns";

  let svondoGen = takeWeek();
  let svondo = takeWeek()();

  let mwedziGen = takeMonth();
  let mwedzi = takeMonth()();

  let calDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function showDate(date) {
    return format(date, "dd");
  }
</script>

<div>
  <h1 class="text-indigo-700 text-2xl">Month</h1>
  <div class="grid grid-cols-7 gap-0">
    {#each calDays as wkday}
      <div
        class="bg-indigo-200 w-100 h-16 flex items-center justify-center border border-indigo-200"
      >
        {wkday}
      </div>
    {/each}
  </div>

  {#each mwedzi as week, i}
    <div class="grid grid-cols-7 gap-0">
      {#each week as zuva}
        <div
          class:text-indigo-300={!isSameMonth(zuva, new Date())}
          class:text-indigo-600={isSunday(zuva, new Date())}
          class:bg-indigo-200={isToday(zuva, new Date())}
          class="w-100 h-16 flex items-center justify-center border border-indigo-200"
        >
          {showDate(zuva)}
        </div>
      {/each}
    </div>
  {/each}
</div>
