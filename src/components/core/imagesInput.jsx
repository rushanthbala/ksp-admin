import React from "react";
import TextField from "@mui/material/TextField";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FileDownloadButton from "./dowloadbtn";

const CustomImageInput = ({
  size,
  id,
  name,
  label,
  formikProps,
  onChange,
  labelstyle,
  edit,
  picture,
  accept,
  multiple,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const simplePopoverId = open ? "simple-popover" : undefined;
  return (
    <>
      {!edit ? (
        <div
          className={`form-floatng ${
            formikProps.errors[name] ? "has-error" : ""
          } flex justify-center w-full`}
        >
          <div class="flex items-center justify-center w-full">
            <div
              style={labelstyle}
              for={id}
              class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  "
            >
              <div class="flex flex-col items-center justify-center pt-1 pb-1 ">
                <svg
                  style={{ width: "20px" }}
                  class="w-8 h-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                  <span class="font-semibold">{label}</span>
                </p>

                <div className="flex w-full justify-between ps-2 pe-2">
                  <label for={id}>
                    <p class="mb-2 text-sm text-gray-500 dark:text-black-400 btn">
                      Click to upload
                    </p>
                  </label>
                  <p
                    class="mb-2 text-sm text-black dark:text-black-400"
                    aria-describedby={simplePopoverId}
                    variant="contained"
                    onClick={handleClick}
                  >
                    open
                  </p>
                  <div>
                    {/* <Button
                      aria-describedby={simplePopoverId}
                      variant="contained"
                      onClick={handleClick}
                    >
                      Open Popover
                    </Button> */}
                    <Popover
                      id={simplePopoverId}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      {picture ? (
                        <div>
                          {!multiple ? (
                            <img
                              src={`data:image/png;base64,${picture}`}
                              alt={`${label || "document"}`}
                              className="w-full h-full object-cover"
                              style={{
                                borderRadius: "30px",
                                maxWidth: "100%",
                                maxHeight: "300px",
                              }}
                            />
                          ) : (
                            <div>
                              {picture &&
                              Array.isArray(picture) &&
                              picture.length > 0 ? (
                                picture.map((item, i) =>
                                  typeof item === "string" ? ( // Check if item is a base64-encoded string
                                    <div className="p-5" key={i}>
                                      <FileDownloadButton
                                        base64String={item}
                                        number={parseInt(i) + 1}
                                        fileName={`testing${parseInt(i) + 1}`}
                                      />
                                    </div>
                                  ) : null
                                )
                              ) : (
                                <div>no files</div>
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Typography sx={{ p: 2 }}>Image not visible</Typography>
                      )}
                    </Popover>
                  </div>
                </div>
              </div>
              <input
                id={id}
                type="file"
                class="hidden"
                onChange={onChange}
                accept={accept ? accept : "*"}
                multiple={multiple && multiple}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`form-floatng ${
            formikProps.errors[name] ? "has-error" : ""
          } flex justify-center w-full`}
        >
          <div class="flex items-center justify-center w-full">
            <label
              style={labelstyle}
              for={id}
              class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  "
            >
              <div class="flex flex-col items-center justify-center pt-1 pb-1 ">
                <svg
                  style={{ width: "20px" }}
                  class="w-8 h-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                  <span class="font-semibold">{label}</span>
                </p>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span>
                </p>
              </div>
              <input
                id={id}
                type="file"
                class="hidden"
                onChange={onChange}
                accept={accept ? accept : "*"}
                multiple={multiple && multiple}
              />
            </label>
          </div>

          {/* <TextField

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
      /> */}
        </div>
      )}
    </>
  );
};

export default CustomImageInput;
