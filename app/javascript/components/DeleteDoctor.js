import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors } from "../redux/doctors/doctorsSlice";
import {
  deleteDoctorAction,

} from '../redux/doctorsReducer/doctors';
import '../../assets/stylesheets/delete_doctor.css';
const DeleteDoctor = () => {
 const dispatch = useDispatch();
  const fetched  = useSelector((state) => state.doctors.doctors.length > 0);
  useEffect(() => {
    if (!fetched) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, fetched ]);
  const doctors = useSelector((state) => state.doctors.doctors);
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
      {successNotice && (
        <p className="text-center text-sky-500 text-lg mt-4">
          Doctor deleted succesfully!
        </p>
      )}
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Bio</th> 
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map(doctor => (
          <tr key={doctor.id} className="delete-details">
             <td>{doctor.name}</td>
             <td>{doctor.bio}</td>
           <td>  <button
            type="button"
            onClick={() => deleteDoctor(doctor.id)}
            className="delete-button">
            Delete
          </button></td>
          </tr>
        ))}
      </tbody>
    </table>
      
    </div>
  );
};

export default DeleteDoctor;