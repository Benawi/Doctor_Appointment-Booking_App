import React from "react";

const AddDoctor = () => {
  return (
    <div className="Main-Section">

      <h2>Add doctor component will be added here</h2>
      <div className="Form-section">
      <h2 className="Form-title">ADD NEW Doctor</h2>
      <form className="Form-fields" onSubmit={handleSubmit}>
        <input className="Tilte-input" name="name" placeholder="Name" />
        <input className="Author-input" name="bio" placeholder="bio" />
        <input className="Author-input" name="specialization" placeholder="author" />
        <input className="Author-input" name="photo" placeholder="photo" />
        <button type="submit" className="Add-btn">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default AddDoctor;