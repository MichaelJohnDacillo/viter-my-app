import React from "react";

const About = () => {
  return (
    <>
      {/* About */}
      <section id="about" className="bg-white py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <img
              className="rounded-xl shadow-lg object-cover"
              src="../images/about-home.webp"
              alt="This is 2 people working together."
            />
            <div>
              <h2 className="title">About Our Company</h2>
              <p className="mb-6">
                Founded in 2025, we help business transform their ideas into
                reality through uctting-edge technology and expert consulting
                services. Our team 0f 50+ professionals delivers measurable
                results.
              </p>
              <ul className="flex mb-4">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </li>
                <li>
                  <p className="ml-3">10+ years combined industry experience</p>
                </li>
              </ul>
              <ul className="flex mb-4">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </li>
                <li>
                  <p className="ml-3">50+ successuful projects delivered</p>
                </li>
              </ul>
              <ul className="flex mb-8">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </li>
                <li>
                  <p className="ml-3">
                    Client-focus approach with 24/7 support
                  </p>
                </li>
              </ul>
              <button className="btn btn--blue">Learn more About Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
