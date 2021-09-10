// import { isBlock } from "typescript";
import { Field } from "formik";
import { useCallback } from "react";
// import styles from "../form.module.css";

export default function TypeRadioButton({ value, setType }) {
  const handleType = useCallback(
    (e) => {
      setType(e.target.value);
    },
    [setType]
  );
 
  return (
    <label>
      <Field type="radio" name="type" value={value} onClick={handleType} />
      {value[0].toUpperCase()+value.slice(1,7)}
    </label>
  );
}
