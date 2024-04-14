import { PopularPostsList } from "../Data/Data";
import PopularPostList from "./PopularPostList";

export default function PopularPosts() {
  return (
    <div className="popularPosts article">
      <div className="postHeading">
        <h4>Popular Posts</h4>
      </div>
      <ul>
        {PopularPostsList.map((post, index) => (
          <PopularPostList key={index} data={post} />
        ))}
      </ul>
    </div>
  );
}
