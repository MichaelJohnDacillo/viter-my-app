import React from "react";
import CardsTestimony from "../../../../partials/CardsTestimony";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiPencil,
} from "react-icons/hi";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import ModalAddTestimonials from "./ModalAddTestimonials";
import ModalDeleteTestimonials from "./ModalDeleteTestimonials";
import { FaList, FaPlus, FaTable } from "react-icons/fa";
import TestimonialsTable from "./TestimonialsTable";
import TestimonialsList from "./TestimonialsList";

const Testimonials = () => {
  // const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isModalTestimonials, setIsModalTestimonials] = React.useState(false);
  const [isDeleteTestimonials, setIsDeleteTestimonials] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();
  const [isTable, setIsTable] = React.useState(false);
  const {
    isLoading,
    isFetching,
    error,
    data: dataTestimonials,
  } = useQueryData(
    `${apiVersion}/controllers/developer/testimonials/testimonials.php`,
    "get",
    "testimonials"
  );

  console.log(isTable);

  const handleToggleTable = () => {
    setIsTable(!isTable);
  };

  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModalTestimonials(true);
  };

  const handleDelete = (item) => {
    setItemEdit(item);
    setIsDeleteTestimonials(true);
  };

  const handleAdd = () => {
    setItemEdit(null);
    setIsModalTestimonials(true);
  };
  return (
    <>
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Testimonials
          </h2>
          <div className="flex justify-end gap-2">
            {/* UI */}
            <button
              className="flex items-center gap-2 hover:underline hover:text-primary"
              type="button"
              onClick={handleToggleTable} //step 2 in update
            >
              {isTable == true ? (
                <>
                  <FaList className="size-3" />
                  List
                </>
              ) : (
                <>
                  <FaTable className="size-3" />
                  Table
                </>
              )}
            </button>
            <button
              className="flex items-center gap-2 hover:underline hover:text-primary"
              type="button"
              onClick={handleAdd} //step 2 in update
            >
              <FaPlus className="size-3" />
              Add
            </button>
          </div>
          {/* 3-column Grid */}

          {isTable == true ? (
            <>
              <TestimonialsTable
                isLoading={isLoading}
                isFetching={isFetching}
                error={error}
                dataTestimonials={dataTestimonials}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </>
          ) : (
            <TestimonialsList
              isLoading={isLoading}
              isFetching={isFetching}
              error={error}
              dataTestimonials={dataTestimonials}
              handleAdd={handleAdd}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}
        </div>
      </section>
      {isModalTestimonials && (
        <ModalAddTestimonials
          setIsModal={setIsModalTestimonials}
          itemEdit={itemEdit}
        />
      )}
      {isDeleteTestimonials && (
        <ModalDeleteTestimonials
          setModalDelete={setIsDeleteTestimonials}
          mySqlEndpoint={`${apiVersion}/controllers/developer/testimonials/testimonials.php?id=${itemEdit.testimonials_aid}`}
          queryKey="testimonials"
        />
      )}
    </>
  );
};

export default Testimonials;
