import { useState } from "react";
import ReadMore from "./ReadMore";
import Comment from "./Comment";

export default function TitleDescription(props) {
  let originalData = props.data.description;
  let slicedData = originalData.split(" ").slice(0, 100).join(" ");
  let data;
  let displayButton = false;
  let expand = false;

  if (originalData.split(" ").length > 100) {
    data = slicedData;
    displayButton = true;
  } else {
    data = originalData;
  }

  const [description, setDescription] = useState(data);

  const handleReadMore = () => {
    console.log(expand);
    if (expand === false) {
      setDescription(originalData);
      expand = true;
    } else {
      setDescription(slicedData);
      expand = false;
    }
  };

  return (
    <div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="titleFooter">
        {displayButton && <ReadMore handleReadMore={handleReadMore} />}
        <span className="comment">
          <b>Comments</b> <Comment count={props.data.noOfComments} />
        </span>
      </div>
    </div>
  );
}
