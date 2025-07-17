import React from "react";
import CardsService from "../../../../partials/CardsService";

const Services = () => {
  return (
    <>
      {/* Services */}
      <section id="services" className="bg-gray-50 py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="title">Our Web Services</h2>
            <p>
              Professionals solutions tailored to boost your online presence
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <CardsService
              image={"./images/card-icon-web-development.webp"}
              alt={"Web Development Image"}
              title={"Web Development"}
              details={
                "Custom Websites built with modern frameworks like Next.js and Reacat for optimal performance."
              }
              more={"View Packages"}
            />

            <CardsService
              image={"./images/card-icon-ui-ux-design.webp"}
              alt={"UI/UX Design"}
              title={"UI/UX Design"}
              details={
                "Beautiful interfaces designed to convert visitors with strategic user experience flow."
              }
              more={"See Portfolio"}
            />

            <CardsService
              image={"./images/card-icon-seo-optimization.webp"}
              alt={"SEO optimization image"}
              title={"SEO Optimization"}
              details={
                "Increase your visibility on search engines with our data-driven SEO strategies."
              }
              more={"Get Audit"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
