import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors } from "../redux/doctors/doctorsSlice"; // Import your Redux slice/action

const Doctors = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(state => state.doctors.doctors);
  console.log(doctors)

  useEffect(() => {
    // Fetch doctors when the component mounts
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className="Main-Section">
      <h2>Doctors List</h2>
      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <img src={doctor.image} alt={`Dr. ${doctor.name}`} />
          <h3>{doctor.name}</h3>
          <p>{doctor.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default Doctors;
