import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const ContactList = ({
  isLoading,
  isFetching,
  error,
  dataContact,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {dataContact?.data?.map((item, key) => {
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactList;
