import React, { useEffect, useState } from "react";
import CustomCard from "../common/customgalaxy/"; 
import { getImages } from "../htttp/api"; 
import "./style.css";

const Galaxiescosmos = () => {
  const [galaxies, setGalaxies] = useState([]);

  useEffect(() => {
    getImages("/Galaxy", (data) => {
      setGalaxies(data); 
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* First Galaxy Section */}
        <div className="col-lg-6 col-md-12">
          {galaxies.length > 0 && (
            <div className="Galaxycosmos_first">
              <div className="Galaxycosmos_first_main">
                <img src={galaxies[0]?.image} alt={galaxies[0]?.title} />
                <div className="Galaxycosmos_first_txt">
                  <h1>{galaxies[0]?.title}</h1>
                  <p>{galaxies[0]?.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Other Galaxies */}
        <div className="col-lg-6 col-md-12">
          <div className="row Galaxysecondrow">
            {galaxies.slice(1, 5).map((galaxy, index) => (
              <div key={galaxy.id || index} className="col-lg-6 col-md-6 col-sm-12">
                <CustomCard {...galaxy} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galaxiescosmos;
