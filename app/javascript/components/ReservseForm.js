import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReservations } from "../redux/reservations/reservationsSlice";
import { fetchDoctors } from "../redux/doctors/doctorsSlice";

const ReserveForm = () => {
  const [reservationData, setreservationData] = useState({
    doctor_id: "",
    reservation_time: "",
  });

  const dispatch = useDispatch();
  const fetched = useSelector((state) => state.doctors.doctors.length > 0);
  useEffect(() => {
    if (!fetched) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, fetched]);
  const doctors = useSelector((state) => state.doctors.doctors);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createReservations(reservationData));

    setSuccessNotice(true);
    setTimeout(() => {
      setSuccessNotice(false);
    }, 2000);
    navigate("/my-reservation");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("Value:", value);
    setreservationData({ ...reservationData, [name]: value });
  };

  const [successNotice, setSuccessNotice] = useState(false);
  return (
    <section className="doctor-section">
      <div className="doctor-container">
        <h3 className="doctor-title">Reserve Appointement</h3>
        {successNotice && (
          <p className="doctor-title text-center text-sky-500 text-lg mt-4">
           Appointement reserved succesfully!
          </p>
        )}
        <form className="doctor-form" onSubmit={handleSubmit}>
          <select
            className="form-control"
            name="doctor_id"
            onChange={handleInputChange}
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} ({doctor.specialization})
              </option>
            ))}
          </select>
          <input
            type="datetime-local"
            className="form-control"
            name="reservation_time"
            onChange={handleInputChange}
            value={reservationData.reservation_time}
          />
          <button type="submit" className="add-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default ReserveForm;
