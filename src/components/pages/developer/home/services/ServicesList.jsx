import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import CardsService from "../../../../partials/CardsService";

const ServicesList = ({
  isLoading,
  isFetching,
  error,
  dataServices,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {dataServices?.data?.map((item, key) => {
          return (
            <div key={key} className="relative">
              <div className="flex absolute top-5 right-3">
                <button
                  type="button"
                  data-tooltip="Edit"
                  className="tooltip text-white "
                  onClick={() => handleEdit(item)}
                >
                  <FaPencil className="p-1 bg-primary rounded-full" />
                </button>
                <button
                  type="button"
                  data-tooltip="Delete"
                  className="tooltip text-red-600 "
                  onClick={() => handleDelete(item)}
                >
                  <FaTrash className="p-1 bg-primary rounded-full" />
                </button>
              </div>
              <CardsService item={item} />
            </div>
          );
        })}
        {/* <CardsService
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
            />*/}
      </div>
    </>
  );
};

export default ServicesList;
