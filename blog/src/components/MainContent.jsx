import { articleData, aboutMe } from "../datas/data";
import Blog from "./Blog";
import MyName from "./MyName";
import Tags from "./Tags";
import PopularPosts from "./PopularPosts";

export default function MainContent() {
  return (
    <div className="main container">
      <div className="articles">
        {articleData.map((article, index) => (
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
