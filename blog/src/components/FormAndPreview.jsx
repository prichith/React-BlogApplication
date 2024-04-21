import Form from "./Form";
import Preview from "./Preview";
import { useState } from "react";



function FormAndPreview() {
  const [formData, setFormData] = useState({
    title: "",
    // date: "April 18,2024",
    description: "sample",
    imageUrl: "",
    // comments: 0
  });

  function changeData(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // 

  // 

  return (
    <div className="container dashboardMain">
      <Form change={changeData} />
      <Preview data={formData} />
    </div>
  );
}

export default FormAndPreview;
