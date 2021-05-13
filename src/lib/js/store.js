import { writable } from "svelte/store";

export let domState = writable({
  showTitleForm: false,
  showTitleContent: false,
  showFabs: false,
  showAdd: true,
  showAddDesc: false,
  activeIndex: 0,
  pageIndex: 0,
});

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

export let appNotes = writable([]);

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
