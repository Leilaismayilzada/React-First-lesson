import React from 'react';
import PropTypes from 'prop-types'; 

const CustomCard = ({ title, description, image }) => {
  return (
    <div className="GalaxySecond">
      <div className="GalaxySecondimg">
        <img src={image} alt={title} />
      </div>
      <div className="GalaxySecondtxt">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CustomCard;


