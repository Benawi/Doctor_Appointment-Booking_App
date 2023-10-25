import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReservations } from "../redux/reservations/reservationsSlice";
import "../../assets/stylesheets/delete_doctor.css";
import "../../assets/stylesheets/add_doctor.css";
import "../../assets/stylesheets/table.css";
const MyReservation = () => {
  const dispatch = useDispatch();
  const fetched = useSelector(
    (state) => state.reservations.reservations.length > 0
  );
  useEffect(() => {
    if (!fetched) {
      dispatch(fetchReservations());
    }
  }, [dispatch, fetched]);
  const reservations = useSelector((state) => state.reservations.reservations);
  const formatReservationTime = (timeString) => {
    const reservationTime = new Date(timeString);
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Africa/Lagos',
    };
    return reservationTime.toLocaleTimeString('en-US', options);
  };

  return (
    <section className="doctor-section">
      <div>
        <h3 className="doctor-title">MY RESERVATIONS</h3>

        <div className="delete-container">
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Doctor</th>
                  <th>Reservation Time</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr key={reservation.id} className="delete-details">
                    <td className="tdname">{reservation.user}</td>
                    <td className="tdname"> {reservation.doctor}</td>
                    <td className="tdname">{formatReservationTime(reservation.reservation_time)}</td>
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

export default MyReservation;
