/*
  let money = [10, 5, 20, 3];
  // 0 + 10 = 10
  // 10 + 5 = 15
  //15 + 10 = 35
  //35 + 3 = 38
  let total = money.reduce((accumilator, arrayItemValue, index) => {
    return accumilator + arrayItemValue;
  }, 0);

  console.log("Total:", total);

  let keys = ["A", "B", "C", "D", "E", "F", "G"];
  let octave = 0;

  let keysWithOctave = keys.map((item) => {
    return item + octave;
  });
  console.log(keysWithOctave);

  let pressedKey = "C";

  let quizKey = "C";

  let contacts = [
    { name: "Tich", phone: "0773" },
    { name: "Berlin", phone: "0774" },
    { name: "Trish", phone: "0775" },
  ];
  let searchInput = "Trish";
  let found = contacts.filter((item) => {
    return item.name === searchInput;
  });
  console.log("Contact:", found);
*/
