import React from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import CustomInput from "../../core/input";
import CustomImageInput from "../../core/CustomImageInput"; // Assuming this handles image uploads
import { addAPI, editAPI } from "../../../service/api";
import toast from "react-hot-toast";
import { convertFileToBase64, isBase64 } from "../../core/fileUtils";

const MyForm = ({ edit, AllData, handleClose, onGridReady }) => {
  const initialValues = {
    image: edit && AllData.image ? AllData.image : "",
    title: edit && AllData.title ? AllData.title : "",
    price: edit && AllData.price ? AllData.price : "",
    description: edit && AllData.description ? AllData.description : "",
  };

  const submitHandler = async (values) => {
    let imageBase64 = "";
    if (values.image) {
      imageBase64 = isBase64(values.image)
        ? values.image
        : await convertFileToBase64(values.image);
    }

    const data = {
      ...values,
      image: imageBase64,
    };

    if (edit) {
      editAPI(`newProduct/${AllData._id}`, data)
        .then(() => {
          toast.success("Successfully edited!");
          onGridReady();
          handleClose();
        })
        .catch(() => toast.error("Something went wrong."));
    } else {
      addAPI("newProduct", data)
        .then(() => {
          toast.success("Successfully Added!");
          handleClose();
          onGridReady();
        })
        .catch(() => toast.error("Image file size is too large."));
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: submitHandler,
    validate: (values) => {
      const errors = {};
      if (!values.title) errors.title = "Title is required";
      if (!values.price) errors.price = "Price is required";
      if (!values.description) errors.description = "Description is required";
      if (!values.image) errors.image = "Image is required";
      return errors;
    },
  });

  return (
    <div className="p-5">
      <form onSubmit={formik.handleSubmit}>
        <CustomImageInput
          id="image"
          name="image"
          label="Upload Image"
          formikProps={formik} // Pass formikProps here
          required
        />
        <CustomInput
          id="title"
          name="title"
          label="Title"
          formikProps={formik}
          required
        />
        <CustomInput
          id="price"
          name="price"
          label="Price"
          formikProps={formik}
          required
        />
        <CustomInput
          id="description"
          name="description"
          label="Description"
          formikProps={formik}
          required
        />
        <div className="flex justify-center w-full">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              background: "green",
              marginTop: "6px",
              width: "140px",
              margin: "0 auto",
            }}
          >
            {edit ? "Edit" : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
