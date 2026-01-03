import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import AddRestaurant from "./pages/AddRestaurant";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import CustomerDashboard from "./pages/CustomerDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddRestaurant />} />
        <Route path="/admin/update/:id" element={<UpdateRestaurant />} />
        <Route path="/customers/dashboard" element={<CustomerDashboard />} />
      </Routes>
    </>
  );
}

export default App;