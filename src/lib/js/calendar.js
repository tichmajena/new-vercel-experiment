import {
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  startOfDay,
  addDays,
  format,
} from "date-fns";

console.log("yes");

//* 1. We need a starting point for creating our week
export function takeWeek(start = new Date()) {
  //* 2. We want the first date in our week array to be the 'start of the week' date
  //*    not the 'start of the month date, because months can sometimes start in the middle of the week
  let date = startOfWeek(startOfDay(start));

  return function () {
    //* 3. We add each of the 7 days into an array
    const week = [...Array(7)].map((_, i) => addDays(date, i));

    //* 4. We set up 'date' for generating the next week
    date = addDays(week[6], 1);

    //* 5. We return the week
    return week;
  };
}

//* 1. We need a starting point for creating our month
export function takeMonth(start = new Date()) {
  let month = [];
  //* 2. We just need a starting point for generation our weeks
  let date = start;

  function lastDayOfRange(range) {
    return range[range.length - 1][6];
  }

  return function () {
    //* We generate each the week first using same function as before
    const weekGen = takeWeek(startOfMonth(date));

    //* To get the 'end date' we need to get the last day of the week in which
    //* the last day of the month is found. Then we pass that into start0fDay
    //* to account for day time savings
    const endDate = startOfDay(endOfWeek(endOfMonth(date)));

    //* then we actually generate the week
    let wk = weekGen();

    //* and we add the week into the the month array
    month = [...month, wk];

    //* now that we have something in the array,
    //* we check if the last day in the last week we added is our endDate,
    //* if not, we add another week until this is so.
    while (lastDayOfRange(month) < endDate) {
      month.push(weekGen());
    }

    //* Setting up for the next month by storing the month somewhere
    const range = month;
    //* the clearing the month variable
    month = [];

    //* and setting date to be the first date of the following month
    date = addDays(lastDayOfRange(range), 1);

    //* then return the month that we have store somewhere
    return range;
  };
}

export function getDay(date) {
  return format(date, "dd");
}
