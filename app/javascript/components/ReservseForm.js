import React, { useState, useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReservations } from "../redux/reservations/reservationsSlice";
import { fetchDoctors } from "../redux/doctors/doctorsSlice";

const ReserveForm = () => {
  const dispatch = useDispatch();
  const doctors = useSelector( (state) => state.doctors.doctors)

  const [reservationData, setreservationData] = useState({
    doctor_id: "",
    reservation_time: "",
  });

  useEffect(() => {

    dispatch(fetchDoctors());
  }, [dispatch]);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createReservations(reservationData));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("Value:", value);
    setreservationData({ ...reservationData, [name]: value });
  };


  return (
    <div className="Main-Section">
      <h2>Reserve form component</h2>
      <form className="Form-fields" onSubmit={handleSubmit}>
        <select
            className="Author-input"
            name="doctor_id"
            onChange={handleInputChange}
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
          <input type="datetime-local" name="reservation_time" onChange={handleInputChange} value={reservationData.reservation_time} />
          <button type="submit" className="Add-btn">
            Submit
          </button>
      </form>
    </div>
  );
}

export default ReserveForm;