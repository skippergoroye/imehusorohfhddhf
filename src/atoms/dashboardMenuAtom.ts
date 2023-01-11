import { atom } from "recoil";

export const dashboardMenuState = atom({
  key: "dashboardMenuState",
  default: "Users",
});

export const userDetailNavState = atom({
  key: "userDetailNavState",
  default: "General Details",
});

export const modalFilterState = atom({
  key: "modalFilterState",
  default: {
    org: "",
    username: "",
    email: "",
    phoneNumber: "",
    status: "",
  },
});
