import React from "react";
import ModalWrapper from "../../../../partials/modal/ModalWrapper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../custom-hooks/queryData";
import { FaTimes } from "react-icons/fa";
import { Form, Formik } from "formik";
import { InputText, InputTextArea } from "../../../../helpers/FormInput";
import * as Yup from "yup";
import { apiVersion } from "../../../../helpers/function-general";

const ModalAddContact = ({ setIsModal, itemEdit }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/controllers/developer/contact/contact.php?id=${itemEdit.contact_aid}`
          : `${apiVersion}/controllers/developer/contact/contact.php`,
        itemEdit
          ? "PUT" //UPDATE
          : "post", //CREATE
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contact"] }); // give id for refetching data.

      if (data.success) {
        alert("Successfully Created");
        setIsModal(false);
      } else {
        alert(data.error);
      }
      // give

      // if (data.success) {
      //   alert("Successfully Created");
      // } else {
      //   alert(data.error);
      // }
    },
    // onSuccess: (data) => {
    //   // validate reading
    //   queryClient.invalidateQueries(""); // give id for refetching data.

    //   if (!data.success) {
    //     window.prompt(`Successfully created.`);
    //     setIsModal(false);
    //   }
    // },
  });

  const handleClose = () => {
    if (mutation.isPending) return; // don't close while query is ongoing
    setAnimate("translate-x-full");
    setTimeout(() => {
      setIsModal(false); //close upon animation exit
    }, 200);
  };

  const initVal = {
    contact_fullname: itemEdit ? itemEdit.contact_fullname : "",
    contact_email: itemEdit ? itemEdit.contact_email : "",
    contact_message: itemEdit ? itemEdit.contact_message : "",

    contact_email_old: itemEdit ? itemEdit.contact_email : "",
  };

  const yupSchema = Yup.object({
    contact_fullname: Yup.string().required("required"),
    contact_email: Yup.string().required("required"),
    contact_message: Yup.string().required("required"),
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <ModalWrapper className={`${animate}`} handleClose={handleClose}>
      <div className="modal_header relative mb-4">
        <h3 className="text-sm">{itemEdit ? "Edit" : "Add"} Contact</h3>
        <button
          type="button"
          className="absolute top-0.5 right-0"
          onClick={handleClose}
        >
          <FaTimes className="size-4" />
        </button>
      </div>
      <div className="modal_body overflow-y-auto overflow-x-hidden max-h-[calc(100dvh-40px)]">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            console.log(values);
            mutation.mutate(values);
            resetForm();
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="modal-overflow ">
                  <div className="relative mt-3">
                    <InputText
                      label="Full Name"
                      name="contact_fullname"
                      type="text"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="relative mt-3">
                    <InputTextArea
                      label="Email Address"
                      name="contact_email"
                      type="text"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="relative mt-3">
                    <InputText
                      label="Message"
                      name="contact_message"
                      type="text"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className="modal_action flex justify-end absolute w-full bottom-0 mt-6 mb-4 gap-2 left-0 px-6">
                  <button type="submit" className="btn-modal-submit">
                    {mutation.isPending
                      ? "Loading..."
                      : itemEdit
                      ? "Save"
                      : "Add"}
                  </button>
                  <button
                    type="reset"
                    disabled={mutation.isPending}
                    className="btn-modal-cancel"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddContact;
