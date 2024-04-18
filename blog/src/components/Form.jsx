function Form() {
  return (
    <div className="form article">
      <form onSubmit="">
        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter title"
            name="title"
          />
        </div>
        <div className="row">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Enter description"
            name="description"
          />
        </div>
        <div className="row">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            id="imageUrl"
            type="text"
            placeholder="Enter image url"
            name="imageUrl"
          />
        </div>
        <button>Post</button>
      </form>
    </div>
  );
}

export default Form;