import { writable } from "svelte/store";
import { browser } from "$app/env";

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

export let notebook = writable([
  {
    note: {
      title: "App Title 1",
      level: 1,
      steps: [
        {
          note: {
            title: "Step 1",
            level: 1,
            steps: [],
          },
        },
        {
          note: {
            title: "Step 2",
            level: 1,
            steps: [],
          },
        },
        {
          note: {
            title: "Step 3",
            level: 1,
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
            level: 1,
            steps: [],
          },
        },
        {
          note: {
            title: "Step 2",
            level: 1,
            steps: [
              {
                note: {
                  title: "Sub Step 1",
                  level: 1,
                  steps: [],
                },
              },
              {
                note: {
                  title: "Sub Step 2",
                  level: 1,
                  steps: [],
                },
              },
            ],
          },
        },
        {
          note: {
            title: "Step 3",
            level: 1,
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
    name: "name",
    phoneNumber: ["phoneNumber"],
    email: "email",
  },
  {
    name: "name",
    phoneNumber: ["phoneNumber"],
    email: "email",
  },
  {
    name: "name",
    phoneNumber: ["phoneNumber"],
    email: "email",
  },
  {
    name: "name",
    phoneNumber: ["phoneNumber"],
    email: "email",
  },
  {
    name: "name",
    phoneNumber: ["phoneNumber"],
    email: "email",
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
  }
};

export const codeNotes = persistStore("code_notes", []);

export const appNotes = persistStore("app_notes", []);
