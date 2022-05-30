import React, { useState } from "react";

export default function useForm(validator, initialValue = null) {
  const initialState = {
    value: "",
    error: true,
    touched: false,
  };
  const [fieldState, setFieldState] = useState(initialState);
  const reset = () => {
    setFieldState(initialState);
  };
  const touchHandler = () => {
    setFieldState((prev) => {
      return { ...prev, touched: true };
    });
  };
  const changeHandler = (event) => {
    const value = event.target.value;
    if (validator(value)) {
      setFieldState((prev) => {
        return { ...prev, value: value, error: false };
      });
    } else {
      setFieldState((prev) => {
        return { ...prev, value: value, error: true };
      });
    }
  };
  return { ...fieldState, touchHandler, changeHandler, reset };
}
