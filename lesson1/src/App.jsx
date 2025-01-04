import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Galaxiescosmos from "./components/Galaxies";
import TopStories from "./components/SliderMain";
import GadgetBlog from "./components/blogs/GadgetBlogs";
import TechnologyBlog from "./components/blogs/Tecnology";
import ProductBlog from "./components/blogs/Products";
import DesignBlog from "./components/blogs/Design";
import Blogar from "./components/Blogar"
import Review from "./components/Review"
import DesignBlogsForReview from "./components/ReviewBlogs/DesignBlogsForReview"
import BrandingBlogsForReview from "./components/ReviewBlogs/BrandingForReview"
import SeoBlogsForReview from "./components/ReviewBlogs/SeoForReview"
import ResearchBlogsForReview from "./components/ReviewBlogs/Research"




function App() {
  return (
    <Router>
      <Layout>
        <Galaxiescosmos />
        <TopStories />
        <Routes>
          <Route path="/Gadget" element={<GadgetBlog />} />
          <Route path="/Technology" element={<TechnologyBlog />} />
          <Route path="/Design" element={<DesignBlog />} />
          <Route path="/Product" element={<ProductBlog />} />
        </Routes>
        <Blogar/>
        <Review/>
        <Routes>
          <Route path="/Design" element={<DesignBlogsForReview/>}  />
          <Route path="/Branding" element={<BrandingBlogsForReview/>} />
          <Route path="/Seo"  element={<SeoBlogsForReview/>}/>
          <Route path="/Research" element={<ResearchBlogsForReview/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
