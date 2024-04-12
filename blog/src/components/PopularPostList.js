export default function PopularPostList(props) {
  return (
    <li>
      <img src={props.data.imageUrl} alt="sample" />
      <div className="postTitle">
        <span className="postHead">{props.data.heading}</span>
        <br />
        <span>{props.data.title}</span>
      </div>
    </li>
  );
}
