import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerValue({ formik, name, label, ...rest }) {
  const { values, setFieldValue, errors, touched } = formik;

  const showError = touched[name] && errors[name];

  const handleChange = (date) => {
    setFieldValue(name, date, true);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer  components={["DatePicker", "DatePicker"]}  >
        <DatePicker
          label={label}
          value={values[name] ? values[name] : null}
          onChange={handleChange}
          
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
