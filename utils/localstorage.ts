export const getFromStorage = (key) => {
  let data;
  if (typeof window !== "undefined") {
    data = window.localStorage.getItem(key);
    if (key === "user") {
      return JSON.parse(data);
    }
  }
  return data;
};

export const setToStorage = (key, value) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, value);
  }
};
