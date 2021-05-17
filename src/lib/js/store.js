import { writable } from "svelte/store";

export let domState = writable({
  showTitleForm: false,
  showTitleContent: false,
  showFabs: false,
  showAdd: true,
  showAddDesc: false,
  activeIndex: 0,
  pageIndex: 0,
  save: false,
});

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
        { note: { title: "potsi" } },
        {
          note: {
            //**** */
            title: "piri",
            level: 2,
            steps: [
              //****** */
              { note: { title: "one" } },
              { note: { title: "two" } },
              { note: { title: "three" } },
              {
                note: {
                  //*** */
                  title: "piri",
                  level: 3,
                  steps: [
                    //**** */
                    { note: { title: "ichi" } },
                    {
                      note: {
                        title: "piri",
                        level: 4,
                        steps: [
                          //** */
                          { note: { title: "uno" } },
                          { note: { title: "dos" } },
                          {
                            note: {
                              //** */
                              title: "piri",
                              level: 5,
                              steps: [
                                //**** */
                                { note: { title: "un" } },
                                { note: { title: "deaux" } },
                                { note: { title: "trois" } },
                                { note: { title: "quatre" } },
                                { note: { title: "cinq" } },
                              ],
                            },
                          }, //** */
                          { note: { title: "quattro" } },
                        ],
                      },
                    },
                    { note: { title: "san" } },
                    { note: { title: "chii" } },
                    { note: { title: "go" } },
                  ],
                },
              },
              { note: { title: "five" } },
            ],
          },
        },
        { note: { title: "tatu" } },
        { note: { title: "ina" } },
      ],
    },
  },
  {
    note: {
      title: "App",
      level: 1,
      steps: [
        // *******
        { note: { title: "potsi" } },
        {
          note: {
            //**** */
            title: "piri",
            level: 2,
            steps: [
              //****** */
              { note: { title: "one" } },
              { note: { title: "two" } },
              { note: { title: "three" } },
              {
                note: {
                  //*** */
                  title: "piri",
                  level: 3,
                  steps: [
                    //**** */
                    { note: { title: "ichi" } },
                    {
                      note: {
                        title: "piri",
                        level: 4,
                        steps: [
                          //** */
                          { note: { title: "uno" } },
                          { note: { title: "dos" } },
                          {
                            note: {
                              //** */
                              title: "piri",
                              level: 5,
                              steps: [
                                //**** */
                                { note: { title: "un" } },
                                { note: { title: "deaux" } },
                                { note: { title: "trois" } },
                                { note: { title: "quatre" } },
                                { note: { title: "cinq" } },
                              ],
                            },
                          }, //** */
                          { note: { title: "quattro" } },
                        ],
                      },
                    },
                    { note: { title: "san" } },
                    { note: { title: "chii" } },
                    { note: { title: "go" } },
                  ],
                },
              },
              { note: { title: "five" } },
            ],
          },
        },
        { note: { title: "tatu" } },
        { note: { title: "ina" } },
      ],
    },
  },
  {
    note: {
      title: "App",
      level: 1,
      steps: [
        // *******
        { note: { title: "potsi" } },
        {
          note: {
            //**** */
            title: "piri",
            level: 2,
            steps: [
              //****** */
              { note: { title: "one" } },
              { note: { title: "two" } },
              { note: { title: "three" } },
              {
                note: {
                  //*** */
                  title: "piri",
                  level: 3,
                  steps: [
                    //**** */
                    { note: { title: "ichi" } },
                    {
                      note: {
                        title: "piri",
                        level: 4,
                        steps: [
                          //** */
                          { note: { title: "uno" } },
                          { note: { title: "dos" } },
                          {
                            note: {
                              //** */
                              title: "piri",
                              level: 5,
                              steps: [
                                //**** */
                                { note: { title: "un" } },
                                { note: { title: "deaux" } },
                                { note: { title: "trois" } },
                                { note: { title: "quatre" } },
                                { note: { title: "cinq" } },
                              ],
                            },
                          }, //** */
                          { note: { title: "quattro" } },
                        ],
                      },
                    },
                    { note: { title: "san" } },
                    { note: { title: "chii" } },
                    { note: { title: "go" } },
                  ],
                },
              },
              { note: { title: "five" } },
            ],
          },
        },
        { note: { title: "tatu" } },
        { note: { title: "ina" } },
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
