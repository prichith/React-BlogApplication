import { ArticleData, AboutMe } from "../Data/Data";
import Article from "./Article";
import MyName from "./MyName";
import Tags from "./Tags";
import PopularPosts from "./PopularPosts";

export default function MainContent() {
  return (
    <div className="main container">
      <div className="articles">
        {ArticleData.map((article, index) => (
          <Article key={index} data={article} />
        ))}
      </div>
      <div className="side">
        <MyName aboutme={AboutMe} />
        <PopularPosts />
        <Tags />
      </div>
    </div>
  );
}
