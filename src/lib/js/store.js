import { writable } from "svelte/store";
import { browser } from "$app/env";

export let codeNotes = writable([]);
export let appNotes = writable([]);
export let domState = writable({
  showFabs: false,
  activeIndex: 0,
  pageIndex: 0,
  save: false,
  update: false,
  login: false,
  edit: false,
  appForward: true,
});

export let qztm = writable({ t: 0 });

export let languages = writable(["Javascript", "PHP", "HTML", "CSS"]);

export let notebook = writable([
  {
    note: {
      title: "App Title 1",
      level: 1,
      steps: [
        {
          note: {
            title: "Step 1",
            level: 2,
            steps: [],
          },
        },
        {
          note: {
            title: "Step 2",
            level: 2,
            steps: [],
          },
        },
        {
          note: {
            title: "Step 3",
            level: 2,
            steps: [],
          },
        },
      ],
    },
  },
  {
    note: {
      title: "App Title 2",
      level: 1,
      steps: [
        {
          note: {
            title: "Step 1",
            level: 2,
            steps: [],
          },
        },
        {
          note: {
            title: "Step 2",
            level: 2,
            steps: [
              {
                note: {
                  title: "Sub Step 1",
                  level: 3,
                  steps: [],
                },
              },
              {
                note: {
                  title: "Sub Step 2",
                  level: 3,
                  steps: [],
                },
              },
            ],
          },
        },
        {
          note: {
            title: "Step 3",
            level: 2,
            steps: [],
          },
        },
      ],
    },
  },
]);

export let notes = writable([]);

export let contacts = writable([
  {
    name: "Trevor Nzou",
    phoneNumber: ["0772557890", "0778889443"],
    email: "trevornzou@gmail.com",
  },
  {
    name: "Julia Mhere",
    phoneNumber: ["0735557890"],
    email: "juliamhere@yahoo.co.uk",
  },
  {
    name: "Kuda Chimutashu",
    phoneNumber: ["0772457890", "0719889443"],
    email: "kudac234@gmail.com",
  },
  {
    name: "Mavis Garan'anga",
    phoneNumber: ["0772557340", "0774589443", "0776789443"],
    email: "mgara@hotmail.com",
  },
  {
    name: "Chido Chazezesa",
    phoneNumber: ["0772557890"],
    email: "cchazezesa@gmail.com",
  },
]);

export let groceryList = writable([
  {
    value: ["Rice", "Cooking oil", "Soap", "Royco"],
  },
]);

export let cars = writable([
  {
    name: "mazda",
    color: "gray",
    year: "2009",
  },

  {
    name: "toyota",
    color: "red",
    year: "2019",
  },

  {
    name: "bmw",
    color: "brown",
    year: "1990",
  },

  {
    name: "benz",
    color: "blue",
    year: "2020",
  },

  {
    name: "honda",
    color: "white",
    year: "2011",
  },

  {
    name: "wish",
    color: "yellow",
    year: "2018",
  },
]);

export const persistStore = (key, initial) => {
  if (browser) {
    const persist = localStorage.getItem(key);
    const data = persist ? JSON.parse(persist) : initial;

    const store = writable(data, () => {
      const unsubscribe = store.subscribe((value) => {
        localStorage.setItem(key, JSON.stringify(value));
      });
      return unsubscribe;
    });

    return store;
  } else {
    codeNotes = writable([]);
    appNotes = writable([]);
  }
};

//codeNotes = persistStore("code_notes", []);

//appNotes = persistStore("app_notes", []);
