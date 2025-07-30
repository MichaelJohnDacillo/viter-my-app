import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import ModalAddContact from "./ModalAddContact";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import ModalDeleteContact from "./ModalDeleteContact";

const ContactTable = () => {
  const [isModalContact, setIsModalContact] = React.useState(false);
  const [isDeleteContact, setIsDeleteContact] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();
  const [isTable, setIsTable] = React.useState(false);

  const {
    isLoading,
    isFetching,
    error,
    data: dataContact,
  } = useQueryData(
    `${apiVersion}/controllers/developer/contact/contact.php`,
    "get",
    "contact"
  );

  console.log(isTable);

  const handleToggleTable = () => {
    setIsTable(!isTable);
  };

  const handleAdd = () => {
    setItemEdit(null);
    setIsModalContact(true);
  };

  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModalContact(true);
  };

  const handleDelete = (item) => {
    setItemEdit(item);
    setIsDeleteContact(true);
  };
  return (
    <>
      <div>
        <div className="flex justify-end">
          <button
            className="flex items-center gap-2 hover:underline hover:text-primary"
            type="button"
            onClick={handleAdd} //step 2 in update
          >
            <FaPlus className="size-3" />
            Add
          </button>
        </div>
        <table>
          <thead>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th className="flex justify-end">Action</th>
          </thead>
          <tbody>
            {dataContact?.data?.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.contact_fullname}</td>
                  <td>{item.contact_email}</td>
                  <td>{item.contact_message}</td>
                  <td>
                    <div className="flex items-center justify-end gap-x-3">
                      <button
                        type="button"
                        data-tooltip="Edit"
                        className="tooltip"
                        onClick={() => handleEdit(item)}
                      >
                        <FaPencil className="size-4" />
                      </button>
                      <button
                        type="button"
                        data-tooltip="Delete"
                        className="tooltip"
                        onClick={() => handleDelete(item)}
                      >
                        <FaTrash className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {isModalContact && (
        <ModalAddContact setIsModal={setIsModalContact} itemEdit={itemEdit} />
      )}
      {isDeleteContact && (
        <ModalDeleteContact
          setModalDelete={setIsDeleteContact}
          mySqlEndpoint={`${apiVersion}/controllers/developer/contact/contact.php?id=${itemEdit.contact_aid}`}
          queryKey="contact"
        />
      )}
    </>
  );
};

export default ContactTable;
