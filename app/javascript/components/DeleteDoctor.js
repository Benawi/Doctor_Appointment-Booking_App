import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDoctors,
  deleteDoctorAction,
} from "../redux/doctors/doctorsSlice";

import "../../assets/stylesheets/delete_doctor.css";

const DeleteDoctor = () => {
  const dispatch = useDispatch();
  const fetched = useSelector((state) => state.doctors.doctors.length > 0);
  useEffect(() => {
    if (!fetched) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, fetched]);
  const doctors = useSelector((state) => state.doctors.doctors);
  const [successNotice, setSuccessNotice] = useState(false);

  const deleteDoctor = (uuid) => {
    dispatch(deleteDoctorAction(uuid));
    setSuccessNotice(true);
    setTimeout(() => {
      setSuccessNotice(false);
    }, 2000);
  };

  return (
    <div className="delete-container">
      <div className="header">
        <h1 className="header-1">AVAILABLE DOCTORS</h1>
        {successNotice && (
          <p className="text-center text-sky-500 text-lg mt-4">
            Doctor deleted succesfully!
          </p>
        )}
      </div>
      <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Bio</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.uuid} className="delete-details">
              <td>{doctor.name}</td>
              <td>{doctor.bio}</td>
              <td>
                {" "}
                <button
                  type="button"
                  onClick={() => deleteDoctor(doctor.uuid)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default DeleteDoctor;
