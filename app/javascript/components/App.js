import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../../assets/stylesheets/app.css'
import NavBar from './NabBar';
import Doctors from './Doctors';
import AddDoctor from './AddDoctor';
import DeleteDoctor from './DeleteDoctor';
import ReserveForm from './ReservseForm';
import MyReservation from './MyReservation';
import LogoutButton from './Logout';

const  App = () => {
  return (
    <div className="Main-part">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Doctors />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/delete-doctor" element={<DeleteDoctor />} />
          <Route path="/reserve-form" element={<ReserveForm />} />
          <Route exact path="/my-reservation" element={<MyReservation />} />
          <Route exact path="/users/sign_out" element={<LogoutButton />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;