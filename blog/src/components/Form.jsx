import axios from "axios";

function Form(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      title: event.target.title.value,
      description: event.target.description.value,
      imageUrl: event.target.imageUrl.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/addpost",
        formData
      );
      if (response.status === 200) alert(response.data);
        event.target.title.value = '';
        event.target.description.value = '';
        event.target.imageUrl.value = '';
        props.reset(props.resetVal);
    } catch (error) {
      console.error("Error:", error);
      alert("Blog posted failed !");
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
