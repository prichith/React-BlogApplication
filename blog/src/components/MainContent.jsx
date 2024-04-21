import { aboutMe } from "../datas/data";
import Blog from "./Blog";
import MyName from "./MyName";
import Tags from "./Tags";
import PopularPosts from "./PopularPosts";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MainContent() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getallposts");
        setArticles(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main container">
      <div className="">
        {articles.map((article, index) => (
          <Blog key={index} data={article} />
        ))}
      </div>
      <div className="side">
        <MyName aboutme={aboutMe} />
        <PopularPosts />
        <Tags />
      </div>
    </div>
  );
}
