import React from "react";
import { Link } from "react-router-dom";

const TrendingJubbah = () => {

  const productId = "12345"; // 👈 replace with dynamic id later

  return (
    <section className="bg-brand-secondary py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-brand-primary tracking-wide">
            Trending <span className="text-brand-accent">Jubbah</span>
          </h2>

          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>

          <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
            Royal Omani style crafted with elegance and comfort.
          </p>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ================= IMAGE CARD ================= */}
          <Link
            to={`/`}
            className="group relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl bg-black order-2 lg:order-2"
          >
            <img
              src="./src/assets/trending.png"
              alt="Trending Jubbah"
              className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90"></div>

            {/* Product Details */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-semibold">Royal Brown Omani Jubbah</p>
              <p className="text-brand-accent font-medium mt-1">₹ 550</p>
              <p className="text-sm mt-1">Size: 10 Years</p>
            </div>

            {/* Gold Badge */}
            <div className="absolute top-6 left-6 bg-brand-accent text-white text-xs px-3 py-1 rounded-full shadow">
              TRENDING
            </div>
          </Link>


          {/* ================= VIDEO CARD ================= */}
          <Link
            to={`/`}
            className="group relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl bg-black order-1 lg:order-2"
          >
            <video
              src="./src/assets/vid.mp4"
              muted
              autoPlay
              loop
              className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90"></div>

            {/* Play Text */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-semibold">Watch Product Preview</p>
              <p className="text-brand-accent text-sm mt-1">
                See Fabric & Stitching Quality
              </p>
            </div>

            {/* Hover Indicator */}
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-3 py-1 text-white text-xs rounded-full">
              Click to View
            </div>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default TrendingJubbah;