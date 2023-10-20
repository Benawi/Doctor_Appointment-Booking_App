import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors } from "../redux/doctors/doctorsSlice"; // Import your Redux slice/action
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/doctors.css';
import Carousel from 'react-multi-carousel';
import SingleDoctor from './SingleDoctor';
import 'react-multi-carousel/lib/styles.css';

const Doctors = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(state => state.doctors.doctors);
  console.log(doctors)

  useEffect(() => {
    // Fetch doctors when the component mounts
    dispatch(fetchDoctors());
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="main-doctor-container">
      {
        doctors.length === 0
          ? (
            <div className="header">
              <h1 className="header-1">AVAILABLE DOCTORS</h1>
              <h2 className="header-2 mt-5">No doctors available</h2>
            </div>
          )

          : (
            <>
              <div className="header">
                <h1 className="header-2">AVAILABLE DOCTORS</h1>
                <p className="header-2"> Please select a doctor</p>
              </div>
              <div className="doctors-li">
                <Carousel
                  responsive={responsive}
                  className="carousel-container"
                  infinite
                >
                  {doctors.map((doctor) => (
                    <div key={doctor.id}>
                      <Link to={`/doctor_details/${doctor.id}`}>
                        <SingleDoctor
                          name={doctor.name}
                          photo={doctor.photo}
                          specialization={doctor.specialization}
                          bio={doctor.bio}
                        />
                      </Link>
                    </div>
                  ))}
                </Carousel>
              </div>
            </>
          )

      }

    </div>
  );
};

export default Doctors;
