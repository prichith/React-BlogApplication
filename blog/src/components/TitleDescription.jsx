import { useEffect, useState } from "react";
import Comment from "./Comment";

export default function TitleDescription(props) {
  let originalData = props.data.description;
  let slicedData = originalData.split(" ").slice(0, 100).join(" ");
  let displayButton;
  let data = originalData;

  if (originalData.split(" ").length > 100) {
    data = slicedData;
    displayButton = true;
  } else {
    displayButton = false;
  }

  const [description, setDescription] = useState(data);
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    setDescription(data);
  }, [data]);

  function handleReadMore() {
    if (expand === false) {
      setDescription(originalData);
      setExpand(true);
    } else {
      setDescription(slicedData);
      setExpand(false);
    }
  }

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
          <b>Comments</b> <Comment count={props.data.comments} />
        </span>
      </div>
    </div>
  );
}
