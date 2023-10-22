import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDoctors,
  deleteDoctorAction,
} from "../redux/doctors/doctorsSlice";

import "../../assets/stylesheets/delete_doctor.css";
import "../../assets/stylesheets/add_doctor.css";
import "../../assets/stylesheets/table.css";
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
    <section className="doctor-section">
      <div >
        <h3 className="doctor-title">LIST OF DOCTORS</h3>
        {successNotice && (
              <p className="doctor-title text-center text-sky-500 text-lg mt-4">
                Doctor deleted succesfully!
              </p>
            )}
        <div className="delete-container">
          <div>
            <table className="table">
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
                    <td className="tdname">{doctor.name}</td>
                    <td className="tdbio">{doctor.bio}</td>
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
      </div>
    </section>
  );
};

export default DeleteDoctor;
