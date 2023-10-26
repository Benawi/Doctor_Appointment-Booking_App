import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createDoctors } from "../redux/doctors/doctorsSlice";
import { fetchSpecializations } from "../redux/specializations/specializationsSlice";
import "../../assets/stylesheets/add_doctor.css";
const AddDoctor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetched = useSelector(
    (state) => state.specializations.specializations.length > 0
  );
  useEffect(() => {
    if (!fetched) {
      dispatch(fetchSpecializations());
    }
  }, [dispatch, fetched]);
  const specializations = useSelector(
    (state) => state.specializations.specializations
  );

  const [doctorData, setDoctorData] = useState({
    name: "",
    bio: "",
    photo: "",
    specialization_id: "",
  });

  const [successNotice, setSuccessNotice] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDoctors(doctorData));
    setSuccessNotice(true);
    setTimeout(() => {
      setSuccessNotice(false);
    }, 2000);
    navigate("/");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  return (
    <section className="doctor-section">
      <div className="doctor-container">
        <h3 className="doctor-title">Add A Doctor</h3>
        {successNotice && (
          <p className="doctor-title text-center text-sky-500 text-lg mt-4">
            Doctor Saved succesfully!
          </p>
        )}
        <form className="doctor-form" onSubmit={handleSubmit}>
          <input
            className="form-control"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            name="bio"
            placeholder="Bio"
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            name="photo"
            placeholder="Photo URL"
            onChange={handleInputChange}
            required
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
