import React from "react";
import "./style.css";

const TechnologyBlog = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="GadgetBlog_colums">
              <div className="GadgetBlog_colums_img">
                <img
                  src="	https://new.axilthemes.com/demo/react/blogar/images/posts/post-dark-01.webp?imwidth=256"
                  alt="Gadget Blog"
                />
              </div>
              <div className="GadgetBlog_colums_txt">
                <h2>Technology</h2>
                <p>Security isn’t just a technology problem it’s about design, too</p>
              </div>
            </div>
            <div className="GadgetBlog_colums">
              <div className="GadgetBlog_colums_img">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/posts/thumbnail-10.webp?imwidth=256"
                  alt="Gadget Blog"
                />
              </div>
              <div className="GadgetBlog_colums_txt">
                <h2>Technology</h2>
                <p>Flutter: the good, the bad and the ugly.</p>
              </div>
            </div>
        
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="GadgetBlog_bigside">
<div className="GadgetBlog_bigsideimg">
    <img src="https://new.axilthemes.com/demo/react/blogar/images/posts/post-tect-03.webp?imwidth=1920" alt="" />
    <div className="GadgetBlog_bigsidetxt">
        <h2>Gadget</h2>
        <p>Virtual Reality or Artificial Intelligence <br /> Technology</p>
    </div>

</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TechnologyBlog;
