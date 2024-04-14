export default function Comment(props) {
  const numberOfComments = props.count;
  if (numberOfComments === 0) {
    return <span className="commentCount">{numberOfComments}</span>;
  } else {
    return <span className="circle commentCount">{numberOfComments}</span>;
  }
}
