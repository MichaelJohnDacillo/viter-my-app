import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import CardsTestimony from "../../../../partials/CardsTestimony";
//TABLE STEP 4
const TestimonialsList = ({
  isLoading,
  isFetching,
  error,
  dataTestimonials,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const prevTestimonialCountRef = React.useRef(0);

  React.useEffect(() => {
    const testimonialCount = dataTestimonials?.data?.length ?? 0;
    const prevTestimonialCount = prevTestimonialCountRef.current;

    if (testimonialCount === 0) {
      setCurrentSlide(0);
    } else if (currentSlide >= testimonialCount) {
      setCurrentSlide(testimonialCount - 1); // Adjust if current slide is out of bounds
    } else if (testimonialCount > prevTestimonialCount) {
      setCurrentSlide(testimonialCount - 1);
    }
    

    prevTestimonialCountRef.current = testimonialCount;
  }, [dataTestimonials?.data?.length]); // Only re-run when dataTestimonials.data changes
  return (
    <>
      {/* TABLE STEP 5 */}
      {/* Testimonial Slider */}
      <div className="relative max-w-4xl mx-auto">
        {/* Slides */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {dataTestimonials?.data.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  {/* UPDATE STEP 1 */}
                  <div className="relative">
                    <div className="absolute flex sm:left-[20.7rem] md:left-[28.8rem] lg:left-[44.75rem] xl:left-[52.75rem] top-0">
                      <button
                        type="button"
                        data-tooltip="Edit"
                        className="tooltip text-white "
                        // UPDATE STEP 3
                        onClick={() => handleEdit(item)}
                      >
                        <FaPencil className="p-1 bg-primary rounded-full" />
                      </button>
                      {/* DELETE STEP 3 -> ModalDeleteTestimonials.jsx */}
                      <button
                        type="button"
                        data-tooltip="Delete"
                        className="tooltip text-red-600 "
                        onClick={() => handleDelete(item)}
                      >
                        <FaTrash className="p-1 bg-primary rounded-full" />
                      </button>
                    </div>
                  </div>
                  <CardsTestimony item={item} />
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            // setCurrentSlide((prev) => (prev === 0 ? 5 : prev - 1))
            setCurrentSlide((prev) =>
              prev == 0 ? dataTestimonials.count - 1 : prev - 1
            )
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <HiOutlineChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={() =>
            // setCurrentSlide((prev) => (prev === 0 ? 5 : prev + 1))
            setCurrentSlide((prev) =>
              prev == dataTestimonials.count - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <HiOutlineChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {/* {[0, 1, 2].map((index) => ( */}
          {dataTestimonials?.data.map((item, index) => (
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
    </>
  );
};

export default TestimonialsList;
