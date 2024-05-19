import Form from "./Form";
import Preview from "./Preview";
import { useState } from "react";
import dateFormat from "../dateFormat";

function FormAndPreview() {
  let initialState = {
    title: "",
    date: dateFormat(Date.now()),
    description: "",
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blog-header-design-template-24f687b2ff891548109b17b3c5b6ed6d_screen.jpg?ts=1616064569",
    comment: 0,
  }
  const [formData, setFormData] = useState(initialState);

  function changeData(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="container dashboardMain">
      <Form change={changeData} reset={setFormData} resetVal={initialState}/>
      <Preview data={formData} />
    </div>
  );
}

export default FormAndPreview;
