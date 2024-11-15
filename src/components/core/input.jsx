import React from "react";
import TextField from "@mui/material/TextField";

const CustomInput = ({
  size,
  id,
  name,
  label,
  formikProps,
  type,
  placeholder,
  disabled,onInput
}) => {
  return (
    <div
      className={`form-floatng ${formikProps.errors[name] ? "has-error" : ""}`}
    >
      <TextField
      onInput={onInput}
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : ""}
        id={id}
        name={name}
        label={label}
        variant="outlined"
        fullWidth
        value={formikProps.values[name]}
        onChange={formikProps.handleChange}
        onBlur={formikProps.handleBlur}
        error={formikProps.touched[name] && Boolean(formikProps.errors[name])}
        helperText={
          formikProps.touched.vehicle_category &&
          formikProps.errors.vehicle_category
        }
        margin="normal"
        size={size ? "small" : "medium"}
        disabled={disabled ? disabled : false}
      />
    </div>
  );
};

export default CustomInput;
