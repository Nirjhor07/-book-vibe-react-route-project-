import React from "react";
import BannerImage from "../../assets/pngwing 1.png";
const HomeBanner = () => {
  return (
    <div className="hero bg-base-200 container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between px-4">
        <img src={BannerImage} />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn btn-success mt-10">view the list</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
