export default function Tag(props) {
  if (props.index === 0) {
    return <span className="firstTag"> {props.list}</span>;
  } else {
    return <span>{props.list}</span>;
  }
}
