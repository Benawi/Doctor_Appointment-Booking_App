import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Doctors from './components/Doctors';
import AddDoctor from './components/AddDoctor';
import DeleteDoctor from './components/DeleteDoctor';
import DoctorDetails from './components/DoctorDetails';

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      { user && user.fetchedData !== null ? <Navbar /> : '' }
      <div>
        <Routes>
          <Route exact="true" path="/doctors" element={<Doctors />} />
          <Route exact path="/add_doctor" element={<AddDoctor />} />
          <Route exact path="/delete_doctor" element={<DeleteDoctor />} />
          <Route exact path="/doctor_details/:id" element={<DoctorDetails />} />
          <Route exact path="/add-doctor" element={<AddDoctor />} />
          <Route exact path="/delete_doctor" element={<DeleteDoctor />} />
           <Route exact path="/reserve-form" element={<ReserveFroms />} />
          <Route exact path="/my-reservation" element={<MyReservation />} />
          
        </Routes>
      </div>
    </>

  );
}

export default App;
