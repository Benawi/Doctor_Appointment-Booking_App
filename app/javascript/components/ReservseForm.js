import React, { useState, useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createReservations } from "../redux/reservations/reservationsSlice";
import { fetchDoctors } from "../redux/doctors/doctorsSlice";

const ReserveForm = () => {
  const navigate = useNavigate();
  const [reservationData, setreservationData] = useState({
    doctor_id: "",
    reservation_time: "",
  });

  const dispatch = useDispatch();
  const fetched  = useSelector((state) => state.doctors.doctors.length > 0);
  useEffect(() => {
    if (!fetched) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, fetched ]);
  const doctors = useSelector((state) => state.doctors.doctors);


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createReservations(reservationData));

    navigate('/my-reservation')
    
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
            value={reservationData.doctor_id}
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.real_id}>
                {doctor.name} ({doctor.specialization})
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