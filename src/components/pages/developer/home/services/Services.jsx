import React, { use } from "react";
import CardsService from "../../../../partials/CardsService";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import { FaList, FaPlus, FaTable, FaTrash } from "react-icons/fa";
import ModalAddServices from "./ModalAddServices";
import { FaPencil } from "react-icons/fa6";
import ModalDeleteServices from "./ModalDeleteServices";
import ServicesList from "./ServicesList";
import ServicesTable from "./ServicesTable";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../../custom-hooks/queryDataInfinite";
import { InView, useInView } from "react-intersection-observer";

const Services = () => {
  const [isModalServices, setIsModalServices] = React.useState(false);
  const [isDeleteServices, setIsDeleteServices] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();
  const [isTable, setIsTable] = React.useState(false);

  const [page, setPage] = React.useState(1);
  const { ref, InView } = useInView();

  // const {
  //   isLoading,
  //   isFetching: isFetchingDataServices,
  //   error: ErrorDataServices,
  //   data: dataServices,
  // } = useQueryData(
  //   `${apiVersion}/controllers/developer/web-services/web-services.php`,
  //   "get",
  //   "web-services"
  // );

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["web-services"],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        ``,
        `${apiVersion}/controllers/developer/web-services/page.php?start=${pageParam}`, // loadmore or pagination
        false,
        {},
        "post"
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
  });

  React.useEffect(() => {
    if (InView) {
      fetchNextPage();
      setPage((prev) => prev + 1);
    }
  }, [InView]);

  const handleToggleTable = () => {
    setIsTable(!isTable);
  };

  const handleAdd = () => {
    setItemEdit(null);
    setIsModalServices(true);
  };

  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModalServices(true);
  };

  const handleDelete = (item) => {
    setItemEdit(item);
    setIsDeleteServices(true);
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
            </div>
          </div>

          {/* 3-column Grid */}

          {isTable == true ? (
            <>
              <ServicesTable
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                result={result}
                error={error}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
                isFetching={isFetching}
                isFetchingNextPage={isFetchingNextPage}
                status={status}
                setPage={setPage}
                page={page}
                ref={ref}
              />
            </>
          ) : (
            <ServicesList
              handleAdd={handleAdd}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              result={result}
              error={error}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
              isFetching={isFetching}
              isFetchingNextPage={isFetchingNextPage}
              status={status}
            />
          )}
        </div>
      </section>

      {isModalServices && (
        <ModalAddServices setIsModal={setIsModalServices} itemEdit={itemEdit} />
      )}
      {isDeleteServices && (
        <ModalDeleteServices
          setModalDelete={setIsDeleteServices}
          mySqlEndpoint={`${apiVersion}/controllers/developer/web-services/web-services.php?id=${itemEdit.web_services_aid}`}
          queryKey="web-services"
        />
      )}
    </>
  );
};

export default Services;
