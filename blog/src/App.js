import "./App.css";
import {Data , AboutMe, PopularPostsList ,TagsData } from "./Data";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <header className="container">
        <h1>MY BLOG</h1>
        <p>
          Welcome to the blog of <span className="mark">unknown</span>
        </p>
      </header>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main container">
      <div className="articles">
        {Data.map((article) => <Article data= {article} /> )}
      </div>
      <div className="side">
        <MyName aboutme={AboutMe} />
        <PopularPosts />
        <Tags />
      </div>
    </div>
  );
}

function Article(props) {
  return (
    <div className="article">
      <img src={props.data.imageUrl} alt="article cover" />
      <div className="title">
        <div className="titleHeader">
          <h3>{props.data.heading}</h3>
          <h5>
            <span>Title description,</span>
            <span className="postedTime">{props.data.date}</span>
          </h5>
        </div>
        <div className="description">
          <p>{props.data.description}</p>
        </div>
        <div className="titleFooter">
          <button>READ MORE »</button>
          <span className="comment">
            <b>Comments</b> <Comment count={props.data.noOfComments} />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

function Comment(props) {
  const numberOfComments = props.count;
  if (numberOfComments === 0) {
    return <span className="commentCount">{numberOfComments}</span>;
  } else {
    return <span className="circle commentCount">{numberOfComments}</span>;
  }
}
// my name
function MyName(props) {
  return (
    <div className="article">
      <img src={props.aboutme.imageUrl} alt="working table" />
      <div className="title">
        <div className="titleHeader">
          <h4>My Name</h4>
        </div>
        <div className="description">
          <p>{props.aboutme.aboutMe}</p>
        </div>
      </div>
    </div>
  );
}

// popular posts
function PopularPosts(){
  return(
    <div className="popularPosts article">
    <div className="postHeading">
      <h4>Popular Posts</h4>
    </div>
    <ul>
    { PopularPostsList.map((post)=> <PopularPostList data={post}/>) }
    </ul>
  </div>
  )
}

function PopularPostList(props){
  return(
    <li>
    <img src= {props.data.imageUrl} alt="sample" />
    <div className="postTitle">
      <span className="postHead">{props.data.heading}</span>
      <br />
      <span>{props.data.title}</span>
  </div>
  </li>
  )
}

function Tags(){
  return (
    <div className="article">
    <div className="postHeading">
      <h4>Tags</h4>
    </div>
    <div className="tags title">
    { TagsData.map((data,index) => <Tag list={data} index= {index} />) }

    </div>
  </div>
  )
}

function Tag(props){
  if(props.index === 0){
    return <span className="firstTag"> {props.list}</span>
  }else{
    return <span>{props.list}</span>
  }
}

function Footer(){
  return(
    <footer>
      <div className="container">
        <div className="footerButtons">
          <button>Previous</button>
          <button>Next »</button>
        </div>
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p>
      </div>
  </footer>
  )
}

export default App;
