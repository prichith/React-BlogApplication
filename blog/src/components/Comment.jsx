export default function Comment(props) {
  const no_of_comments = props.count;
  if (no_of_comments === 0) {
    return <span className="commentCount">{no_of_comments}</span>;
  } else {
    return <span className="circle commentCount">{no_of_comments}</span>;
  }
}
