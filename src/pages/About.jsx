import React from "react";

function About() {
  return (
    <div className="site-container">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-5">About Us</h1>
        <p className="text-lg leading-7">
          Welcome to MyStore! We are committed to providing the best products
          and services to our customers. Our team works tirelessly to bring you
          the latest and greatest in the market. Thank you for choosing us!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around py-10">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-7">
            To provide top-quality products and exceptional customer service. We
            strive to be the market leader by continuously innovating and
            improving our offerings.
          </p>
        </div>
        <div className="max-w-md mt-10 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg leading-7">
            To create a shopping experience that is convenient, enjoyable, and
            satisfying for all our customers. We envision a future where MyStore
            is synonymous with quality and trust.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
