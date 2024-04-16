import { useState } from "react";
import Comment from "./Comment";

export default function TitleDescription(props) {
  let originalData = props.data.description;
  let slicedData = originalData.split(" ").slice(0, 100).join(" ");
  let data;
  let displayButton;

  if (originalData.split(" ").length > 100) {
    data = slicedData;
    displayButton = true;
  } else {
    data = originalData;
    displayButton = false;
  }

  const [description, setDescription] = useState(data);
  const [expand, setExpand] = useState(false);

  const handleReadMore = () => {
    if (expand === false) {
      setDescription(originalData);
      setExpand(true);
    } else {
      setDescription(slicedData);
      setExpand(false);
    }
  };
  const buttonClass = displayButton ? "" : "hidden";
  return (
    <div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="titleFooter">
        <button onClick={handleReadMore} className={buttonClass}>
          {expand ? "READ LESS »" : "READ MORE »"}
        </button>
        <span className="comment">
          <b>Comments</b> <Comment count={props.data.no_of_comments} />
        </span>
      </div>
    </div>
  );
}
