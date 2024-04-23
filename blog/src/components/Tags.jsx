import { tagsData } from "../datas/data";
import Tag from "./Tag";

export default function Tags() {
  return (
    <div className="article">
      <div className="postHeading">
        <h4>Tags</h4>
      </div>
      <div className="tags title">
        {tagsData.map((data, index) => (
          <Tag key={index} index={index} list={data} />
        ))}
      </div>
    </div>
  );
}
