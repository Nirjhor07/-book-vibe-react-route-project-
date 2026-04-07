import React from "react";
import { Link } from "react-router";

const PageNotFound404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute w-72 h-72 bg-pink-400 opacity-30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-indigo-400 opacity-30 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Card */}
      <div className="card w-[90%] max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl text-center p-8 rounded-3xl">
        {/* Icon */}
        <div className="text-5xl mb-3 animate-bounce">🚫</div>

        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>

        {/* Badge */}
        <div className="badge badge-error mt-2 animate-pulse">Error</div>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-3 text-white">Page Not Found</h2>

        {/* Description */}
        <p className="text-base-200 mt-2">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3 items-center">
          <Link to="/">
            <button className="btn btn-primary btn-wide shadow-lg hover:scale-105 transition">
              ⬅ Back Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-sm text-white border-white hover:bg-white hover:text-black"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound404;
