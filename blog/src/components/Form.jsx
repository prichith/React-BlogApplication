// const axios = require('axios') //allow you to send a request
import axios from 'axios'; 

function Form(props) {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      title:event.target.title.value,
      description:event.target.description.value,
      imageUrl:event.target.imageUrl.value,
    }
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:3001/addpost', formData);
      console.log(response.blog); // Assuming your server sends back some response data
      // Optionally, you can reset the form data state after successful submission
      // setFormData({
      //   title: "",
      //   date: "April 18,2024",
      //   description: "sample",
      //   imageUrl: "",
      //   comments: 0,
      // });
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="form article">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter title"
            name="title" 
            onChange={props.change}
          />
        </div>
        <div className="row">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Enter description"
            name="description" 
            onChange={props.change}
          />
        </div>
        <div className="row">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            id="imageUrl"
            type="text"
            placeholder="Enter image url"
            name="imageUrl" 
            onChange={props.change}
          />
        </div>
        <button>Post</button>
      </form>
    </div>
  );
}

export default Form;