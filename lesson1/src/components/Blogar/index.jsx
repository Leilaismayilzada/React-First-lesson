import React, { useEffect, useState } from "react";
import { getImages } from "../htttp/api";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Blogar = () => {
  const [Blogar, setBlogar] = useState([]);

  useEffect(() => {
    getImages("/Blogar", (data) => {
      if (data) {
        setBlogar(data);
      } else {
        console.error("Failed to fetch blog data");
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div className="container leadershipmaincontainer">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="BlogarReklam">
              <img
                src="https://new.axilthemes.com/demo/react/blogar/images/add-banner/banner-01.webp?imwidth=1920"
                alt="Ad Banner"
              />
            </div>

            <div className="BlogarCards">
              {Blogar.length > 0 ? (
                Blogar.map((Blogar) => (
                  <div key={Blogar.id} className="BlogarCard">
                    <div className="BlogarCardimg">
                      <img src={Blogar.image} alt={Blogar.title} />
                    </div>
                    <div className="BlogarCardtxt">
                      <h1>{Blogar.title}</h1>
                      <p>{Blogar.header}</p>
                      <h2>{Blogar.name}</h2>
                      <h3>
                        {Blogar.date} <li>{Blogar.time}</li>
                      </h3>
                    </div>
                  </div>
                ))
              ) : (
                <p>DEFAULT NESE</p>
              )}
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="leadershiprightside">
              <div className="leadershiprightside_top">
                <div className="leadershiprightside_top_card">
                  <img
                    src="https://new.axilthemes.com/demo/react/blogar/images/posts/category/leaderhip.webp?imwidth=128"
                    alt=""
                  />
                </div>
                <div className="leadershiprightside_top_txt">
                  <h2>Leadership</h2>
                </div>
              </div>
              <div className="leadershiprightside_top">
                <div className="leadershiprightside_top_card">
                  <img
                    src="https://new.axilthemes.com/demo/react/blogar/images/posts/category/technology.webp?imwidth=128"
                    alt=""
                  />
                </div>
                <div className="leadershiprightside_top_txt">
                  <h2>Technology</h2>
                </div>
              </div>
            </div>
            <div className="leadershipsearchtables">
              <div className="leadershipsearchtable">
                <h2>Search</h2>
                <p>
                  {" "}
                  <i class="fa-solid fa-magnifying-glass"></i>{" "}
                  <input type="text" placeholder="Search" />
                </p>
              </div>
            </div>
            <div className="leadershippopulartables">
              <div className="leadershippopulartable">
                <h3>Popular on Blogar</h3>
                <div className="leadershippopularCards">
                  <div className="leadershippopularImg">
                    <img
                      src="https://new.axilthemes.com/demo/react/blogar/images/posts/thumbnail-09.webp?imwidth=256"
                      alt=""
                    />
                  </div>
                  <div className="leadershippopulartxt">
                    <h2>
                      Beauty of deep space. Billions of galaxies in the
                      universe.
                    </h2>
                    <p>
                      Jul 23 2022 <li>400K Views</li>
                    </p>
                  </div>
                </div>
                <div className="leadershippopularCards">
                  <div className="leadershippopularImg">
                    <img
                      src="https://new.axilthemes.com/demo/react/blogar/images/posts/post-tect-02.webp?imwidth=256"
                      alt=""
                    />
                  </div>
                  <div className="leadershippopulartxt">
                    <h2>Rocket Lab mission fails shortly after launch.</h2>
                    <p>
                      Jul 10 2022 <li>400K Views</li>
                    </p>
                  </div>
                </div>
                <div className="leadershippopularCards">
                  <div className="leadershippopularImg">
                    <img
                      src="https://new.axilthemes.com/demo/react/blogar/images/posts/post-tect-03.webp?imwidth=256"
                      alt=""
                    />
                  </div>
                  <div className="leadershippopulartxt">
                    <h2>
                      Virtual Reality or Artificial Intelligence Technology
                    </h2>
                    <p>
                      Jul 06 2022 <li>300K Views</li>
                    </p>
                  </div>
                </div>
              </div>
              <div className="leadershipsocialmedias">
                <div className="leadershipsocialmedia">
                  <h3>Stay In Touch</h3>
                </div>
                <div className="leadershipsocialmedialist">
                  <ul>
                    <li>
                      <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-instagram"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-slack"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="leadershipphotos">
                <div className="leadershipphotohead">
                  <h3>Instagram</h3>
                </div>
                <div className="leadershipphoto">
                    <ul>
                        <li><img src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-01.webp?imwidth=256" alt="" /></li>
                        <li><img src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-02.webp?imwidth=256" alt="" /></li>
                        <li><img src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-03.webp?imwidth=256" alt="" /></li>
                        <li><img src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-04.webp?imwidth=256" alt="" /></li>
                        <li><img src="	https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-05.webp?imwidth=256" alt="" /></li>
                        <li><img src="	https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-06.webp?imwidth=256" alt="" /></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blogar;
