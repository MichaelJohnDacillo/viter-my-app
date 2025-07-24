import React from "react";
import ModalWrapper from "../../../../partials/modal/ModalWrapper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../custom-hooks/queryData";
import { FaTimes } from "react-icons/fa";
import { Form, Formik } from "formik";
import { InputText, InputTextArea } from "../../../../helpers/FormInput";
import * as Yup from "yup";
import { apiVersion } from "../../../../helpers/function-general";

const ModalAddHeader = ({ setIsModal }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `${apiVersion}/controllers/developer/header/header.php`,
        "post",
        values
      ),
    onSuccess: (data) => {
      // queryClient.invalidateQueries(""); // give id for refetching data.

      // if (!data.success) {
      //   window.prompt(`Successfully created.`);
      //   setIsModal(false);
      // }

      if (data.success) {
        alert("Successfully Created");
      } else {
        alert(data.error);
      }
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return; // don't close while query is ongoing
    setAnimate("translate-x-full");
    setTimeout(() => {
      setIsModal(false); //close upon animation exit
    }, 200);
  };

  const initVal = {
    header_name: "",
    header_link: "",
  };

  const yupSchema = Yup.object({
    header_name: Yup.string().required("required"),
    header_link: Yup.string().required("required"),
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <ModalWrapper className={`${animate}`} handleClose={handleClose}>
      <div className="modal_header relative mb-4">
        <h3 className="text-sm">Add Header</h3>
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
          }}
        >
          {(props) => {
            return (
              <Form>
                {/* FORMS */}
                <div className="modal-overflow ">
                  <div className="relative mt-5 mb-6">
                    <InputText
                      label="Name"
                      name="header_name"
                      type="text"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="relative mt-5 mb-6">
                    <InputText
                      label="Link"
                      name="header_link"
                      type="text"
                      disabled={mutation.isPending}
                    />
                  </div>
                  {/* <div className="relative mt-5 mb-6">
                    <InputText
                      label="Url"
                      name="header_url"
                      type="text"
                      disabled={mutation.isPending}
                    />
                  </div> */}
                </div>
                {/* ACTIONS */}
                <div className="modal_action flex justify-end absolute w-full bottom-0 mt-6 mb-4 gap-2 left-0 px-6">
                  <button type="submit" className="btn-modal-submit">
                    {mutation.isPending ? "Loading..." : "Add"}
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

export default ModalAddHeader;
