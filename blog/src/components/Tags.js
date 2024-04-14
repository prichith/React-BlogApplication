import { TagsData } from "../Data/Data";
import Tag from "./Tag";

export default function Tags() {
  return (
    <div className="article">
      <div className="postHeading">
        <h4>Tags</h4>
      </div>
      <div className="tags title">
        {TagsData.map((data, index) => (
          <Tag index={index} list={data} />
        ))}
      </div>
    </div>
  );
}
