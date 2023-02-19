import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import("./MainPage")), 1_000);
    })
);
