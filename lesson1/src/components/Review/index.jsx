import React from "react";
import ReviewLink from "./reviewlinks";
import "./style.css";

const Review = () => {
  const StoryElement = [
    {
      id: 1,
      name: "Design",
      url: "/Design",
    },
    {
      id: 2,
      name: "Branding",
      url: "/Branding",
    },
    {
      id: 3,
      name: "SEO",
      url: "/SEO",
    },
    {
      id: 4,
      name: "Research",
      url: "/Research",
    },
  ];

  return (
 <section className="ReviewContainer">
       <div className="container">
      <div className="row">
      <div className="ReviewHead">
            <h2>Review</h2>
          </div>
        <div className="col-lg-6">
        
          <div className="Reviewlinkslist">
            <ReviewLink ReviewItem={StoryElement} />
          </div>
        </div>
      </div>
      

    </div>
 </section>
  );
};

export default Review;
