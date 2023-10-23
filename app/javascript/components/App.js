
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "../../assets/stylesheets/app.css";
import NavBar from "./NabBar";
import Doctors from "./Doctors";
import AddDoctor from "./AddDoctor";
import DeleteDoctor from "./DeleteDoctor";
import ReserveForm from "./ReservseForm";
import MyReservation from "./MyReservation";
import DoctorDetails from "./DoctorDetails";
import LogoutButton from "./Logout";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Doctors />} />
          <Route exact path="/doctors" element={<Doctors />} />
          <Route exact path="/doctor_details/:id" element={<DoctorDetails />} />
          <Route exact path="/add-doctor" element={<AddDoctor />} />
          <Route exact path="/delete-doctor" element={<DeleteDoctor />} />
          <Route exact path="/reserve-form" element={<ReserveForm />} />
          <Route exact path="/my-reservation" element={<MyReservation />} />
          <Route exact path="/logout" element={<SignOut />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
