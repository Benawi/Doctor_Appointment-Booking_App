import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from "../redux/reservations/reservationsSlice";

const MyReservation = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(state => state.reservations.reservations);

  useEffect(() => {
    dispatch(fetchReservations())
  }, [dispatch])
  return (
    <div className="Main-Section">

      <h2>My reservation</h2>
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <h3>{reservation.user}</h3>
          <p>Doctor: {reservation.doctor}</p>
          <p>Reservation Time: {reservation.reservation_time}</p>
        </div>
      ))}
    </div>
  );
}

export default MyReservation;