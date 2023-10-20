import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDoctors } from "../redux/doctors/doctorsSlice";
import { fetchSpecializations } from "../redux/specializations/specializationsSlice";
import '../../assets/stylesheets/add_doctor.css';
const AddDoctor = () => {
  const dispatch = useDispatch();
  const specializations = useSelector((state) => state.specializations.specializations);

  // Define doctorData state using useState
  const [doctorData, setDoctorData] = useState({
    name: "",
    bio: "",
    photo: "",
    specialization_id: "",
  });

  useEffect(() => {
    // Fetch specializations when the component mounts
    dispatch(fetchSpecializations());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDoctors(doctorData));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  return (
    <section className="doctor-section">
      <div className="doctor-container">
        <h3 className="doctor-title">Add A Doctor</h3>
        <form className="doctor-form" onSubmit={handleSubmit}>
          <input
           className="form-control"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            required // Mark the input as required
          />
          <input
            className="form-control"
            name="bio"
            placeholder="Bio"
            onChange={handleInputChange}
            required // Mark the input as required
          />
          <input
            className="form-control"
            name="photo"
            placeholder="Photo"
            onChange={handleInputChange}
            required // Mark the input as required
          />
          <select
            className="form-control"
            name="specialization_id"
            onChange={handleInputChange}
          >
            <option value="">Select Specialization</option>
            {specializations.map((specialization) => (
              <option key={specialization.id} value={specialization.id}>
                {specialization.name}
              </option>
            ))}
          </select>
          <button type="submit" className="add-button">
            Submit
          </button>
        </form>
      </div>
      </section>
  );
};

export default AddDoctor;
