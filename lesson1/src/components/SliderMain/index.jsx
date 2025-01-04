import React from "react";
import StoryLinks from "./Storylinks";
import "./style.css";

const TopStories = () => {
  const StoryElement = [
    {
      id: 1,
      name: "Gadget",
      url: "/Gadget",
    },
    {
      id: 2,
      name: "Technology",
      url: "/Technology",
    },
    {
      id: 3,
      name: "Design",
      url: "/Design",
    },
    {
      id: 4,
      name: "Products",
      url: "/Products",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="TopStoriesHead">
            <h2>Top Stories</h2>
          </div>
          <div className="TopStoriesList">
            <StoryLinks StoryItem={StoryElement} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStories;

