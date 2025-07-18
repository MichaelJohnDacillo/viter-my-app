import React from "react";
import CardsTestimony from "../../../../partials/CardsTestimony";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  return (
    <>
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Testimonials
          </h2>

          {/* Testimonials Slider */}
          <div className="relative max-w-4xl mx-auto">
            {/* slides */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 eaase-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Testimonial 1 */}
                <CardsTestimony
                  image={"./images/testimonials-1.webp"}
                  alt={"Sarah Johnson"}
                  testimony={
                    "The team delivered our project ahead of schedule with exceptional quality. Our online sales increased by 120% within three months!"
                  }
                  name={"Sarah Johnson"}
                  position={"Marketing Director"}
                />

                {/* Testimonial 2 */}
                <CardsTestimony
                  image={"./images/testimonials-2.webp"}
                  alt={"Michael Chen"}
                  testimony={
                    "From design to deployment, their attention to detail was impressive. They became true partners in our digital transformation journey."
                  }
                  name={"Michael Chen"}
                  position={"CEO, StartupHub"}
                />

                {/* Testimonial 3 */}
                <CardsTestimony
                  image={"./images/testimonials-3.webp"}
                  alt={"Emma Rodriguez"}
                  testimony={
                    "Their SEO strategy tripled our organic traffic in 6 months. We've seen a dramatic improvement in lead quality and conversion rates."
                  }
                  name={"Emma Rodriguez"}
                  position={"CMO, GrowthSolutions"}
                />
              </div>
            </div>

           {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev == 0 ? 2 : prev - 1))
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <HiOutlineChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev == 2 ? 0 : prev + 1))
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <HiOutlineChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section id="testimonials" class="bg-gray-50 py-12 md:py-20">
        <div class="container">
          <h2 class="title text-center">Client Testimonials</h2>
          <div class="max-w-3xl mx-auto">
            <div class="testimonialsSlider">
              <div class="testimonialsItem">
                <img
                  src="../images/testimonials-1.webp"
                  alt="Sarah Johnson Image"
                />
                <p>
                  "The team delivered our project ahead of schedule with
                  exeptional quality. Our online sales increased by 120% within
                  three months!"
                </p>
                <h6>Sarah Johnson</h6>
                <small>Marketing Director, TechCorp</small>
              </div>

              <div class="testimonialsItem">
                <img
                  src="../images/testimonials-2.webp"
                  alt="Michael Chen Image"
                />
                <p>
                  "From design to deployment their attention to detail was
                  impressive. They become true parters in our digital
                  transformation journey."
                </p>
                <h6>Michael Chen</h6>
                <small>CEO, StartupHub</small>
              </div>
              <div class="testimonialsItem">
                <img
                  src="../images/testimonials-3.webp"
                  alt="Emma Rodriguez Image"
                />
                <p>
                  "Their SEO strategy tripled our organic traffic in 6 months.
                  We've seen a dramatic improvement in lead quality and
                  conversion rates."
                </p>
                <h6>Emma Rodriguez</h6>
                <small>CMO, Growth Solutions</small>
              </div>
            </div>
            <div id="controls" class="relative">
              <a class="prev">
                <div class="absolute bottom-40 -left-5 transform -translate-y-1/2 z-30">
                  <button class="bg-white shadow-md size-10 rounded-full flex items-center justify-center text-2xl text-black/90 hover:text-black/80">
                    &lt;
                  </button>
                </div>
              </a>
              <a class="next">
                <div class="absolute bottom-40 -right-5 transform -translate-y-1/2 z-30">
                  <button class="bg-white shadow-md size-10 rounded-full flex items-center justify-center text-2xl text-black/90 hover:text-black/80">
                    &gt;
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div class="tns-nav"></div>
        </div>
      </section> */}
    </>
  );
};

export default Testimonials;
