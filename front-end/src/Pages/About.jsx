/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets.js'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
  <div className="bg-brand-secondary">

    {/* ================= ABOUT HEADER ================= */}
    <section className="py-20 border-t">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-brand-primary">
            About <span className="text-brand-accent">Us</span>
          </h2>

          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">

          {/* Image */}
          <div className="flex-1">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
              <img
                src="/src/assets/about.png"
                alt="About Jubbah House"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-gray-700 space-y-6 leading-relaxed">

            <p>
              At Jubbah House, we blend tradition with modern elegance.
              Our premium Omani and Arabic jubbahs are crafted with
              high-quality fabrics and refined tailoring.
            </p>

            <p>
              We believe modest fashion should reflect dignity,
              confidence, and timeless style. Every design is carefully
              selected to ensure comfort and sophistication.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-3">
                Our Mission
              </h3>
              <div className="w-16 h-1 bg-brand-accent mb-4"></div>

              <p>
                To provide premium Islamic wear that represents culture,
                quality, and elegance — delivering excellence in every stitch.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>


    {/* ================= WHY CHOOSE US ================= */}
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-brand-primary">
            Why <span className="text-brand-accent">Choose Us</span>
          </h2>

          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-md p-10 hover:shadow-xl transition duration-300">
            <h4 className="text-lg font-semibold text-brand-primary mb-4">
              Premium Quality
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use high-grade fabrics and refined stitching techniques
              to ensure durability and luxury in every product.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-md p-10 hover:shadow-xl transition duration-300">
            <h4 className="text-lg font-semibold text-brand-primary mb-4">
              Elegant Designs
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our designs combine traditional Omani and Arabic styles
              with modern tailoring for a sophisticated look.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-md p-10 hover:shadow-xl transition duration-300">
            <h4 className="text-lg font-semibold text-brand-primary mb-4">
              Customer Satisfaction
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We prioritize your experience with easy returns,
              secure payments, and dedicated support.
            </p>
          </div>

        </div>

      </div>

    </section>

  </div>
)
}

export default About