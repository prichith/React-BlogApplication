import { aboutMe } from "../datas/data";
import Blog from "./Blog";
import MyName from "./MyName";
import Tags from "./Tags";
import PopularPosts from "./PopularPosts";
import axios from 'axios';
import { useEffect , useState } from "react";

export default function MainContent() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getallposts');
        setArticles(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  // let article;
  // const getData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3001/getallposts');
  //     article = response.data;
  //     console.log(response.data); // axios automatically parses response data
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  // useEffect(()=>{
  //   getData()
  // },[])

  return (
    <div className="main container">
      <div className="articles">

      {articles.map((article, index) => (
          <Blog key={index} data={article} />
        ))}
        {/* {article.map((article, index) => (
          <Blog key={index} data={article} />
        ))} */}
        {/* {articleData.map((article, index) => (
          <Blog key={index} data={article} />
        ))} */}
      </div>
      <div className="side">
        <MyName aboutme={aboutMe} />
        <PopularPosts />
        <Tags />
      </div>
    </div>
  );
}
