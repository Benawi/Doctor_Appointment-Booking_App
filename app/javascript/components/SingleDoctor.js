import React from 'react';
import PropTypes from 'prop-types';
import insta from '../../assets/images/insta-icon-home.png';
import fb from '../../assets/images/fb-icon-home.png';
import twitter from '../../assets/images/twitter-icon-home.png';

const social = [
  { icon: insta },
  { icon: fb },
  { icon: twitter },
];

const SingleDoctor = ({
  name, photo, specialization,bio
}) => (
  <div className="doctors1">
    <div className="image-div">
      <img src={`${photo}`} alt="Profile of doctor" className="doctors-images"  />
    </div>
    
    <div className="doctor-data">
      <h4>Dr. {name}</h4>
      <h4> {specialization}</h4>
      <p>............................</p>
      <p>{bio}</p>
      <div className="social-net">
        {social.map((item) => (
          <a href="/" key={item.icon}>
            <img src={item.icon} alt="social" className="w-8" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

SingleDoctor.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
};

export default SingleDoctor;
