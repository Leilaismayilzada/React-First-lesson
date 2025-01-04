import React from "react";
import "./style.css";

const DesignBlog = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="GadgetBlog_colums">
              <div className="GadgetBlog_colums_img">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/posts/thumbnail-03.webp?imwidth=256"
                  alt="Gadget Blog"
                />
              </div>
              <div className="GadgetBlog_colums_txt">
                <h2>Design</h2>
                <p>iPadOS 14 introduces new designed specifically for iPad</p>
              </div>
            </div>
            <div className="GadgetBlog_colums">
              <div className="GadgetBlog_colums_img">
                <img
                  src="	https://new.axilthemes.com/demo/react/blogar/images/posts/post-tech-10.webp?imwidth=256"
                  alt="Gadget Blog"
                />
              </div>
              <div className="GadgetBlog_colums_txt">
                <h2>Design</h2>
                <p>How to personalize your Google Chrome homepage with GIF</p>
              </div>
            </div>
            <div className="GadgetBlog_colums">
              <div className="GadgetBlog_colums_img">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/posts/thumbnail-02.webp?imwidth=256"
                  alt="Gadget Blog"
                />
              </div>
              <div className="GadgetBlog_colums_txt">
                <h2>Design</h2>
                <p>
                  These 5 tips will help you nail your next design presentation.
                </p>
              </div>
            </div>
            <div className="GadgetBlog_colums">
              <div className="GadgetBlog_colums_img">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/post-single/post-single-01.webp?imwidth=256"
                  alt="Gadget Blog"
                />
              </div>
              <div className="GadgetBlog_colums_txt">
                <h2>Design</h2>
                <p>The underrated design book that transformed the</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="GadgetBlog_bigside">
              <div className="GadgetBlog_bigsideimg">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/posts/thumbnail-01.webp?imwidth=1920"
                  alt=""
                />
                <div className="GadgetBlog_bigsidetxt">
                  <h2>Design</h2>
                  <p>
                    i4 types of research methods all designers <br />
                    should know
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DesignBlog;
