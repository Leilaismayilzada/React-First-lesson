import React, { useState, useEffect } from "react";
import { getImages } from "../../htttp/api"; 
import "./style.css";

const DesignBlogsForReview = () => {
  const [design, setDesign] = useState([]);

  useEffect(() => {
    getImages("/Design", (data) => {
      if (data) {
        setDesign(data); 
      } else {
        console.error("Failed to fetch design data");
      }
    });
  }, []);

  return (
    <React.Fragment>
      <section className="DesignReviewContainer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="DesignBlogsCards">
                <div className="DesignBlogsCardsHead">
                  <h3>Design</h3>
                  <p>
                    4 types of research methods all designers
                    <br /> should know
                  </p>
                </div>
                <div className="DesignBlogsCardsImg">
                  <img
                    src="https://new.axilthemes.com/demo/react/blogar/images/posts/thumbnail-01.webp?imwidth=1200"
                    alt="Design thumbnail 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="DesignBlogsCards">
                <div className="DesignBlogsCardsHead">
                  <h3>Design</h3>
                  <p>
                    iPadOS 14 introduces new designs specifically
                    <br />
                    for iPad
                  </p>
                </div>
                <div className="DesignBlogsCardsImg">
                  <img
                    src="https://new.axilthemes.com/demo/react/blogar/images/posts/thumbnail-03.webp?imwidth=1200"
                    alt="Design thumbnail 2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
           

              <div className="BlogarCards">
                {design.length > 0 ? (
                  design.map((item) => (
                    <div key={item.id} className="BlogarCard">
                      <div className="BlogarCardimg">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="BlogarCardtxt">
                        <h1>Design</h1>
                        <p>{item.header}</p>
                        <h2>{item.name}</h2>
                        <h3>
                          {item.date} <li>{item.time}</li>
                        </h3>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No blog post</p>
                )}
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="leadershiprightside">
              <div className="leadershiprightside_top">
                <div className="leadershiprightside_top_card">
                  <img
                    src="https://new.axilthemes.com/demo/react/blogar/images/posts/category/design.webp?imwidth=128"
                    alt=""
                  />
                </div>
                <div className="leadershiprightside_top_txt">
                  <h2>Design</h2>
                </div>
              </div>
              <div className="leadershiprightside_top">
                <div className="leadershiprightside_top_card">
                  <img
                    src="https://new.axilthemes.com/demo/react/blogar/images/posts/category/leaderhip.webp?imwidth=128"
                    alt=""
                  />
                </div>
                <div className="leadershiprightside_top_txt">
                  <h2>Technology</h2>
                </div>
              </div>
              <div className="leadershiprightside_top">
                <div className="leadershiprightside_top_card">
                  <img
                    src="https://new.axilthemes.com/demo/react/blogar/images/posts/category/gadget.webp?imwidth=128"
                    alt=""
                  />
                </div>
                <div className="leadershiprightside_top_txt">
                  <h2>Gadget</h2>
                </div>
              </div>
              <div className="leadershiprightside_top">
                <div className="leadershiprightside_top_card">
                  <img
                    src="https://new.axilthemes.com/demo/react/blogar/images/posts/category/product.webp?imwidth=128"
                    alt=""
                  />
                </div>
                <div className="leadershiprightside_top_txt">
                  <h2>Products</h2>
                </div>
              </div>
            </div>
            <div className="ReviewfinalCards">
      <div className="ReviewfinalCardVideo">
        <div className="ReviewfinalCardVideotxt">
          <h3>Featured Videos</h3>
        </div>

        <div className="ReviewfinalCardVideos">
          <img
            src="https://new.axilthemes.com/demo/react/blogar/images/posts/thumbnail-08.webp?imwidth=750"
            alt="Video Thumbnail"
          />
        </div>
        <div className="Reviewtextss">
          <p>A five-step framework for effective keyword targeting</p>
        </div>

        <div className="ReviewfinalCardVideos">
          <img
            src="https://new.axilthemes.com/demo/react/blogar/images/post-single/post-single-01.webp?imwidth=750"
            alt="Video Thumbnail"
          />
        </div>
        <div className="Reviewtextss">
          <p>The underrated design book that transformed the</p>
        </div>

        <div className="ReviewfinalCardVideos">
          <img
            src="https://new.axilthemes.com/demo/react/blogar/images/posts/post-dark-01.webp?imwidth=384"
            alt="Video Thumbnail"
          />
        </div>
        <div className="Reviewtextss">
          <p>Security isn’t just a technology problem it’s about design, too</p>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DesignBlogsForReview;
