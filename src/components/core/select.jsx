import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
const CustomSelect = ({
  id,
  name,
  label,
  options,
  formikProps,
  size,
  value,
  disabled,
}) => (
  <div className={` ${formikProps.errors[name] ? "has-error" : ""}`}>
    <FormControl
      sx={{ m: 1, minWidth: 120, width: "100%", margin: "5px 0px 0px 0px" }}
      size={size ? size : "medium"}
    >
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        disabled={disabled && disabled}
        labelId="demo-simple-select-helper-label"
        id={id}
        name={name}
        label={label}
        variant="outlined"
        fullWidth
        defaultValue={"sample"}
        value={formikProps.values[name] || ""}
        onChange={formikProps.handleChange}
        onBlur={formikProps.handleBlur}
        error={formikProps.touched[name] && Boolean(formikProps.errors[name])}
      >
        <MenuItem value="" disabled>
          {` ${label.toLowerCase()}`}
        </MenuItem>
        {value && (
          <MenuItem value={value} defaultValue={value}>
            {value}
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            className={`hidden`}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {formikProps.touched[name] && Boolean(formikProps.errors[name]) && (
        <FormHelperText>{formikProps.touched[name]}</FormHelperText>
      )}
    </FormControl>
  </div>
);
export default CustomSelect;
