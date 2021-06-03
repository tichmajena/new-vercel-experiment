import { writable } from "svelte/store";

export let cnState = writable({
  newNote: false,
  addDesc: false,
  addCode: true,
  saveNote: false,
});

export let domState = writable({
  showTitleForm: false,
  showTitleContent: false,
  showFabs: false,
  showAdd: true,
  showAddDesc: false,
  activeIndex: 0,
  pageIndex: 0,
  save: false,
  login: true,
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

export const codeNotes = writable([]);

export let appNotes = writable([
  {
    note: {
      title: "App",
      level: 1,
      steps: [
        // *******
        { note: { title: "potsi", steps: [] } },
        {
          note: {
            //**** */
            title: "piri",
            level: 2,
            steps: [
              //****** */
              { note: { title: "one", steps: [] } },
              { note: { title: "two", steps: [] } },
              { note: { title: "three", steps: [] } },
              {
                note: {
                  //*** */
                  title: "piri",
                  level: 3,
                  steps: [
                    //**** */
                    { note: { title: "ichi", steps: [] } },
                    {
                      note: {
                        title: "piri",
                        level: 4,
                        steps: [
                          //** */
                          { note: { title: "uno", steps: [] } },
                          { note: { title: "dos", steps: [] } },
                          {
                            note: {
                              //** */
                              title: "piri",
                              level: 5,
                              steps: [
                                //**** */
                                { note: { title: "un", steps: [] } },
                                { note: { title: "deaux", steps: [] } },
                                { note: { title: "trois", steps: [] } },
                                { note: { title: "quatre", steps: [] } },
                                { note: { title: "cinq", steps: [] } },
                              ],
                            },
                          }, //** */
                          { note: { title: "quattro", steps: [] } },
                        ],
                      },
                    },
                    { note: { title: "san", steps: [] } },
                    { note: { title: "chii", steps: [] } },
                    { note: { title: "go", steps: [] } },
                  ],
                },
              },
              { note: { title: "five", steps: [] } },
            ],
          },
        },
        { note: { title: "tatu", steps: [] } },
        { note: { title: "ina", steps: [] } },
      ],
    },
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
