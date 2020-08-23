import { writable } from "svelte/store";

export const alertArr = writable([]);

export const newAlert = (title, description = "", type = "error") => {
  alertArr.update((n) => [
    ...n,
    {
      title,
      description,
      type,
    },
  ]);
};
