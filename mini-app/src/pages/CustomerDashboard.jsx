import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";

function CustomerDashboard() {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <div>
      <h2>Customer Dashboard</h2>

      {restaurants.map((r) => (
        <div key={r.restaurantID}>
          <h3>{r.restaurantName}</h3>
          <img src={r.image} width="200" />
          <p>{r.address}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerDashboard;