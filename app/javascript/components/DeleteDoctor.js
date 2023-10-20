import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  deleteDoctorAction,
  getDoctorsAction,
} from '../redux/doctorsReducer/doctors';
import '../../assets/stylesheets/delete_doctor.css';


const DeleteDoctor = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(state => state.doctors.doctors);
  const [successNotice, setSuccessNotice] = useState(false);

  const deleteDoctor = (id) => {
    dispatch(deleteDoctorAction(id));
    setSuccessNotice(true);
    setTimeout(() => {
      setSuccessNotice(false);
    }, 2000);
  };
  
  return (
    <div className="delete-container">
      <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th> 
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map(doctor => (
          <tr key={doctor.id} className="delete-details">
             <td> <img src={`${doctor.photo}`} alt="doctor" className="delete-image" /></td>
             <td>{doctor.name}</td>
           <td>  <button
            type="button"
            onClick={() => deleteDoctor(doctor.id)}
            className="delete-button"
          >
            Delete
          </button></td>
          </tr>
        ))}
      </tbody>
    </table>

      {successNotice && (
        <p className="text-center text-sky-500 text-lg mt-4">
          Doctor deleted succesfully!
        </p>
      )}
    </div>
  );
};

export default DeleteDoctor;