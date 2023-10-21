import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from "../redux/reservations/reservationsSlice";

const MyReservation = () => {
  const dispatch = useDispatch();
  const fetched  = useSelector((state) => state.reservations.reservations.length > 0);
  useEffect(() => {
    if (!fetched) {
      dispatch(fetchReservations());
    }
  }, [dispatch, fetched ]);
  const reservations = useSelector((state) => state.reservations.reservations);

  return (
    <div className="Main-Section">

      <h2>My reservation</h2>
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <h3>{reservation.user}</h3>
          <p>{reservation.doctor}</p>
          <p>{reservation.reservation_time}</p>
        </div>
      ))}
    </div>
  );
}

export default MyReservation;