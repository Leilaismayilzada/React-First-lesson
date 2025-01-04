import React from "react";
import "./style.css";

const ProductBlog = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="GadgetBlog_colums">
              <div className="GadgetBlog_colums_img">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/posts/post-tect-04.webp?imwidth=256"
                  alt="Gadget Blog"
                />
              </div>
              <div className="GadgetBlog_colums_txt">
                <h2>Products</h2>
                <p>The Morning After Uber sets its sights on Postmates</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="GadgetBlog_bigside">
              <div className="GadgetBlog_bigsideimg">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/posts/post-tech-09.webp?imwidth=1920"
                  alt=""
                />
                <div className="GadgetBlog_bigsidetxt">
                  <h2>Products</h2>
                  <p>The best accessories for your new iPad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductBlog;
