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

export let contacts = writable([]);

export const codeNotes = writable([]);

export let appNotes = writable([]);

export let groceryList = writable([
  {
    value: ["Rice", "Cooking oil", "Soap", "Royco"],
  },
]);
