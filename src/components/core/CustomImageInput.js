import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";

const CustomImageInput = ({ label, formikProps, ...props }) => {
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        formikProps.setFieldValue(props.name, file); // Use formikProps to set field value
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        error={formikProps.touched[props.name] && Boolean(formikProps.errors[props.name])}
        helperText={formikProps.touched[props.name] && formikProps.errors[props.name] ? formikProps.errors[props.name] : ""}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  style={{ width: 50, height: 50, objectFit: "cover" }}
                />
              ) : (
                <span>📷</span>
              )}
            </InputAdornment>
          ),
        }}
        type="file"
        inputProps={{ accept: "image/*" }}
        onChange={handleImageChange}
        {...props} // Spread other props
      />
      {imagePreview && (
        <div style={{ marginTop: "8px", textAlign: "center" }}>
          <img
            src={imagePreview}
            alt="Image Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CustomImageInput;
