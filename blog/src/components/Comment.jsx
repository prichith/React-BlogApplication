export default function Comment(props) {
  const comments = props.count;
  if (comments === 0) {
    return <span className="commentCount">{comments}</span>;
  } else {
    return <span className="circle commentCount">{comments}</span>;
  }
}
