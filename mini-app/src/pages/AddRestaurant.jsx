import { useContext, useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { useNavigate } from "react-router-dom";

function AddRestaurant() {
  const { addRestaurant } = useContext(RestaurantContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "Rajasthani",
    parkingLot: false,
    image: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.restaurantName || !form.address || !form.image) {
      alert("Fill all fields");
      return;
    }

    addRestaurant({
      restaurantID: Date.now(),
      ...form
    });

    alert("Restaurant Added");
    navigate("/admin/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Restaurant</h2>

      <input name="restaurantName" placeholder="Name" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />

      <select name="type" onChange={handleChange}>
        <option>Rajasthani</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>

      <label>
        Parking
        <input type="checkbox" name="parkingLot" onChange={handleChange} />
      </label>

      <input name="image" placeholder="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg" onChange={handleChange} />

      <button>Add</button>
    </form>
  );
}

export default AddRestaurant;
