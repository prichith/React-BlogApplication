import Form from "./Form";
import Preview from "./Preview";
import { useState } from "react";
import dateFormat from "../dateFormat"

function FormAndPreview() {
  const [formData, setFormData] = useState({
    title: "",
    date: dateFormat(Date.now()),
    description: "",
    imageUrl: "",
    comment: 0,
  });

  function changeData(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="container dashboardMain">
      <Form change={changeData} />
      <Preview data={formData} />
    </div>
  );
}

export default FormAndPreview;
