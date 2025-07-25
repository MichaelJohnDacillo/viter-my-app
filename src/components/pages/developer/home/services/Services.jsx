import React, { use } from "react";
import CardsService from "../../../../partials/CardsService";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import { FaPlus } from "react-icons/fa";
import ModalAddServices from "./ModalAddServices";
import { FaPencil } from "react-icons/fa6";

const Services = () => {
  const [isModalServices, setIsModalServices] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();
  const {
    isLoading,
    isFetching,
    error,
    data: dataServices,
  } = useQueryData(
    `${apiVersion}/controllers/developer/web-services/web-services.php`,
    "get",
    "web-services"
  );

  const handleAdd = () => {
    setItemEdit(null);
    setIsModalServices(true);
  };

  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModalServices(true);
  };

  return (
    <>
      {/* Services */}
      <section id="services" className="bg-gray-50 py-12 md:py-20">
        <div className="container">
          <div className="relative w-full">
            <div className="text-center mb-12">
              <h2 className="title">Our Web Services</h2>
              <p>
                Professional solutions tailored to boost your online presence
              </p>
            </div>
            <div className="absolute right-0 top-1/3">
              <div className="flex items-center gap-x-3">
                <button
                  className="flex items-center gap-2 hover:underline hover:text-primary"
                  type="button"
                  onClick={handleAdd}
                >
                  <FaPlus className="size-3" />
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {dataServices?.data?.map((item, key) => {
              return (
                <div key={key} className="relative">
                  <div className="absolute top-5 right-3">
                    <button
                      type="button"
                      data-tooltip="Edit"
                      className="tooltip text-white "
                      onClick={() => handleEdit(item)}
                    >
                      <FaPencil className="p-1 bg-primary rounded-full" />
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
        </div>
      </section>

      {isModalServices && (
        <ModalAddServices setIsModal={setIsModalServices} itemEdit={itemEdit} />
      )}
    </>
  );
};

export default Services;
