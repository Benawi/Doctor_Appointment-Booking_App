import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchDoctors } from "../redux/doctors/doctorsSlice";
import "../../assets/stylesheets/detail.css";

const DoctorDetails = () => {
  const dispatch = useDispatch();
  const fetched  = useSelector((state) => state.doctors.doctors.length > 0);
  useEffect(() => {
    if (!fetched) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, fetched ]);
  const doctors = useSelector((state) => state.doctors.doctors);

  const params = useParams();
  const doctor = doctors.find((doctor) => doctor.id === params.id);
  console.log(doctors);
  const { name, photo, bio,uuid,specialization } = doctor;
  return (
    <div id="RouterNavLink" className="details-container">
      <div className="image-container">
        <img
          src={`${photo}`}
          alt="Profile of doctor"
          className="single-image"
        />
      </div>
      <div className="details my-4">
        <h4 className="me-5 fs-7">{name}</h4>
        <table className="mr-5">
          <tr>
            <th>specialization: </th>
            <td className="py-2 me-5 fs-5">{specialization}</td>
          </tr>
          <tr>
            <th>bio:</th>
            <td className="py-2 me-5 fs-5">{bio}</td>
          </tr>
        </table>
        <Link
          to="/reserve-form"
          className="btn btn-secondary mt-4 text-center"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default DoctorDetails;
