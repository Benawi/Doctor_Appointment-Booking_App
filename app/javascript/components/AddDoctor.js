import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDoctors } from "../redux/doctors/doctorsSlice";
import { fetchSpecializations } from "../redux/specializations/specializationsSlice";

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
    <div className="Main-Section">
      <h2>Add Doctor</h2>
      <div className="Form-section">
        <h2 className="Form-title">ADD NEW Doctor</h2>
        <form className="Form-fields" onSubmit={handleSubmit}>
          <input
            className="Tilte-input"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            required // Mark the input as required
          />
          <input
            className="Author-input"
            name="bio"
            placeholder="Bio"
            onChange={handleInputChange}
            required // Mark the input as required
          />
          <input
            className="Author-input"
            name="photo"
            placeholder="Photo"
            onChange={handleInputChange}
            required // Mark the input as required
          />
          <select
            className="Author-input"
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
          <button type="submit" className="Add-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
