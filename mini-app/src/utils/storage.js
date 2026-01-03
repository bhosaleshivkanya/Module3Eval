export const getRestaurants = () => {
  let data = localStorage.getItem("restaurants");
  return data ? JSON.parse(data) : [];
};

export const saveRestaurants = (data) => {
  localStorage.setItem("restaurants", JSON.stringify(data));
};