function Form(props) {
//   const axios = require('axios') //allow you to send a request

// exports.homeRoutes = (req,res)=>{
//     // make a get request to /api/users
//     axios.get('http://localhost:3000/api/users')
//     .then(function(response){
//         res.render('index',{users : response.data})
//     })
//     .catch(err =>{
//         res.send(err)
//     })
// }
  return (
    <div className="form article">
      <form >
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