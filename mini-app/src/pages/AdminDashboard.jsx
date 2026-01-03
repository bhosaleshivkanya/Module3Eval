import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const { restaurants, deleteRestaurant } = useContext(RestaurantContext);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {restaurants.length === 0 && <p>No data found</p>}

      {restaurants.map((r) => (
        <div key={r.restaurantID}>
          <h3>{r.restaurantName}</h3>
          <img src={r.image} width="200" />
          <p>{r.address}</p>
          <p>{r.type}</p>

          <Link to={`/admin/update/${r.restaurantID}`}>Edit</Link>
          <button onClick={() => deleteRestaurant(r.restaurantID)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;