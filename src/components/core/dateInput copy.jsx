import React from "react";
import { DatePicker } from "@mui/lab";

const FormikDatePicker = ({ formik, name, label, ...rest }) => {
  const { values, setFieldValue, errors, touched } = formik;

  const showError = touched[name] && errors[name];

  const handleChange = (date) => {
    setFieldValue(name, date, true);
  };

  return (
    <DatePicker
      label={label}
      inputFormat="dd/MM/yyyy"
      value={values[name] ? values[name] : null}
      onChange={handleChange}
    />
   
  );
};

export default FormikDatePicker;
