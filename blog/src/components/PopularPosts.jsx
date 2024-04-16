import { popular_posts_list } from "../datas/data";
import PopularPostList from "./PopularPostList";

export default function PopularPosts() {
  return (
    <div className="popularPosts article">
      <div className="postHeading">
        <h4>Popular Posts</h4>
      </div>
      <ul>
        {popular_posts_list.map((post, index) => (
          <PopularPostList key={index} data={post} />
        ))}
      </ul>
    </div>
  );
}
