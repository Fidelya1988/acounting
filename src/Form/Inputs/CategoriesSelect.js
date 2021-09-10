
import styles from "../form.module.css";
import { useSelector } from "react-redux";

import { Field } from "formik";



export default function CategiriesSelect({type}) {
 
  const { categories } = useSelector((state) => state.categories);
//   const [type, setType] = useState("income");

 
  const select = categories.map((c) => {
    return (
      c.type === type && (
        <option key={c.id} id={c.id} value={c.name}>
          {c.name}
        </option>
      )
    );
  });

  return (
    <div>
      {" "}
      <label>
        <span>Category</span>
        <Field
          component="select"
          id="category"
          name="category"
          className={styles.categorySelect}
        >
          <option value="Without">Without category</option>
          {select}
        </Field>
      </label>
    </div>
  );
}
