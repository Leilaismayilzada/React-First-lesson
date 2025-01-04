import React from "react";
import "./style.css";

const GadgetBlog = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="GadgetBlog_colums">
              <div className="GadgetBlog_colums_img">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/posts/post-tech-07.webp?imwidth=256"
                  alt="Gadget Blog"
                />
              </div>
              <div className="GadgetBlog_colums_txt">
                <h2>Gadget</h2>
                <p>OnePlus Nord hands-on Strong features at a tempting price</p>
              </div>
            </div>
            <div className="GadgetBlog_colums">
              <div className="GadgetBlog_colums_img">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/posts/post-test-tech-04.webp?imwidth=256"
                  alt="Gadget Blog"
                />
              </div>
              <div className="GadgetBlog_colums_txt">
                <h2>Gadget</h2>
                <p>One of the most portable drones in the market.</p>
              </div>
            </div>
            <div className="GadgetBlog_colums">
              <div className="GadgetBlog_colums_img">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/posts/post-tect-05.webp?imwidth=256"
                  alt="Gadget Blog"
                />
              </div>
              <div className="GadgetBlog_colums_txt">
                <h2>Gadget</h2>
                <p>Air Pods Pro with Wireless Charging Case.</p>
              </div>
            </div>
            <div className="GadgetBlog_colums">
              <div className="GadgetBlog_colums_img">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/posts/post-grid-01.webp?imwidth=256"
                  alt="Gadget Blog"
                />
              </div>
              <div className="GadgetBlog_colums_txt">
                <h2>Gadget</h2>
                <p>Get Ready To Up Your Creative Game With The New DJI Mavic</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="GadgetBlog_bigside">
<div className="GadgetBlog_bigsideimg">
    <img src="https://new.axilthemes.com/demo/react/blogar/images/posts/thumbnail-06.webp?imwidth=1920" alt="" />
    <div className="GadgetBlog_bigsidetxt">
        <h2>Gadget</h2>
        <p>iPhone SE is discontinued, but these  <br />retailers are still selling it</p>
    </div>

</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GadgetBlog;
